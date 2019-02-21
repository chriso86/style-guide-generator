import * as express from 'express';
import { connection } from '../../connection';

export const colorRouter = express.Router();

const db = connection.firestore();
const colorsRef = db.collection('colors');

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

/* POST a new color in a project */
colorRouter.post('/', function (req, res) {
  // Set color object from DTO
  const color = req.body.color;

  // Set project ID
  color.projectId = req.body.projectId;

  // Get existing color (and return) or add new color
  colorsRef.where('projectId', '==', color.projectId)
    .where('groupName', '==', color.groupName)
    .where('value', '==', color.value)
    .get()
    .then(function(results) {
      if (results.size) {
        console.log('Color already exists');

        res.send('Color already exists');

        return;
      }

      colorsRef.add(color)
        .then(function (docRef) {
          console.log('Color added');

          res.send(docRef.id);
        })
        .catch(function (e) {
          console.log('Could not add color');

          res.send(e);
        });
    })
    .catch((err) => {
      console.log('Error getting colors', err);
    });
});

/* PUT an existing color in a project */
colorRouter.put('/', function (req, res) {
  // Set color object from DTO
  const color = req.body.color;
  const existingColor = colorsRef.doc(req.body.colorId);

  // Update color
  existingColor.set(color, { merge: true })
    .then(function() {
      console.log('Color successfully updated!');

      res.send(req.body.colorId);
    })
    .catch(function(error) {
      console.error('Error writing document: ', error);
    });
});

/* GET one or all colors for a project */
colorRouter.get('/', function (req, res) {
  colorsRef.where('projectId', '==', req.body.projectId)
    .get()
    .then(function(querySnapshot) {
      const colors: any[] = [];

      querySnapshot.forEach(doc => {
        const color = doc.data();

        color._id = doc.id;

        // @ts-ignore
        colors.push(color);
      });

      res.send(colors);
    })
    .catch(function(e) {
      console.log('Failed to get all colors for project ID: ' + req.body.projectId);
      console.log(e);
    });
});
