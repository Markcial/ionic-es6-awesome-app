# Ionic ES6 awesome app
An Ionic app built with ES6 and Hexagonal Architecture.

## Setup
We will use the [ionic-framework](https://hub.docker.com/r/agileek/ionic-framework/) docker image for all the npm, bower and ionic stuff, so
first of all pull the docker image:

```
docker pull agileek/ionic-framework
```

Next we will create the following aliases in order to use npm, bower and ionic commands:

```
alias ionicD="docker run -ti --net host --privileged -v /dev/bus/usb:/dev/bus/usb -v ~/.gradle:/root/.gradle -v \$PWD:/myApp:rw agileek/ionic-framework ionic"
alias bowerD="docker run -ti --net host --privileged -v /dev/bus/usb:/dev/bus/usb -v ~/.gradle:/root/.gradle -v \$PWD:/myApp:rw agileek/ionic-framework bower"
alias npmD="docker run -ti --net host --privileged -v /dev/bus/usb:/dev/bus/usb -v ~/.gradle:/root/.gradle -v \$PWD:/myApp:rw agileek/ionic-framework npm"
```

Finally we will run the following commands:

```
git clone git@github.com:armellini13/ionic-es6-awesome-app.git
cd ionic-es6-awesome-app
npmD install
bowerD install
npmD run compile
ionicD serve
```

You should then see on your browser the Ulabox Music application.

## Development
**ADVICE:** If you are using WebStorm or PhpStorm change on settings, languages and frameworks JavaScript to ECMAScript6.

During development you will have to compile the ES6 code to ES5 code several times, for that reason there is the command:

```
npmD run compile:watch
```

compile:watch will look for any changes on the src/ directory and compile the code if there is any.

## Testing
Tests are ran with karma, just use the command:

```
npmD t
```

## Running on Android
To run the app on your Android device use the following commands:

```
ionicD platform add android
ionicD build android
ionicD run android
```

Remember to have your devide connected and on developer mode. If there are any issues check the FAQ on [agileek/ionic-framework](https://hub.docker.com/r/agileek/ionic-framework/)

## App structure
The aim of this project is to show how you can build an Ionic application with ES6 and Hexagonal Architecture. The code is
a simple Ionic app that searches for songs using the Spotify API. The code is uncomplete and it is the aim of the programmer
that clones this repository to complete the code as he/she wants to understand the structure of the application.

All the code related to AngularJS is found in `src/Awesome/Infrastructure/View/AngularJS`. The file `Main.js` is the entry point of the
app and sets up the whole application registering the controllers, services, states and configuration defined on the files
`AngularJS/Config/Config.js`, `AngularJS/Config/States.js`, `AngularJS/Services/Controllers.js` and `AngularJS/Services/Services.js`.

### How to create a new page
1- Go to `src/Awesome/Infrastrcuture/View/AngularJS/Config/States.js` and define a new state, for example:

```javascript
{
    name: 'App.Foo',
    url: '/foo',
    views: {
      'menuContent': {
        templateUrl: 'templates/foo.html',
        controller: 'FooCtrl'
      }
    }
  }
```

**NOTE:** Notice that the url is defined not as 'Foo' but as 'App.Foo' and the view is defined inside 'menuContent'. The reason
for this is because we are using Ionic's **side menu**. App is the main state, and the different states that we can access from 
the side menu are defined like this. For more information read [here](http://ionicframework.com/docs/api/directive/ionSideMenus/).

2- Create the controller in `src/Awesome/Infrastrcuture/View/AngularJS/Controllers/Foo.js`

```javascript
class FooCtrl {
  constructor($scope) {
    
  }
}

FooCtrl.$inject = ['$scope'];

export default FooCtrl;
```

Remember to add into the $inject array all the services you want to inject to the controller.

3- Declare the controller inside `src/Awesome/Infrastrcuture/View/AngularJS/Config/Services/Controllers.js`
```javascript
{
  name: 'FooCtrl',
  controller: FooCtrl
}
```

4- Create the template for the controller inside `www/templates/foo.html`
```html
<ion-view view-title="Foo">
  <ion-content>
    Foo content
  </ion-content>
</ion-view>
```

**NOTE:** Remember to use the `ion-view` and `ion-content` directves so you content is not shown under the navigation bar.

### How to create a service
1- Create the service
```javascript
class Bar {
  constructor(httpService) {
    
  }
}

export default Bar;
```
2- Declare the service inside `src/Awesome/Infrastrcuture/View/AngularJS/Config/Services/Services.js`
```javascript
{
  name: 'Bar',
  service: Bar
}
```

Remember to define the services you want to inject inside your service. This is done in the same file where you declare it:
```javascript
Bar.$inject = ['httpService'];
```

## Way to go for completing the App
1- Inside the search page create an input to introduce the song to search and listen to the keyUp event. Then 
`search.html` should have something like: 
```html
<input type="text" ng-model="songToSearch" ng-keyUp="search()">
```

and the `SearchCtrl` something like:
```javascript
constructor($scope) {
  $scope.search = function() {
    var song = $scope.songToSearch;
    
    // Search the song
  }
}
```

2- Complete the `SearchSong` service defined in `src/Awesome/Application/Service/SearchSong.js` in order to use the `SpotifyMusicApi`
service and return an array of Song objects. Remember to declare the services as shown [before]().

3- Inject the service inside the `SearchCtrl` and call its `search` function when there is a keyUp event.

```javascript
constructor($scope, SearchSong) {
  $scope.search = function() {
    var song = $scope.songToSearch,
        results;
    
    // Search the song
    results = SearchSong.search(song);
  }
}

...

SearchCtrl.$inject = ['$scope', 'SearchSong'];
```
4- Show the results on the template!

```javascript
// SearchCtrl.js
constructor($scope) {
  $scope.search = function() {
    var song = $scope.songToSearch,
        results;
    
    // Search the song
    $scope.results = SearchSong.search(song);
  }
}
```

```html
<input type="text" ng-model="songToSearch" ng-keyUp="search()">
<ion-list>
    <ion-item ng-repeat="result in results">
    {{result.name()}}
    {{result.artist()}}
  </ion-item>
</ion-list>
```

**ADVICE:** Check out [this](http://ionicframework.com/docs/components/#item-avatars) link and try to make the output nice!
