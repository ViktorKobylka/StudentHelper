//import the Notes component and libraries
import { useEffect, useState } from "react";
import axios from "axios";
import Notes from "./notes";

//StudentNotes component:  fetches and displays a list of note items
const StudentNotes = ()=>{
    //store the list of notes
    const [notes, setNotes] = useState([]);

    //fetch and refresh note data from the server
    const Refresh = () => {
        console.log("Reloading note data...");
        axios.get('http://localhost:4000/api/notes')
            .then((response) => {
                console.log(response.data);
                //set the fetched notes to state
                setNotes(response.data.notes);
            })
            .catch((error) => {
                console.error("Error reloading data:", error);
            });
    };

    //load notes data when the component mounts
    useEffect(() => {
        Refresh();
    }, []);

    return (
        <div>
            <Notes myNotes={notes}  RefreshData={Refresh}/>
        </div>
    );
}

export default StudentNotes;