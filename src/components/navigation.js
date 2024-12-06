import '../styles/navigation.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation = () => {
  return (
        <Navbar>
          <Container>
            <Navbar.Brand href="/">Student Helper</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/schedule">Schedule</Nav.Link>
              <NavDropdown title="Subjects" id="students-dropdown">
                <NavDropdown.Item href="/subjectList">List of subjects</NavDropdown.Item>
                <NavDropdown.Item href="/subjectAdd">Add subject</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Student Notes" id="students-dropdown">
                <NavDropdown.Item href="/studentNotes">List of notes</NavDropdown.Item>
                <NavDropdown.Item href="/addStudentNotes">Add note</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Container>
      </Navbar>
  );
};

export default Navigation;