'use strict';

export default [
  {
    name: 'App',
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'MenuCtrl'
  }, {
    name: 'App.Home',
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  }, {
    name: 'App.Search',
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html',
        controller: 'SearchCtrl'
      }
    }
  }, {
    name: 'App.Foo',
    url: '/foo',
    views: {
      'menuContent': {
        templateUrl: 'templates/foo.html',
        controller: 'HomeCtrl'
      }
    }
  }
];
