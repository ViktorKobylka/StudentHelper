//import libraries, the css file for the note add
import '../styles/itemAdd.css';
import axios from "axios";
import { useState } from "react";

//AddStudentNotes component: displays form for adding a new note
const AddStudentNotes = () => {

    //state variables for form fields
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [day, setDay] = useState('');

    //check if all form fields are filled
    const checkFormEmpty = name !== "" && text !== "" && day !== "";

    //handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = {name,text,day};
        //send POST request to server
        axios.post('http://localhost:4000/api/notes',subject);
        //Clear fields
        setName('');
        setText('');
        setDay('');
    }

    return (
        <div className="itemAdd-cont">
            <h3>Create new note</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Please enter name of your note: </label>
                    <input type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <div>
                    <label>Please enter your text: </label>
                    <input type="text"
                        className="form-control"
                        value={text}
                        onChange={(e) => { setText(e.target.value) }}
                    />
                </div>
                <div>
                    <label>Please choose the time: </label>
                    <div className="btnDay-group">
                        <button type="button"  onClick={() => setDay("Monday")}>Monday</button>
                        <button type="button"  onClick={() => setDay("Tuesday")}>Tuesday</button>
                        <button type="button"  onClick={() => setDay("Wednesday")}>Wednesday</button>
                        <button type="button"  onClick={() => setDay("Thursday")}>Thursday</button>
                        <button type="button"  onClick={() => setDay("Friday")}>Friday</button>
                        <button type="button"  onClick={() => setDay("Saturday")}>Saturday</button>
                        <button type="button"  onClick={() => setDay("Sunday")}>Sunday</button>
                    </div>
                </div>
                <div>
                    <input type="submit" value="Add the note" 
                    disabled={!checkFormEmpty} id="disabledSubmit"></input>
                </div>
            </form>
        </div>
    );
}
export default AddStudentNotes;