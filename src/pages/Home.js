import { useNavigate } from "react-router-dom";
import SettingsForm from "../Components/SettingsForm";
import { useEffect, useState } from "react";
import { QuestionService } from "../services/QuestionService";

// look into react navigation from lessons
export default function Home(){
    const [category,setCategories] = useState({}); // important to use [] instead of {}
    
    const [show, setShow] = useState(false);
    const showModal = () => setShow(true);
    
    const navigate = useNavigate(); 
    function OnPlayBtnClick(e){
        const {questionAmount,category} = e.settings;
        
        navigate(`/quizpage?amount=${questionAmount}&category=${category}`,
        {
            state: {
              amount: questionAmount,
              category: category,
            }});
    }

    useEffect( ()=>{
        const baseUrl = "https://opentdb.com/api.php";
        const service = new QuestionService(baseUrl);
       
            const FetchData = async ()=>{
                if(!ignore){
                    const categories = await service.getQuestionCategories();
                    console.log(categories);
                    setCategories(categories);
                }
           }
           let ignore = false;   
           FetchData();
           return()=>{
            ignore = true;
           }
           
    },[])
    console.log(category);
    /*IDEA! use a modal when play button is clicked to show settings before going to the quizpage?*/ 
    return(<main className="container m-auto p-5">
           <section className="row bg-light"> 
           <div className="col-4 bg-light">
                <h1 className="fw-bold text-center">TBA</h1>
              
            </div>
                {/*have a component in each col div for settings, and maybe news/information */}
            <div className="col-md-auto p-4 bg-light border border-dark">
                <h1 className="row fw-bold p-4">homepage!</h1>
                
                <button onClick={showModal} className="row m-5 p-4 btn btn-primary">Play</button>
                <SettingsForm categories ={category.trivia_categories ? category.trivia_categories:[]}
                 show={show} setShow={setShow} onplayclick ={OnPlayBtnClick}/>
            </div>
            <div className="col-4 bg-light">
                <h1 className="fw-bold text-center">information</h1>
                <p className="text-center">Lorem loremasd asddvdf fgarvetba. farvr</p>
            </div>
         
            </section>
    </main>)
}