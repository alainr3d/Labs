var fsAnalyticsDescription; // page description information

var fsAnalyticsHold = ""; // if this is set to "true", then the fsAnalytics function will not complete it's initial run and wait for a second call.

FsApps.analytics = function(me, options) {

    var options = options || {}; // options setup

	var fsType = options.type || 'link'; // get the type of call

	var fsDescription = options.description || fsAnalyticsDescription; // get the description of call

	var realTime = options.realTime || true; // get flag for realtime processing

	var pageView = options.pageView || false; // get pageview request

	var trackingPath = options.tPath || document.location; // get the tracking path

	var fsEventName = options.eventName || fsType; // get the even type to pass to reporting. Default is the type of call.

	var callUDC = (options.callUDC != undefined) ? options.callUDC : true; //the gallery pages call the analytics on pageload and do need 

	var ev;

	trackingPath = encodeURIComponent(trackingPath); // encode all tracking path data


	/* Count Page as a "Page View" or not */

	if (pageView == true) { // see if pageview is set

		pageView = "&pv=1"; // set the flag to be tracked as a new page view

		ev = ''; // set the ev tag

	} else { // if not

		pageView = ""; // set the flag NOT to be tracked as a page view

		ev = "&ev=" + fsEventName + "&"; // set ev tag

	}


	if (typeof(fsPartnerAnalytics) != "undefined") { // for special partner analytics

		fsDescription += "&" + fsPartnerAnalytics; // add their analytics to the string.

	}


	if (FsApps.getUserData("logged-in") == true) {

		fsDescription += "&userstate=signedin"; // add their analytics to the string.

	} else {

		fsDescription += "&userstate=guest"; // add their analytics to the string.

	}


	if (me.href) { // check for link location

		fsDescription += "&link_to=" + me.href; // add link location to the string.

	}


	if (typeof(me.parentNode) != "undefined") {

		if (me.parentNode.href) {

			fsDescription += "&link_to=" + me.parentNode.href; // add link location to the string.

		}

	}


	if (fsAnalyticsHold != true) { //	if a hold hasn't been placed on the launching of analytics


		/* Request Type Launch */

		switch (fsType) { // check the type of call

			case "ini":
				// for initial page load
				if (showTealium) { //do nothing if tealium is loaded

				} else {
					var head = document.getElementsByTagName('head').item(0); // get the header tag

					var script = document.createElement('script'); // create a script tag

					script.src = fsReqDomain + "/fe/js/ntpagetag.js"; // set the script source

					script.type = "text/javascript"; // set the type

					script.defer = true; // set the defer

					head.appendChild(script); // place the script on the page

				}


				if (typeof(fpasSiteId) == "undefined") { // check to see if we are on an fpas site or not

					NTPT_PGEXTRA = fsDescription + "&qc=1"; // if not, then add realtime tracking

				} else { // if so

					NTPT_PGEXTRA = fsDescription; // add the description only with no realtime tracking.

				}


				break;

		}


	} else {

		fsAnalyticsHold = false; // remove the hold... open for second call

	}

	//if(!partnerHeaderPageLoad) 
	//launchMSNTracking(); // call to fire the UDC beacon to MSN... GVD

}

/* END: [GLOBAL ANALYTICS TRACKING] */


/* BEGIN: [Comments] */


/* BEGIN: [Get user logged in data]
 ** Example on calling this function:
 ** FsApps.getUserData("logged-in");
 */

FsApps.getUserData = function(check) {

	//window.console.log('getUserData');

	if (check) { // if there's something to check

		switch (check) { // check it

			case "verified":
				// validation check

				if (typeof(user.VERIFIED) != "undefined" && (user.VERIFIED == '' || user.VERIFIED == '0')) { // if the user is unverified, setup alert

					return false; // return false

				} else { // if the user IS verified

					return true; // return true

				}

				break;

			case "logged-in":
				// login check

				if (typeof(user) == "undefined" || user.USER_ID == "0" || user.USER_ID == "") { // if the user is not logged in

					return false; // return false

				} else { // if the user IS logged in

					return true; // return true

				}

				break;

			case "screen-name":
				// screen name check

				if (typeof(user.SCREEN_NAME) == "undefined" || user.SCREEN_NAME == null || user.SCREEN_NAME == "") { // if the user does not have a screen name

					return false; // return false

				} else { // if the user does

					return true; // return true

				}

				break;

			case "onesite-standing":
				// onsite good standing check

				if (typeof(user.ONESITE_GOOD_STANDING) != "undefined" && (user.ONESITE_GOOD_STANDING == null || user.ONESITE_GOOD_STANDING == "false")) { // if the user is not in good standing

					return false; // return false

				} else { // if the user IS in good standing

					return true; // return true

				}

				break;

		}

	} else { // if nothing to check

		return user; // return full user object

	}

};

/* END: [Get user logged in data] */


FsApps.LoadFunctions.add({
	func: 'FsApps.analytics(this, {type: "ini"})'
});

/*
var tealiumData = $('#analytics-variables').data('analytics');
fsAnalyticsDescription = tealiumData.join("&");
*/