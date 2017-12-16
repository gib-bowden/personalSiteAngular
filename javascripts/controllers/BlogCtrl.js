"use strict"; 

app.controller("BlogCtrl", function($location, $rootScope, $scope, DatabaseService){

    const getBlogs = () => {
        DatabaseService.getBlogs().then((data) => {
            $scope.blogs = data; 
        }).catch((err) => {
            console.log(err); 
        });
    };

    getBlogs(); 

    $scope.selectBlog = (index) => {
        $scope.selectedBlog = $scope.blogs[index];
    };

    $scope.clearSelectedBlog = (event) => {
        event.preventDefault(); 
        $scope.selectedBlog = null; 
        console.log(event); 
    }; 




}); 