'use strict';

/**
 * @ngdoc function
 * @name kontosApp.controller:NotificacionesCtrl
 * @description
 * # NotificacionesCtrl
 * Controller of the kontosApp
 */
angular.module('kontosApp')
  .controller('NotificacionesCtrl', function($scope, notificacion) {
    $scope.imagePath = 'images/yeoman.png';
    $scope.notificacion = notificacion;
  });
