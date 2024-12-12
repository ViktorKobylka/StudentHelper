import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation';
import MainPage from './components/mainPage';
import StudentNotes from './components/studentNotes';
import SubjectList from './components/subjectList';
import SubjectAdd from './components/subjectAdd';
import Schedule from './components/schedule';
import AddStudentNotes from './components/addStudentNotes';
import SubjectEdit from './components/subjectEdit';
import NoteEdit from './components/noteEdit';
function App() {
  return (
    <Router>
      {/*render navigation bar*/}
      <Navigation/>
      <Routes>
        {/*define routes*/}
        <Route path="/" element={<MainPage />} />
        <Route path="/schedule" element={<Schedule></Schedule>} />
        <Route path="/subjectList" element={<SubjectList></SubjectList>} />
        <Route path="/subjectAdd" element={<SubjectAdd></SubjectAdd>} />
        <Route path="/studentNotes" element={<StudentNotes></StudentNotes>} />
        <Route path="/addStudentNotes" element={<AddStudentNotes></AddStudentNotes>} />
        <Route path='/subjectEdit/:id' element={< SubjectEdit/>} />
        <Route path='/noteEdit/:id' element={< NoteEdit/>} />
      </Routes>
    </Router>
  
  );
}

export default App;
