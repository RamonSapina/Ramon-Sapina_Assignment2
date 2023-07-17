let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to projects
let Projects = require('../models/projects');

//manage all routes
router.get('/', (req, res, next) => {
    Projects.find((err, projectList) => {
        if(err){
            return console.error(err);
        }else{
            //console.log(projectList);
            res.render('projects/list', {title: 'Project Information',ProjectList:projectList })
        }
    })
});

//to open add project page
router.get('/add', (req,res,next) => {
    res.render('projects/add', {title: 'Add Project'})
});

//to open update project page
router.get('/update', (req,res,next) => {
    res.render('projects/update', {title: 'Update Project'})
});

//to insert project data into mongoDB collection
router.post('/add', (req, res, next) => {
    //getting data from mongoDB
    let newProject = Projects({
        "Title": req.body.pTitle, 
        "Description": req.body.pDescription,
        "Date": req.body.pDate
    });

    //insert data into mongoDB
    Projects.create(newProject, (err, Projects) => {
        if(err){
            console.log(err);
            res.end(end);
        }else{
            res.redirect('/home')
        }
    });
});

//Retrieve data from MongoDB and Open it in view (FORM)
router.get('/update/:id', (req, res, next) => {
    let id = req.params.id;
    Projects.findById(id, (err, projectToUpdate) => {
        if (err){
            console.log(err);
            res.end(err);

        }else{
            //write code to display the data in view
            res.render('projects/update', {title: 'Update Project', projects: projectToUpdate})

        }
    });
});

//Write code to store updated data into MongoDB
router.post('/update/:id', (req,res,next) => {
    let id = req.params.id;
    let updatedProject = Projects({
        "_id": id,
        "Title": req.body.pTitle,
        "Description": req.body.pDescription,
        "Date": req.body.pDate

    });
    console.log(updatedProject);

    Projects.updateOne({_id: id}, updatedProject, (err) => {

        if (err){ 
            console.log(err);
            res.end(err);

        }else {
            res.redirect('/home')
        }
        
    });
});

module.exports = router;