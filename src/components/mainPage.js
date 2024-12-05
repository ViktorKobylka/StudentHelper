import '../styles/mainPage.css';

const MainPage = ()=>{
    return(
        <div className="mainPage-cont">
            <h2>Welcome to Student Helper</h2>
                <p>This website is designed to provide the ability for students to monitor and track their schedule, tasks and goals</p>
            <ul>
                <li>Create your subject schedule and keep him updated</li>
                <li>Explore all your subjects</li>
                <li>Remember all your plans by creating notes</li>
            </ul>
            <p id="p-center">I hope you find everything you're looking for and never miss your plans and tasks.
                 Enjoy your visit!</p>
        </div>
    );
}

export default MainPage;