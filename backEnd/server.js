const express = require('express');
const app = express();
const port = 4000;

const cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.s6qbn.mongodb.net/');

const subjectSchema = new mongoose.Schema({
  name:String,
  time:String,
  day:String
});

const subjectModel = new mongoose.model('mySubjects',subjectSchema);

app.get('/api/subjects', async (req, res) => {
    const subjects = await subjectModel.find({});
    res.status(200).json({subjects})
});

app.get('/api/subject/:id', async (req ,res)=>{
  const subject = await subjectModel.findById(req.params.id);
  res.json(subject);
})

app.post('/api/subjects',async (req, res)=>{
    const {name, time, day} = req.body;

    const newSubject = new subjectModel({name, time, day});
    await newSubject.save();

    //res.status(201).json({"message":"Subject Added!",Subject:newSubject});
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});