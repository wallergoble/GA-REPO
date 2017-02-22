const app = angular.module('moviesApp', [ui.router])

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('movies', {
            url: "/movies",
            templateUrl: '<h1>Here are some movies</h1>',
            controller: 'moviesController',
            controllerAs: '$ctrl'
        })
        $urlRouterProvider.otherwise('/');
});

app.controller('moviesController', function() {
    console.log('moviesController is alive!')
});

// app.component('movies', {
//      template: ' <h1>Sup boi, here are the movies</h1>',
//      controller: function() {
//          console.log('moviesCtrl is alive!');
//      }
// });