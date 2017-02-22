var app = angular.module('myApp', ['ui.router'])

app.config(routerConfig);

function routerConfig($stateProvider) {
    $stateProvider
        .state(
            'home', {
                url: '/',
                templateUrl: 'home.html',
                controller: 'homeCtrl',
                controllerAs: '$ctrl' 
        })
        .state(
            'swag', {
                url: '/swag',
                templateUrl: 'swag.html',
                controller: 'swagCtrl',
                controllerAs: '$ctrl' 
        });
}

app.controller('swagCtrl', function() {
    console.log('hello from swag controller');
    this.katie = {
        swag: 0,
        friends: 0,
        wins: 0,
        winner: false,
        loser: true,
        understandsBools: true,
        personalWins: 0.1,
        losses: "infinity"
    }
});