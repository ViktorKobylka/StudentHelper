//import the noteItem
import NoteItem from "./noteItem";

//Notes component: map over myNotes array and NoteItem for each note
const Notes = (props)=>{
    return props.myNotes.map(
        (note)=>{
            //pass the note data as mynote, unique note key, and Refresh function as props
            return <NoteItem mynote={note} key={note._id} Refresh={props.RefreshData}/>
        }
    );
}

export default Notes;