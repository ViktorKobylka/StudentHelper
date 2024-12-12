//import the css file for the schedule item
import '../styles/itemStyle.css';

//ScheduleItem component: displays details about a specific schedule item
const ScheduleItem = (props)=> {
  return (
    <div>
      <div className="itemStyle-cont">
        <h3>{props.mysubject.name}</h3>
        <p>Time: {props.mysubject.time}</p>
        <p>Day: {props.mysubject.day}</p>
      </div>
    </div>
  );
}

export default ScheduleItem;