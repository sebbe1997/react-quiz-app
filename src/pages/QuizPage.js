import { useEffect, useState } from "react";
import Questions from "../Components/Questions";
import {QuestionService} from "../services/QuestionService.js";
import { useParams } from "react-router-dom";
export default function Quispage(){
    const {amount,category} = useParams();
    
    const [questions, setQuestions] = useState({});
    const [currentQuestion, setcurrentQuestion] = useState(0);
    const [userAnswerList, setUserAnswerList] = useState([]);
   // get the params with useParams and use it in GetQuestions.
  // calls 4 times and eventually gets an error? still shows question but error shows.
    useEffect(()=>{

        (async ()=>{
            const baseUrl = `https://opentdb.com/api.php`;
            const service = new QuestionService(baseUrl);
           
    
            const q = await service.getQuestionsAsync(amount,"multiple",category);
            console.log(q.results);
            setQuestions(q.results);
        })()

    },[amount,category])
  
    console.log(questions);
    
    return(<main className="container bg-light">
        
        <p>{amount !==undefined ? `amount is ${amount}` : "Amount param is undefined"}</p>
        <p>{category !==undefined ? `${category}` : "Category param is undefined"}</p>
                 <Questions  setUseranslist = {setUserAnswerList}
                    result = {questions[currentQuestion]}
                     setnextquestion = {setcurrentQuestion}
                     currentquestion = {currentQuestion} />
    </main>)
}