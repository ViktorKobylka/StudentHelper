//import libraries
const express = require('express');
const app = express();
const port = 4000;

//import and enable CORS
const cors = require('cors');
app.use(cors());

//custom middleware to set CORS headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//middleware to parse request bodies
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//connect to MongoDB database
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.s6qbn.mongodb.net/');

//define schema and model for subjects
const subjectSchema = new mongoose.Schema({
  name:String,
  time:String,
  day:String
});

const subjectModel = new mongoose.model('mySubjects',subjectSchema);

//API endpoint to retrieve all subjects
app.get('/api/subjects', async (req, res) => {
    const subjects = await subjectModel.find({});
    res.status(200).json({subjects})
});

//API endpoint to retrieve a single subject by ID
app.get('/api/subject/:id', async (req ,res)=>{
  const subject = await subjectModel.findById(req.params.id);
  res.json(subject);
})

//API endpoint to update a subject by ID
app.put('/api/subject/:id', async (req, res)=>{
  const subject = await subjectModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.send(subject);
})

//API endpoint to create a new subject
app.post('/api/subjects',async (req, res)=>{
    const {name, time, day} = req.body;

    const newSubject = new subjectModel({name, time, day});
    await newSubject.save();
})

//API endpoint to delete a subject by ID
app.delete('/api/subject/:id', async (req, res) => {
  
  console.log('Deleting subject with id:', req.params.id); //
  const subject = await subjectModel.findByIdAndDelete(req.params.id);
  res.status(200).send({ message: "Subject deleted successfully", subject });
  
});

//define schema and model for notes
const noteSchema = new mongoose.Schema({
  name:String,
  text:String,
  day:String
});

const noteModel = new mongoose.model('myNotes',noteSchema);

//API endpoint to retrieve all notes
app.get('/api/notes', async (req, res) => {
  const notes = await noteModel.find({});
  res.status(200).json({notes})
});

//API endpoint to retrieve a single note by ID
app.get('/api/note/:id', async (req ,res)=>{
  const note = await noteModel.findById(req.params.id);
  res.json(note);
})

//API endpoint to update a note by ID
app.put('/api/note/:id', async (req, res)=>{
  const note = await noteModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.send(note);
})

//API endpoint to create a new note
app.post('/api/notes',async (req, res)=>{
  const {name, text, day} = req.body;

  const newNote = new noteModel({name, text, day});
  await newNote.save();
})

//API endpoint to delete a note by ID
app.delete('/api/note/:id', async (req, res) => {

  console.log('Deleting note with id:', req.params.id); 
  const note = await noteModel.findByIdAndDelete(req.params.id);
  res.status(200).send({ message: "Note deleted successfully", note });

});

//start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});