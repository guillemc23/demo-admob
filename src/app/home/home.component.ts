import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { Drawer } from '@nativescript-community/ui-drawer';
// import { BannerAd, BannerAdSize } from '@nativescript/firebase-admob';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  	public bannerAdId = __DEV__ ? "ca-app-pub-3940256099942544/6300978111" : "ca-app-pub-8231263649131405/8406641119";
	drawer: Drawer;

    @ViewChild("drawer", { static: true }) drawerElementRef: ElementRef;


  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  	/**
	 * Triggers when the BannerAdView is ready and sets up the Ad parameters. Once the ad is showing, scroll the chat again
	 * @param event
	 */
	// async bannerLoaded(event: any) {
	// 	const bannerView = event.object as BannerAd;
	// 	const adSize = BannerAdSize.BANNER;
    // console.log(adSize)
	// 	//const adSize = BannerAdSize.FLUID;
	// 	//const adSize = BannerAdSize.createInLineAdaptiveBanner(bannerView.getActualSize().width, 50, "portrait");
	// 	// const adSize = BannerAdSize.createAnchoredAdaptiveBanner(bannerView.getActualSize().width, "portrait");

	// 	bannerView.size = adSize;

	// 	bannerView.on("adLoaded", () => {
	// 		console.log("Ad loaded");
	// 	});

	// 	bannerView.on("adImpression", () => {
	// 		console.log("Ad impression");
	// 	});

	// 	bannerView.load();
	// }

}
