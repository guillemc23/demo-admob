import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'
// import { AdmobModule } from '@nativescript/firebase-admob/angular';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

// import { firebase } from '@nativescript/firebase-core'
// import { Admob } from "@nativescript/firebase-admob"
import { APP_INITIALIZER } from '@angular/core';

import { DrawerModule } from "@nativescript-community/ui-drawer/angular";



async function provideFirebaseApp() {
  	// await firebase().initializeApp();
    // Admob.init();
}

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, DrawerModule],
  declarations: [AppComponent],
  providers: [
		{
			provide: APP_INITIALIZER,
			useFactory: () => provideFirebaseApp,
			multi: true,
		},
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
