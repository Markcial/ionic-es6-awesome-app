'use strict';

/**
 * @name SearchCtrl
 * @description Search controller of the application.
 */
class SearchCtrl {

  constructor($scope, SongSearch) {
    $scope.search = function(song) {
      var promise = SongSearch.search(song);

      promise.then((results) => $scope.results = results )
    }
  }
}

SearchCtrl.$inject = ['$scope', 'SongSearch'];

export default SearchCtrl;
