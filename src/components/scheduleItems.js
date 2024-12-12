//import the ScheduleItem component
import ScheduleItem from "./scheduleItem";

//ScheduleItems component: map over mySubjects array and ScheduleItem for each subject
const ScheduleItems = (props)=>{
    return props.mySubjects.map(
        (subject)=>{
            //pass the subject data as mysubject, unique subject key, and Refresh function as props
            return <ScheduleItem mysubject={subject} key={subject._id} Refresh={props.RefreshData}/>
        }
    );
}

export default ScheduleItems;