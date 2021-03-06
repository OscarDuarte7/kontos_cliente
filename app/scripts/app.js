'use strict';

/**
 * @ngdoc overview
 * @name kontosApp
 * @description
 * # kontosApp
 *
 * Main module of the application.
 */
angular
  .module('kontosApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'afOAuth2',
    'treeControl',
    'ngMaterial',
    'ui.grid',
    'ui.grid.edit',
    'ui.grid.rowEdit',
    'ui.grid.cellNav',
    'ui.grid.treeView',
    'ui.grid.selection',
    'ui.grid.exporter',
    'ngStorage',
    'ngWebSocket',
    'angularMoment',
    'ui.utils.masks',
    'pascalprecht.translate'
  ])
    .run(function(amMoment) {
      amMoment.changeLocale('es');
    })
    .config(['$locationProvider','$routeProvider', function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix("");
      $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/notificaciones', {
        templateUrl: 'views/notificaciones.html',
        controller: 'NotificacionesCtrl',
        controllerAs: 'notificaciones'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/preguntas_frecuentes', {
        templateUrl: 'views/preguntas_frecuentes.html',
        controller: 'PreguntasFrecuentesCtrl',
        controllerAs: 'preguntasFrecuentes'
      })
      .when('/gestion_preguntas_frecuentes', {
        templateUrl: 'views/gestion_preguntas_frecuentes.html',
        controller: 'GestionPreguntasFrecuentesCtrl',
        controllerAs: 'gestionPreguntasFrecuentes'
      })
      .when('/preguntas', {
        templateUrl: 'views/preguntas.html',
        controller: 'PreguntasCtrl',
        controllerAs: 'preguntas'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
