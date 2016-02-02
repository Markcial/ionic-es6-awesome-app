'use strict';

var IonicConfiguration, IonicRun;

/**
 * @description: Initial Ionic Configuration
 */
IonicConfiguration = function($ionicConfigProvider) {
  $ionicConfigProvider.views.transition('none');
};

IonicConfiguration.$inject = ['$ionicConfigProvider'];

/**
 * @description: Running commands for Ionic
 */
IonicRun = function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
};

IonicRun.$inject = ['$ionicPlatform'];

export { IonicConfiguration, IonicRun };
