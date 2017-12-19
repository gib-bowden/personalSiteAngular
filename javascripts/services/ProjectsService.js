"use strict"; 

app.service("ProjectsService", function($q, $http, FIREBASE_CONFIG){

    const getProjects = () => {
        let projects = [];
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/projects.json`).then((results) => {
                let fbProjects = results.data;
                Object.keys(fbProjects).forEach((key) => {
                    fbProjects[key].id = key;
                    projects.push(fbProjects[key]);                   
                });  
                resolve(projects); 
            }).catch((err) => {
                console.log(err);
            });
        });
    };


    return {getProjects}; 
});