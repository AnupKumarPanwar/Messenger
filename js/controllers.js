angular.module('starter.controllers', ['ionic','ngCordova'])



.filter("toArray", function(){
    return function(obj) {
        var result = [];
        angular.forEach(obj, function(val, key) {
            result.push(val);
        });
        return result;
    };
})

.controller('DashCtrl', function($scope, $state, $ionicPlatform, $cordovaLocalNotification, $rootScope) {

  $scope.add = function() {
          var alarmTime = new Date();
          alarmTime.setMinutes(alarmTime.getMinutes());
          $cordovaLocalNotification.add({
              id: "1234",
              date: alarmTime,
              message: "All in 1 Messaging App",
              title: "Messenger",
              ongoing: true
          }).then(function () {
              console.log("The notification has been set");
          });
      };
   
      $scope.isScheduled = function() {
          $cordovaLocalNotification.isScheduled("1234").then(function(isScheduled) {
              alert("Notification 1234 Scheduled: " + isScheduled);
          });
      }


      $ionicPlatform.ready(function() {
          $scope.add();
      })



      $rootScope.$on('$cordovaLocalNotification:click',
          function (event, notification, state) {
            $scope.add();
            AdMob.showInterstitial();
          });


	$scope.shareIt = function() {
	    var message = 'Get all your Social Media Messages at one place. Get the app :';
	    var imageSource = null;
	    var shareLink = 'SHARE_URL';
	    window.plugins.socialsharing.share(message, 'Messenger', imageSource, shareLink);
	};

	$scope.rateIt=function()
	{
		window.open('SHARE_URL' , '_system' , 'location=no, clearcache=no, clearsessioncache=no');
	}



  $scope.search='';

 $scope.newAndroidApps=[
   {
     name : 'Facebook',
     img : 'img/social/facebook.png',
     package : 'com.facebook.katana',
     url : 'https://www.facebook.com/',
     count : 4
   },
   {
     name : 'Instagram',
     img : 'img/social/instagram.png',
     package : 'com.instagram.android',
     url : 'https://www.instagram.com/',
     count : 3
   },
   {
     name : 'Flickr',
     img : 'img/social/flickr.png',
     package : 'com.yahoo.mobile.client.android.flick',
     url : 'https://www.flickr.com/',
     count : -1
   },
   {
     name : 'Messenger',
     img : 'img/social/messenger.png',
     package : 'com.facebook.orca',
     url : 'https://www.messenger.com/',
     count : 4
   },
   {
     name : 'Pinterest',
     img : 'img/social/pinterest.png',
     package : 'com.pinterest',
     url : 'https://in.pinterest.com/',
     count : 0
   },
   {
     name : 'LinkedIn',
     img : 'img/social/linkedin.png',
     package : 'com.linkedin.android',
     url : 'https://in.linkedin.com/',
     count : 1
   },
   {
     name : 'Tumblr',
     img : 'img/social/tumblr.png',
     package : 'com.tumblr',
     url : 'https://www.tumblr.com/',
     count : 0
   },
   {
     name : 'Reddit',
     img : 'img/social/reddit.png',
     package : 'com.reddit.frontpage',
     url : 'https://www.reddit.com/',
     count : 0
   },
   {
     name : 'Quora',
     img : 'img/social/quora.png',
     package : 'com.quora.android',
     url : 'https://www.quora.com/',
     count : 0
   },
   {
     name : 'Vine',
     img : 'img/social/vine.png',
     package : 'co.vine.android',
     url : 'https://vine.co/',
     count : 0
   },
   {
     name : 'Periscope',
     img : 'img/social/periscope.png',
     package : 'tv.periscope.android',
     url : 'https://www.periscope.tv/',
     count : 0
   },
   {
     name : 'VK',
     img : 'img/social/vk.png',
     package : 'com.vkontakte.android',
     url : 'https://vk.com/',
     count : 0
   },
   {
     name : 'Telegram',
     img : 'img/social/telegram.png',
     package : 'org.telegram.messenger',
     url : 'https://telegram.org/',
     count : 1
   },
   {
     name : 'Twitter',
     img : 'img/social/twitter.png',
     package : 'com.twitter.android',
     url : 'http://www.twitter.com/',
     count : 2
   },
   {
     name : 'Yahoo',
     img : 'img/social/yahoo.png',
     package : 'com.yahoo.mobile.client.android.mail',
     url : 'https://in.yahoo.com/',
     count : 0
   },
   {
     name : 'Hi5',
     img : 'img/social/hi5.png',
     package : 'com.hi5.app',
     url : 'www.hi5.com/',
     count : 0
   },
   {
     name : 'Myspace',
     img : 'img/social/myspace.png',
     package : 'org.firolab.myspace',
     url : 'https://myspace.com/',
     count : 0
   },
   {
     name : 'Skype',
     img : 'img/social/skype.png',
     package : 'com.skype.m2',
     url : 'https://www.skype.com/',
     count : 0
   },
   {
     name : 'FourSquare',
     img : 'img/social/foursquare.png',
     package : 'com.joelapenna.foursquared',
     url : 'https://foursquare.com/',
     count : 0
   },
   {
     name : 'Gmail',
     img : 'img/social/gmail.png',
     package : 'com.google.android.gm',
     url : 'https://accounts.google.com/',
     count : 1
   }

 ];

// console.log(localStorage.AndroidApps);

  if(localStorage.webAndroidApps==undefined)
  {
    $scope.AndroidApps=$scope.newAndroidApps;
  }
  else
  {
    $scope.AndroidApps= JSON.parse(localStorage.webAndroidApps)
  }


 localStorage.webAndroidApps=JSON.stringify($scope.AndroidApps);


$scope.findApp=function(query)
{
    

    AdMob.showInterstitial();
	  window.open('https://play.google.com/store/search?q='+query , '_system' , 'location=no, clearcache=no, clearsessioncache=no');
}


 $scope.launch=function(app)
 {


    AdMob.showInterstitial();
 	
   app.count+=1;
  localStorage.webAndroidApps=JSON.stringify($scope.AndroidApps);
    appAvailability.check(
       app.package, // Package Name
       function() {           // Success callback
           startApp.set({ /* params */
            "action": "ACTION_SEND",
            "package": app.package,
            "type": "text/plain"
           }, {
           }).start();
       },
       function() {           // Error callback
           window.open(app.url , '_self' , 'location=no, clearcache=no, clearsessioncache=no');
       }

   )

 }


})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // $scope.chats = Chats.all();
  // $scope.remove = function(chat) {
  //   Chats.remove(chat);
  // };

  

  //   $scope.ifInstalled=function(app){
  //   appAvailability.check(
  //       app.package, // Package Name
  //       function() {           // Success callback
  //           // alert(app.name+' is available');
  //           return true;
  //       },
  //       function() {           // Error callback
  //           // alert(app.name+' is not available');
  //           return false;
  //       }

  //   )
  // }

   	// if(AdMob) AdMob.showInterstitial();




    $scope.search='';

   $scope.newAndroidApps=[
     {
       name : 'Snapchat',
       img : 'img/social/snapchat.png',
       package : 'com.snapchat.android',
       url : 'https://play.google.com/store/apps/details?id=com.snapchat.android',
       count : 2
     },
     {
       name : 'Hike',
       img : 'img/social/hike.png',
       package : 'com.bsb.hike',
       url : 'https://play.google.com/store/apps/details?id=com.bsb.hike',
       count : 1
     },
     {
       name : 'WhatsApp',
       img : 'img/social/whatsapp.png',
       package : 'com.whatsapp',
       url : 'https://play.google.com/store/apps/details?id=com.whatsapp',
       count : 5
     },
     {
       name : 'Viber',
       img : 'img/social/viber.png',
       package : 'com.viber.voip',
       url : 'https://play.google.com/store/apps/details?id=com.viber.voip',
       count : 0
     },
     {
       name : 'Musical.ly',
       img : 'img/social/musically.png',
       package : 'com.zhiliaoapp.musically',
       url : 'https://play.google.com/store/apps/details?id=com.zhiliaoapp.musically',
       count : 0
     },
   {
     name : 'Bigo Live',
     img : 'img/social/bigolive.png',
     package : 'sg.bigo.live',
     url : 'https://play.google.com/store/apps/details?id=sg.bigo.live',
     count : 1
   },
   {
     name : 'Line',
     img : 'img/social/line.png',
     package : 'jp.naver.line.android',
     url : 'https://play.google.com/store/apps/details?id=jp.naver.line.android',
     count : 0
   },
   {
     name : 'Tango',
     img : 'img/social/tango.png',
     package : 'com.sgiggle.production',
     url : 'https://play.google.com/store/apps/details?id=com.sgiggle.production',
     count : 0
   },
   {
     name : 'Hangouts',
     img : 'img/social/hangouts.png',
     package : 'com.google.android.talk',
     url : 'https://play.google.com/store/apps/details?id=com.google.android.talk',
     count : 0
   },
   {
     name : 'Tinder',
     img : 'img/social/tinder.png',
     package : 'com.tinder',
     url : 'https://play.google.com/store/apps/details?id=com.tinder',
     count : 0
   },
   {
     name : 'Badoo',
     img : 'img/social/badoo.png',
     package : 'com.badoo.mobile',
     url : 'https://play.google.com/store/apps/details?id=com.badoo.mobile',
     count : 0
   }

   ];

  // console.log(localStorage.AndroidApps);

    if(localStorage.nativeAndroidApps==undefined)
    {
      $scope.AndroidApps=$scope.newAndroidApps;
    }
    else
    {
      $scope.AndroidApps= JSON.parse(localStorage.nativeAndroidApps)
    }


   localStorage.nativeAndroidApps=JSON.stringify($scope.AndroidApps);


  $scope.findApp=function(query)
  {
    

    AdMob.showInterstitial();
    window.open('https://play.google.com/store/search?q='+query , '_system' , 'location=no, clearcache=no, clearsessioncache=no');
  }


   $scope.launch=function(app)
   {
    

    AdMob.showInterstitial();
   	app.count+=1;
    localStorage.nativeAndroidApps=JSON.stringify($scope.AndroidApps);
      appAvailability.check(
         app.package, // Package Name
         function() {           // Success callback
             startApp.set({ /* params */
              "action": "ACTION_SEND",
              "package": app.package,
              "type": "text/plain"
             }, {
             }).start();
         },
         function() {           // Error callback
             window.open(app.url , '_self' , 'location=no, clearcache=no, clearsessioncache=no');
         }

     )

   }


})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
