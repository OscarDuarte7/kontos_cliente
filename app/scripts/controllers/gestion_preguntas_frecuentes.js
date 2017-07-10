'use strict';

/**
 * @ngdoc function
 * @name kontosApp.controller:GestionPreguntasFrecuentesCtrl
 * @description
 * # GestionPreguntasFrecuentesCtrl
 * Controller of the kontosApp
 */
angular.module('kontosApp')
  .controller('GestionPreguntasFrecuentesCtrl', function ($timeout, $q, $log) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var self = this;

        self.simulateQuery = false;
        self.isDisabled    = false;

        self.preguntas         = loadAll();
        self.querySearch   = querySearch;
        self.selectedItemChange = selectedItemChange;
        self.searchTextChange   = searchTextChange;

        // ******************************
        // Internal methods
        // ******************************

        /**
         * Search for repos... use $timeout to simulate
         * remote dataservice call.
         */
        function querySearch (query) {
          var results = query ? self.preguntas.filter( createFilterFor(query) ) : self.preguntas,
              deferred;
          if (self.simulateQuery) {
            deferred = $q.defer();
            $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
            return deferred.promise;
          } else {
            return results;
          }
        }

        function searchTextChange(text) {
          $log.info('Text changed to ' + text);
        }

        function selectedItemChange(item) {
          $log.info('Item changed to ' + JSON.stringify(item));
        }

        /**
         * Build `components` list of key/value pairs
         */
        function loadAll() {
          var repos = [
            {
              'name'      : '¿Prueba 1?',
              'url'       : 'https://github.com/angular/angular.js',
              'respuesta'  : 'Probando 1',
              'pasos'     : '1\n2\n3',
            },
            {
              'name'      : '¿Prueba 2?',
              'url'       : 'https://github.com/angular/angular',
              'respuesta'  : '469',
              'pasos'     : '760',
            },
            {
              'name'      : '¿Prueba 3?',
              'url'       : 'https://github.com/angular/material',
              'respuesta'  : '727',
              'pasos'     : '1,241',
            }
          ];
          return repos.map( function (repo) {
            repo.value = repo.name.toLowerCase();
            return repo;
          });
        }

        /**
         * Create filter function for a query string
         */
        function createFilterFor(query) {
          var lowercaseQuery = angular.lowercase(query);

          return function filterFn(item) {
            return (item.value.indexOf(lowercaseQuery) === 0);
          };
        };

  });
