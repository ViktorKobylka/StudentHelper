import { useEffect, useState } from "react";
import axios from "axios";
import Subjects from "./subjects";

const SubjectList = ()=>{
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        
        axios.get('http://localhost:4000/api/subjects')
        .then((response) => {
            console.log(response.data);
            setSubjects(response.data.subjects);
        })
        .catch((error) => {
            console.log(error);
        });
    });

    return (
        <div>
            <h3>Schedule</h3>
            <Subjects mySubjects={subjects} />
        </div>
    );
}

export default SubjectList;