import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation';
import MainPage from './components/mainPage';
import StudentNotes from './components/studentNotes';
import Subjects from './components/subjects';
import Schedule from './components/schedule';
import AddStudentNotes from './components/addStudentNotes';

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/schedule" element={<Schedule></Schedule>} />
        <Route path="/subjects" element={<Subjects></Subjects>} />
        <Route path="/studentNotes" element={<StudentNotes></StudentNotes>} />
        <Route path="/addStudentNotes" element={<AddStudentNotes></AddStudentNotes>} />
        
      </Routes>
    </Router>
  
  );
}

export default App;
