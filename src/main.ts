import { platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular';

import { AppModule } from './app/app.module';

// import { Admob } from '@nativescript/firebase-admob'
// Admob.init()

runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});

