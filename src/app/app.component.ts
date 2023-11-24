import { OnInit } from '@angular/core';
import { Component } from '@angular/core'
import { Admob, MaxAdContentRating } from '@nativescript/firebase-admob'

import { install } from '@nativescript-community/ui-drawer';

@Component({
	selector: 'ns-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  ngOnInit() {
	  
	  Admob.getInstance().requestConfiguration = {
		  maxAdContentRating: MaxAdContentRating.MA,
		  tagForChildDirectedTreatment: false,
			tagForUnderAgeOfConsent: false,
			testDevices: [],
		};
	
		install(); 
	}

		

}
