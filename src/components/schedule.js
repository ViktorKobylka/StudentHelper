//import the ScheduleItems component and libraries
import { useEffect, useState } from "react";
import axios from "axios";
import ScheduleItems from "./scheduleItems";

//Schedule component: fetches and displays a sorted list of schedule items
const Schedule = () => {
  //store the list of subjects
  const [subjects, setSubjects] = useState([]);

  //array defining the order of days
  const dayOrder = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  //fetch and refresh subject data from the server
  const Refresh = () => {
    console.log("Reloading subject data...");
    axios
      .get("http://localhost:4000/api/subjects")
      .then((response) => {
        console.log(response.data);

        //sort subjects by day and time 
        const sortedSubjects = response.data.subjects.sort((a, b) => {
          /*compare by day of the week (get index of the day
           and difference, then check for similarity)*/
          const dayDif = dayOrder.indexOf(a.day) - dayOrder.indexOf(b.day);
          if (dayDif !== 0) {
            return dayDif;
          }

          //compare by time (convert the time string into an integer and compare the times)
          const timeA = parseInt(a.time.replace(":", ""), 10);
          const timeB = parseInt(b.time.replace(":", ""), 10); 
          return timeA - timeB;
        });
        //update the state with sorted subjects
        setSubjects(sortedSubjects);
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
      <ScheduleItems mySubjects={subjects} RefreshData={Refresh} />
    </div>
  );
};

export default Schedule;
