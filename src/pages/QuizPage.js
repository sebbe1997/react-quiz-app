import { useState } from "react";
import Questions from "../Components/Questions";
import {QuestionService} from "../services/QuestionService.js";
export default function Quispage(){
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setcurrentQuestion] = useState(0);
    const [userAnswerList, setUserAnswerList] = useState([]);
   
   async function getQuestions(){
        const baseUrl = `https://opentdb.com/api.php`;
        const service = new QuestionService(baseUrl);
        
        const q = await service.getQuestionsAsync();
        setQuestions(q.results);
    }
    

    // use pagination to show one question at a time?
    return(<main className="container bg-light">
        <button className="btn btn-primary my-5" onClick={getQuestions}>get questions</button>
        
        <ul>
       
        </ul>
        <Questions  setUseranslist = {setUserAnswerList}
                    result = {questions[currentQuestion]}
                     setnextquestion = {setcurrentQuestion}
                     currentquestion = {currentQuestion} />
    </main>)
}