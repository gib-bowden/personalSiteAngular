"use strict"; 

app.controller("ProjectCtrl", function($location, $rootScope, $scope, ProjectsService){

    const getProjects = () => {
        ProjectsService.getProjects().then((data) => {
            $scope.projects = data; 
        }).catch((err) => {
            console.log(err); 
        });
    };

    getProjects(); 


}); 