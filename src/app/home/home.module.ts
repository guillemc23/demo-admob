import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'

import { registerElement } from '@nativescript/angular';
registerElement('GoogleSignInButton', () => require('@nativescript/google-signin').GoogleSignInButton);

// import { NativeAdView, MediaView, BannerAd } from "@nativescript/firebase-admob";
// registerElement("NativeAdView", () => NativeAdView);
// registerElement("MediaView", () => MediaView);
// registerElement("BannerAdView", () => BannerAd);

@NgModule({
  imports: [NativeScriptCommonModule, HomeRoutingModule],
  declarations: [HomeComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
