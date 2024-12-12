//import libraries, the css file for the note item
import '../styles/itemStyle.css';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import axios from "axios";

//NoteItem component: displays details of a note
const NoteItem = (props)=> {
  //log the note whenever the mynote prop changes
  useEffect(() => {
    console.log("Note Item:", props.mynote);
  }, [props.mynote]);

  //handle the deletion of the note
  const handleDelete = (e) => {
    e.preventDefault();
        //send DELETE request to the server
        axios.delete('http://localhost:4000/api/note/' + props.mynote._id)
            .then(() => {
                props.Refresh(); //refresh the subject list after deletion
            })
            .catch((error) => {
                console.error("Error deleting note:", error);
            });
  };

  return (
    <div>
      <div className="itemStyle-cont">
        <h3>{props.mynote.name}</h3>
        <p>Text: {props.mynote.text}</p>
        <p>Day: {props.mynote.day}</p>
        <div className="item-buttons">
          <Link className="btn-edit" to={"/noteEdit/"+props.mynote._id}>Edit</Link>
          <button className="btn-delete" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;