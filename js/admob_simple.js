var admobid = {};

// TODO: replace the following ad units with your own
if( /(android)/i.test(navigator.userAgent) ) { 
  admobid = { // for Android
    banner: 'ca-app-pub-3971583580619783/5805578152',
    interstitial: 'ca-app-pub-3971583580619783/7282311351'
  };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
  admobid = { // for iOS
    banner: 'ca-app-pub-3971583580619783/9107517356',
    interstitial: 'ca-app-pub-3971583580619783/1584250555'
  };
} else {
  admobid = { // for Windows Phone
    banner: 'ca-app-pub-3971583580619783/4537716953',
    interstitial: 'ca-app-pub-3971583580619783/6014450152'
  };
}

if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}

function initApp() {
    if (! AdMob ) { alert( 'admob plugin not ready' ); return; }

    if(AdMob) AdMob.createBanner({
  adId: admobid.banner,
  position: AdMob.AD_POSITION.BOTTOM_CENTER,
  autoShow: true });
    
    AdMob.prepareInterstitial({
        adId: admobid.interstitial,
        autoShow: false
    });

    AdMob.showInterstitial();
     
     
     
     //!!!add the code here!!! - so, just paste what I wrote above:
     setInterval(function(){AdMob.prepareInterstitial({
        adId: admobid.interstitial,
        autoShow: true
    })}, 300000);
}