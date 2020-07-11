import express from 'express';
import controllers from '../controllers/gradeController.js';
//import { Grade } from '../models/gradeModel.js';

const app = express();

app.post('/grade/', controllers.create);
app.get('/grade/', controllers.findAll);
app.get('/grade/:id', controllers.findOne);
app.put('/grade/:id', controllers.update);
app.delete('/grade/:id', controllers.remove);
app.delete('/grade/', controllers.removeAll);

export { app as gradeRouter };
//Substituido controller por Grade
