'use strict';

/**
 * @name HomeCtrl
 * @description Home controller of the application.
 */
class HomeCtrl {

  constructor($scope) {
    $scope.name = 'Ulabox Engineering Team';
  }
}

HomeCtrl.$inject = ['$scope'];

export default HomeCtrl;
