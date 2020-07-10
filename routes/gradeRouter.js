import express from 'express';
import Grades from '../controllers/gradeController.js';
//import { Grade } from '../models/gradeModel.js';

const app = express();

app.post('/grade/', Grades.create);
app.get('/grade/', Grades.findAll);
app.get('/grade/:id', Grades.findOne);
app.put('/grade/:id', Grades.update);
app.delete('/grade/:id', Grades.remove);
app.delete('/grade/', Grades.removeAll);

export { app as gradeRouter };
//Substituido controller por Grade
