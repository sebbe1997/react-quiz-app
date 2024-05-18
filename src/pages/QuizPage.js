import { useEffect, useState } from "react";
import Questions from "../Components/Questions";
import {QuestionService} from "../services/QuestionService.js";
import { useLocation } from "react-router-dom";
export default function Quispage(){
    const location = useLocation();
    const amount = location.state.amount;
    const category = location.state.category;
    const [questions, setQuestions] = useState({});
    const [currentQuestion, setcurrentQuestion] = useState(0);
    const [userAnswerList, setUserAnswerList] = useState([]);
   /*

    Dont work, calls api to many times and gets status code 429?
    gets error in questionservice when Useeffect is called multiple times.
    maybe use   https://rapidapi.com/jayeshvijay649/api/quiz26
                https://rapidapi.com/apininjas/api/trivia-by-api-ninjas
                https://rapidapi.com/lewispour1994/api/trivia-quiz-questions-api/
                https://rapidapi.com/ExoWatts/api/trivia12 similar json structure.
                create a custom hook for data fetching? useFetch?
           useEffect(() =>{
       
        async function FetchData(){
            const baseUrl = `https://opentdb.com/api.php`;
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
  */
   
   
       
        async function FetchData(e){
            const baseUrl = `https://opentdb.com/api.php`;
            const service = new QuestionService(baseUrl);
           
                
                const newq = await service.getQuestionsAsync(amount,"multiple",category);
                
                setQuestions(newq);
                
            
        }
        
   
  
   
   
    return(<main className="container bg-light">
                <button className="" onClick={FetchData}>Get questions</button>
                  <Questions  setUseranslist = {setUserAnswerList} useAnswerList = {userAnswerList}
                    result = {questions.results}
                     setnextquestion = {setcurrentQuestion}
                     currentquestion = {currentQuestion} />
    </main>)
}