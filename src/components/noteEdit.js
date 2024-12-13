//import libraries, the css file for the note edit
import '../styles/itemAdd.css';
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//NoteEdit component: displays form for editing a note
const NoteEdit = () =>  {
    //extract note ID from the URL
    const {id} = useParams();
    //state variables for form fields
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    //hook for the navigation after editing
    const navigate = useNavigate();

    //check if all form fields are filled
    const checkFormEmpty = name !== "" && text !== "" && day !== "";

    //fetch note data when the component is loaded or ID changes
    useEffect(()=>{
        axios.get('http://localhost:4000/api/note/'+id)
        .then((res)=>{
            console.log("sucess "+res.data);
            //set initial values for the form
            setName(res.data.name);
            setText(res.data.text);
            setDay(res.data.day);
        })
        .catch((err)=>{console.log(err)});
    },[id]);

    //handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const note = {name,text,day};

        //send PUT request to update the note
        axios.put('http://localhost:4000/api/note/'+id, note)
        .then((res)=>{
            console.log("Edited: "+res.data);
            navigate('/studentNotes');
        })
        .catch((err)=>{
            console.log(err);
        });
      
    }

    return (
        <div className="itemAdd-cont">
            <h3>Edit current note</h3>
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
export default NoteEdit;