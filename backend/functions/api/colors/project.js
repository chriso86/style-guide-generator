var express = require('express');
var router = express.Router();
const admin = require('../connection');
var db = admin.firestore();
var projectsRef = db.collection('projects');

// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});

/* POST a new project */
router.post('/', function (req, res) {
    // Set project object from DTO
    var project = req.body.project;

    // Get existing color (and return) or add new color
    projectsRef.where('name', '==', color.project.name)
        .get()
        .then(function (results) {
            if (results.size) {
                console.log('A project with this name already exists');

                res.send('A project with this name already exists');

                return;
            }

            projectsRef.add(project)
                .then(function (docRef) {
                    console.log('Project added');

                    res.send(docRef.id);
                })
                .catch(function (e) {
                    console.error('Could not add project');
                    console.error(e);

                    res.error('Could not add project')
                });
        })
        .catch((err) => {
            console.error('Error getting projects', err);

            res.error('Error getting projects', err);
        });
});

/* PUT a project (update) */
router.put('/', function (req, res) {
    // Set color object from DTO
    var project = req.body.project;
    var existingProject = projectsRef.doc(req.body.projectId);

    // Update color
    existingProject.set(project, {merge: true})
        .then(function () {
            console.log("Project successfully updated!");

            res.send(req.body.projectId);
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);

            res.error("Error writing document: ", error);
        });
});

/* GET a project */
router.get('/', function (req, res) {
    if (!req.body.projectId) {
        console.error('Please provide a project ID');

        res.error('Please provide a project ID');

        return;
    }

    var existingProject = projectsRef.doc(req.body.projectId);

    if (!existingProject) {
        console.error('No project found matching ID: ' + req.body.projectId);

        res.error('No project found matching ID: ' + req.body.projectId);

        return;
    }

    existingProject._id = req.body.projectId;

    res.send(existingProject);
});

/* GET all projects */
router.get('/', function (req, res) {
    var projects = [];

    projectsRef.get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(doc => {
                var project = doc.data();

                project._id = doc.id;

                projects.push(project);
            });

            res.send(projects);
        })
        .catch(function(e) {
            console.error('Failed to get all projects');
            console.error(e);

            res.error('Failed to get all projects');
        });
});

module.exports = router;
