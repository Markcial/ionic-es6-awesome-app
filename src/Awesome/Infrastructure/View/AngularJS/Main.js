'use strict';

// In order to use all ES6 features
// in ionic's browser
import 'babel-polyfill'

// App imports
import { IonicConfiguration, IonicRun } from './Config/Config'
import states from './Config/States'
import services from './Config/Services/Services'
import controllers from './Config/Services/Controllers'

/**
 * @name AwesomeApp
 * @description Main module of the application.
 */
let AwesomeApp = angular.module('AwesomeApp', ['ionic']);

// Ionic Configuration
AwesomeApp.config(IonicConfiguration);
AwesomeApp.run(IonicRun);

// States declaration
AwesomeApp.config(function($stateProvider, $urlRouterProvider) {

  var key;

  for (key in states) {
    if (states.hasOwnProperty(key)) {
      $stateProvider.state(states[key].name, states[key]);
    }
  }

  $urlRouterProvider.otherwise('/app/home');
});

// Services and Controllers declaration
var service, controller;

for (service of services) {
   AwesomeApp.service(service.name, service.service);
}

for (controller of controllers) {
  AwesomeApp.controller(controller.name, controller.controller);
}
