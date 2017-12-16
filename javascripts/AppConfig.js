"use strict";

app.run(function($location, $rootScope, FIREBASE_CONFIG){
    firebase.initializeApp(FIREBASE_CONFIG);

    //watch method that fires on change of a route.  3 inputs. 
    //event is a change event
    //currRoute is information about your current route
    //prevRoute is information about the route you came from
    $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute) {
    
        var appTo;    
        // to keep error from being thrown on page refresh
        if (currRoute.originalPath) {
          appTo = currRoute.originalPath.indexOf('/aboutme') !== -1;
        }
    
        if (!appTo) {
          event.preventDefault();
          $location.path('/aboutme');
        }

        $rootScope.prevRoute = prevRoute; 
      });
}); 



app.config(function($routeProvider, $locationProvider){
    
    $routeProvider
        .when("/aboutme", {
            templateUrl: 'partials/about-me.html',
            controller: 'AboutMeCtrl'
        })
        .when("/blog", {
            templateUrl: 'partials/blog.html',
            controller: 'BlogCtrl',

        })
        .when("/contact", {
            templateUrl: 'partials/contact.html',
            controller: 'ContactCtrl',

        })
        .when("/experience", {
            templateUrl: 'partials/experience.html',
            controller: 'ExperienceCtrl',

        })
        .when("/projects", {
            templateUrl: 'partials/projects.html',
            controller: 'ProjectsCtrl',

        })
        .otherwise("/aboutme");
}); 