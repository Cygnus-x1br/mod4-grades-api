import mongoose from 'mongoose';
import dotenv from 'dotenv';
//Com a alteração no grade models fazemos a importação aqui no index.
import gradeModel from './gradeModel.js';

dotenv.config();

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;

db.grade = gradeModel(mongoose);

export { db };
