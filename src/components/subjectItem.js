//import libraries, the css file for the subject item
import '../styles/itemStyle.css';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import axios from "axios";

//SubjectItem component: displays details of a subject
const SubjectItem = (props)=> {
  //log the subject whenever the mysubject prop changes
  useEffect(() => {
    console.log("Subject Item:", props.mysubject);
  }, [props.mysubject]);

  //handle the deletion of the subject
  const handleDelete = (e) => {
    e.preventDefault();
        //send DELETE request to the server
        axios.delete('http://localhost:4000/api/subject/' + props.mysubject._id)
            .then(() => {
                props.Refresh(); //refresh the subject list after deletion
            })
            .catch((error) => {
                console.error("Error deleting movie:", error);
            });
  };

  return (
    <div>
      <div className="itemStyle-cont">
        <h3>{props.mysubject.name}</h3>
        <p>Time: {props.mysubject.time}</p>
        <p>Day: {props.mysubject.day}</p>
        <div className="item-buttons">
          <Link className="btn-edit" to={"/subjectEdit/"+props.mysubject._id}>Edit</Link>
          <button className="btn-delete" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default SubjectItem;