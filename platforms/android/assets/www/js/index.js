angular.module('app', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html'
    })
    
    .state('menu.news', {
      url: '/news',
      views: {
          'menuContent' :{
            templateUrl: 'templates/news.html',
            controller : 'NewsCtrl'
          }
      }
    })
    
    .state('menu.myPlaces', {
      url: '/myPlaces',
      views: {
          'menuContent' :{
            templateUrl: 'templates/myPlaces.html',
            controller : 'PlacesCtrl'
          }
      }
    })
    
    .state('menu.newBooking', {
      url: '/newBooking',
      views: {
          'menuContent' :{
            templateUrl: 'templates/newBooking.html'
          }
      }
    })
    
    .state('menu.myBookings', {
      url: '/myBookings',
      views: {
          'menuContent' :{
            templateUrl: 'templates/myBookings.html',
            controller : 'BookingsCtrl'
          }
      }
    })
    
    .state('menu', {
      url: '/menu',
      abstract: true,
      templateUrl: 'templates/menu.html'
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
	  name : 'Паб',
	  type : 'Новая акция',
	  text : "Сверхкрутая акция только для вас!!!"
  },{
	  name : 'Парикмахерская "У леса"',
	  type : 'new offer',
	  text : "Еще одна отличная акция от нас!)"
  }];
  
})

.controller('PlacesCtrl', function($scope) {
  
  $scope.places = [{
	  name : 'Парикмахерская "У леса"',
	  address : 'Невский 51',
	  time : '13.00-22.00'
  },{
	  name : 'Паб',
	  address : 'наб. Обводного канала 41',
	  time : '16.00-02.00'
  }];
  
})

.controller('BookingsCtrl', function($scope) {
  
  $scope.bookings = [{
	  name : 'Парикмахерская',
	  info : 'Лена',
	  time : '15:30'
  },{
	  name : 'Паб',
	  info : 'Столик 15',
	  time : '23:20'
  }];
  
});