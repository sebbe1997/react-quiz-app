import { useState } from "react";

//TODO: change color of right answer to green, and also shuffle the answers.
export default function Questions(props){
    const questions = props.result|| {};
    // const answers =questions.incorrect_answers || [];
    // if(answers.length <= 3){

    //     answers.push(questions.correct_answer)
    // }
    
    function OnClickNext(e)
    {
       
        e.preventDefault();
        const value = e.target.innerText;
        props.setUseranslist(value);
        props.setnextquestion(props.currentquestion +1);
        
    }
    return (<div className="container-fluid text-align-center">
            
            <h3 className="card">{questions.question}</h3>
            {/* {answers.results.map((iq,idx) =>
             <li onClick={OnClickNext} style={{cursor: 'pointer'}} id={`question`} key={idx} className="row card">
                {iq}
             </li>)} */}
            
    </div>)
}