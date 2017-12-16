"use strict"; 

app.service("DatabaseService", function($q, $http, FIREBASE_CONFIG){

    const getBlogs = () => {
        let blogs = [];
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/blogs.json`).then((results) => {
                let fbBlogs = results.data;
                Object.keys(fbBlogs).forEach((key) => {
                    fbBlogs[key].id = key;
                    blogs.push(fbBlogs[key]);                   
                });  
                resolve(blogs); 
            }).catch((err) => {
                console.log(err);
            });
        });
    };


    return {getBlogs}; 
});
