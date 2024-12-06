import { useEffect } from "react";
import Card from 'react-bootstrap/Card'

const SubjectItem = (props)=> {
  useEffect(() => {
    console.log("Subject Item:", props.mysubject);
  }, [props.mysubject]); // Only run this effect when the mysubject prop changes

  return (
    <div>
      <Card>
        <Card.Header>{props.mysubject.name}</Card.Header>
        {props.mysubject.time}
        {props.mysubject.day}
      </Card>
    </div>
  );
}

export default SubjectItem;