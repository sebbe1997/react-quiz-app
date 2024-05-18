import { useState } from "react";

//TODO: change color of right answer to green, and also shuffle the answers.
export default function Questions({setUseranslist,result,setnextquestion,currentquestion}){
    const questions = result|| [];
    function OnClickNext(e)
    {
       
        e.preventDefault();
        const value = e.target.innerText;
        setUseranslist(value);
        setnextquestion(currentquestion +1);
        
    }
    
    return (<div className="container-fluid text-align-center">
            
          
            {questions.map(q => <li className="card p-3">
                <h3 className="card-header">{q && q.question}</h3>
                <div className="card-body text-center">

                    {q.incorrect_answers.map((iq,idx) => <p key={idx}>{iq}</p>)}
                    <p>{q.correct_answer}</p>
                    
                </div>
                </li>)}
            
    </div>)
}