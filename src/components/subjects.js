//import the SubjectItem
import SubjectItem from "./subjectItem";

//Subjects component: map over mySubjects array and SubjectItem for each subject
const Subjects = (props)=>{
    return props.mySubjects.map(
        (subject)=>{
            //pass the subject data as mysubject, unique subject key, and Refresh function as props
            return <SubjectItem mysubject={subject} key={subject._id} Refresh={props.RefreshData}/>
        }
    );
}

export default Subjects;