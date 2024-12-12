//import the Subjects component and libraries
import { useEffect, useState } from "react";
import axios from "axios";
import Subjects from "./subjects";

//SubjectList component:  fetches and displays a list of subject items
const SubjectList = ()=>{
    //store the list of subjects
    const [subjects, setSubjects] = useState([]);

    //fetch and refresh subject data from the server
    const Refresh = () => {
        console.log("Reloading subject data...");
        axios.get('http://localhost:4000/api/subjects')
            .then((response) => {
                console.log(response.data);
                //set the fetched subjects to state
                setSubjects(response.data.subjects);
            })
            .catch((error) => {
                console.error("Error reloading data:", error);
            });
    };

    //load subjects data when the component mounts
    useEffect(() => {
        Refresh();
    }, []);

    return (
        <div>
            <Subjects mySubjects={subjects}  RefreshData={Refresh}/>
        </div>
    );
}

export default SubjectList;