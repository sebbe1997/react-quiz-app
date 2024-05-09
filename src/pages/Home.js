import { useNavigate } from "react-router-dom";
import SettingsForm from "../Components/SettingsForm";

// look into react navigation from lessons
export default function Home(){
    const navigate = useNavigate(); 
    function OnPlayBtnClick(){
        console.log("clicked");
       navigate("/quizpage");
    }
    /*IDEA! use a modal when play button is clicked to show settings before going to the quizpage?*/ 
    return(<main className="container m-auto p-5">
           <section className="row bg-light"> 
           <div className="col-4 bg-light">
                <h1 className="fw-bold text-center">Settings</h1>
                <SettingsForm/>
            </div>
                {/*have a component in each col div for settings, and maybe news/information */}
            <div className="col-md-auto bg-light border border-dark">
                <h1 className="row fw-bold p-4">homepage!</h1>
                <h1 className="row fw-bold p-4">homepage!</h1>
                
                <button onClick={OnPlayBtnClick} className="row m-4 p-4 btn btn-primary">Play</button>
            </div>
            <div className="col-4 bg-light">
                <h1 className="fw-bold text-center">information</h1>
            
            </div>
         
            </section>
    </main>)
}