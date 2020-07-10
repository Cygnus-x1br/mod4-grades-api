import express from 'express';
import Grade from '../controllers/gradeController.js';
//import { Grade } from '../models/gradeModel.js';

const app = express();

app.post('/grade/', Grade.create);
app.get('/grade/', Grade.findAll);
app.get('/grade/id', Grade.findOne);
app.put('/grade/id', Grade.update);
app.delete('/grade/id', Grade.remove);
app.delete('/grade/', Grade.removeAll);

export { app as gradeRouter };
//Substituido controller por Grade
