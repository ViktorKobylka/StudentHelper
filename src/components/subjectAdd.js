//import libraries, the css file for the subject add
import '../styles/itemAdd.css';
import axios from "axios";
import { useState } from "react";

//SubjectAdd component: displays form for adding a new subject
const SubjectAdd = () => {

    //state variables for form fields
    const [name, setName] = useState('');
    const [time, setTime] = useState('');
    const [day, setDay] = useState('');

    //check if all form fields are filled
    const checkFormEmpty = name !== "" && time !== "" && day !== "";

    //handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = {name,time,day};
        //send POST request to server
        axios.post('http://localhost:4000/api/subjects',subject);
        //Clear fields
        setName('');
        setTime('');
        setDay('');
    }

    return (
        <div className="itemAdd-cont">
            <h3>Create new subject</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Please enter name of subject: </label>
                    <input type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <div>
                    <label>Please choose the time: </label>
                    <div className="btnTime-group">
                        <button type="button"  onClick={() => setTime("9:00")}>9:00</button>
                        <button type="button"  onClick={() => setTime("10:00")}>10:00</button>
                        <button type="button"  onClick={() => setTime("11:00")}>11:00</button>
                        <button type="button"  onClick={() => setTime("12:00")}>12:00</button>
                        <button type="button"  onClick={() => setTime("13:00")}>13:00</button>
                        <button type="button"  onClick={() => setTime("14:00")}>14:00</button>
                        <button type="button"  onClick={() => setTime("15:00")}>15:00</button>
                        <button type="button"  onClick={() => setTime("16:00")}>16:00</button>
                        <button type="button"  onClick={() => setTime("17:00")}>17:00</button>
                        <button type="button"  onClick={() => setTime("18:00")}>18:00</button>
                    </div>
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
                    <input type="submit" value="Add subject" 
                    disabled={!checkFormEmpty} id="disabledSubmit"></input>
                </div>
            </form>
        </div>
    );
}
export default SubjectAdd;