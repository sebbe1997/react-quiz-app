import { useEffect, useState } from "react";
import Questions from "../Components/Questions";
import {QuestionService} from "../services/QuestionService.js";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Quispage(){
    const location = useLocation();
    const amount = location.state.amount;
    const category = location.state.category;
    const [questions, setQuestions] = useState(null);
    const [currentQuestion, setcurrentQuestion] = useState(0);
    const [userAnswerList, setUserAnswerList] = useState([]);
   /*
    maybe use   https://rapidapi.com/jayeshvijay649/api/quiz26
                https://rapidapi.com/apininjas/api/trivia-by-api-ninjas
                https://rapidapi.com/lewispour1994/api/trivia-quiz-questions-api/
                https://rapidapi.com/ExoWatts/api/trivia12 similar json structure. 
  */
   
    useEffect(() =>{
       
        async function FetchData(){
            const baseUrl = `https://opentdb.com/api.php`;
            setQuestions(null);
            const service = new QuestionService(baseUrl);
            if(!ignore){
                
                const newq = await service.getQuestionsAsync(amount,"multiple",category);
                
                setQuestions(newq);
                
            }
        }
        let ignore = false;
        FetchData();
        return ()=>{
            ignore = true;
        }
        
        
       

    },[category,amount])
  
   
    console.log(questions);
    return(<main className="container bg-light">

                  <Questions  setUseranslist = {setUserAnswerList} useAnswerList = {userAnswerList}
                    result = {questions}
                     setnextquestion = {setcurrentQuestion}
                     currentquestion = {currentQuestion} />
    </main>)
}