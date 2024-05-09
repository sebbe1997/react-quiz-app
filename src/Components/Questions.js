import { useState } from "react";


export default function Questions(props){
    const questions = props.result|| [];
    const answers =questions.incorrect_answers || [];
    if(answers.length <= 3){

        answers.push(questions.correct_answer)
    }
    function OnClickNext(e)
    {
       
        e.preventDefault();
        const value = e.target.value;
        props.setUseranslist(value);
        props.setnextquestion(props.currentquestion +1);
        
    }
    console.log("in questions component");
    console.log(answers);
    return (<div className="container-fluid text-align-center">
            {/* {questions && questions.map(q => 
            <ul className="container">
                <h3 className="fw-bold">{q.question}</h3> 
                <li className="row card">{q.correct_answer}</li>
                {q.incorrect_answers.map((iq,idx) => <li key={idx} className="row card">{iq}</li>)}
            </ul>)} */}
            <h3>{questions.question}</h3>
            {answers.map((iq,idx) =>
             <li onClick={OnClickNext} style={{cursor: 'pointer'}} id={`question`} key={idx} className="row card">
                {iq}
             </li>)}
            
    </div>)
}