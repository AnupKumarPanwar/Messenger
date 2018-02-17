cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-facebookads.FacebookAds",
        "file": "plugins/cordova-plugin-facebookads/www/FacebookAds.js",
        "pluginId": "cordova-plugin-facebookads",
        "clobbers": [
            "window.FacebookAds"
        ]
    },
    {
        "id": "cordova-plugin-flurry.FlurryAds",
        "file": "plugins/cordova-plugin-flurry/www/Flurry.js",
        "pluginId": "cordova-plugin-flurry",
        "clobbers": [
            "window.FlurryAds"
        ]
    },
    {
        "id": "cordova-plugin-admobpro.AdMob",
        "file": "plugins/cordova-plugin-admobpro/www/AdMob.js",
        "pluginId": "cordova-plugin-admobpro",
        "clobbers": [
            "window.AdMob"
        ]
    },
    {
        "id": "cordova-plugin-appavailability.AppAvailability",
        "file": "plugins/cordova-plugin-appavailability/www/AppAvailability.js",
        "pluginId": "cordova-plugin-appavailability",
        "clobbers": [
            "appAvailability"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "ionic-plugin-keyboard.keyboard",
        "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
        "pluginId": "ionic-plugin-keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
        "runs": true
    },
    {
        "id": "onesignal-cordova-plugin.OneSignal",
        "file": "plugins/onesignal-cordova-plugin/www/OneSignal.js",
        "pluginId": "onesignal-cordova-plugin",
        "clobbers": [
            "OneSignal"
        ]
    },
    {
        "id": "es6-promise-plugin.Promise",
        "file": "plugins/es6-promise-plugin/www/promise.js",
        "pluginId": "es6-promise-plugin",
        "runs": true
    },
    {
        "id": "cordova-plugin-x-socialsharing.SocialSharing",
        "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
        "pluginId": "cordova-plugin-x-socialsharing",
        "clobbers": [
            "window.plugins.socialsharing"
        ]
    },
    {
        "id": "com.lampa.startapp.startapp",
        "file": "plugins/com.lampa.startapp/www/startApp.js",
        "pluginId": "com.lampa.startapp",
        "merges": [
            "startApp"
        ]
    },
    {
        "id": "cordova-plugin-local-notification.LocalNotification",
        "file": "plugins/cordova-plugin-local-notification/www/local-notification.js",
        "pluginId": "cordova-plugin-local-notification",
        "clobbers": [
            "cordova.plugins.notification.local",
            "plugin.notification.local"
        ]
    },
    {
        "id": "cordova-plugin-local-notification.LocalNotification.Core",
        "file": "plugins/cordova-plugin-local-notification/www/local-notification-core.js",
        "pluginId": "cordova-plugin-local-notification",
        "clobbers": [
            "cordova.plugins.notification.local.core",
            "plugin.notification.local.core"
        ]
    },
    {
        "id": "cordova-plugin-local-notification.LocalNotification.Util",
        "file": "plugins/cordova-plugin-local-notification/www/local-notification-util.js",
        "pluginId": "cordova-plugin-local-notification",
        "merges": [
            "cordova.plugins.notification.local.core",
            "plugin.notification.local.core"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-facebook-audnet-sdk": "4.26.0",
    "cordova-plugin-extension": "1.5.2",
    "cordova-plugin-facebookads": "4.23.2",
    "cordova-plugin-admob-facebook": "4.23.0",
    "cordova-plugin-flurry": "5.3.3",
    "cordova-plugin-admob-flurry": "5.4.4",
    "cordova-plugin-admobpro": "2.29.23",
    "cordova-plugin-appavailability": "0.4.2",
    "cordova-plugin-console": "1.0.7",
    "cordova-plugin-device": "1.1.6",
    "cordova-plugin-inappbrowser": "1.7.1",
    "cordova-plugin-splashscreen": "4.0.3",
    "cordova-plugin-statusbar": "2.2.3",
    "cordova-plugin-whitelist": "1.3.2",
    "ionic-plugin-keyboard": "2.2.1",
    "onesignal-cordova-plugin": "2.2.0",
    "es6-promise-plugin": "4.1.0",
    "cordova-plugin-x-socialsharing": "5.2.1",
    "com.lampa.startapp": "0.1.4",
    "cordova-plugin-app-event": "1.2.1",
    "cordova-plugin-local-notification": "0.8.4"
};
// BOTTOM OF METADATA
});