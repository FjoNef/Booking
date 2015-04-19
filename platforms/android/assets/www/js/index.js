angular.module('app', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    
    .state('login', {
      url: '/login',
      templateUrl: 'login.html'
    })
    
    .state('menu.news', {
      url: '/news',
      views: {
          'menuContent' :{
            templateUrl: 'news.html',
            controller : 'NewsCtrl'
          }
      }
    })
    
    .state('menu.myPlaces', {
      url: '/myPlaces',
      views: {
          'menuContent' :{
            templateUrl: 'myPlaces.html',
            controller : 'PlacesCtrl'
          }
      }
    })
    
    .state('menu.newBooking', {
      url: '/newBooking',
      views: {
          'menuContent' :{
            templateUrl: 'newBooking.html'
          }
      }
    })
    
    .state('menu.myBookings', {
      url: '/myBookings',
      views: {
          'menuContent' :{
            templateUrl: 'myBookings.html',
            controller : 'BookingsCtrl'
          }
      }
    })
    
    .state('menu', {
      url: '/menu',
      abstract: true,
      templateUrl: 'menu.html'
    });
  
  $urlRouterProvider.otherwise('/login');
})

.controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})

.controller('NewsCtrl', function($scope) {
  
  $scope.news = [{
	  name : 'Pub',
	  type : 'new offer',
	  text : "This is a \"Facebook\" styled Card. The header is created from a Thumbnail List item,\nthe content is from a card-body consisting of an image and paragraph text. The footer\nconsists of tabs, icons aligned left, within the card-footer."
  },{
	  name : 'Bar',
	  type : 'new offer',
	  text : "This is a \"Facebook\" styled Card. The header is created from a Thum"
  }];
  
})

.controller('PlacesCtrl', function($scope) {
  
  $scope.places = [{
	  name : 'Bar',
	  address : 'Spb, app. 66',
	  time : '13-22'
  },{
	  name : 'Pub',
	  address : 'Moscow, 65 ave.',
	  time : '16-02'
  }];
  
})

.controller('BookingsCtrl', function($scope) {
  
  $scope.bookings = [{
	  name : 'Bar',
	  info : 'table 3',
	  time : '15:30'
  },{
	  name : 'Pub',
	  info : 'table 15',
	  time : '23:20'
  }];
  
});