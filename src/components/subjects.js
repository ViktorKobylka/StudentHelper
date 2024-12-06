import SubjectItem from "./subjectItem";

const Subjects = (props)=>{
    return props.mySubjects.map(
        (subject)=>{
            return <SubjectItem mysubject={subject} key={subject._id} />
        }
    );
}

export default Subjects;