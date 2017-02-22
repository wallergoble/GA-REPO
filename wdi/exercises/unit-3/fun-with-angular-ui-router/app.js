const app = angular.module('myApp', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
         url: '/',
         templateUrl: 'home.html',
         controller: 'homeCtrl',
         controllerAs: '$ctrl'
     });
     $stateProvider
     .state('about', {
         url: '/about',
         templateUrl: 'about.html',
         controller: 'aboutCtrl',
         controllerAs: '$ctrl'
     })
     $urlRouterProvider.otherwise('/');
});
app.controller('homeCtrl', function() {
    this.message = ' ~~~its lit~~~ '
    console.log('hello from homeCtrl');
});
app.controller('aboutCtrl', function() {
    this.title = 'About my movies app';
});