

//TODO: change color of right answer to green, and also shuffle the answers.
export default function Questions({setUseranslist,result,setnextquestion,currentquestion}){
    const questions = result|| [];
    Shuffle(questions);// cant mutate same array, has to create a new one?
    function OnClickNext(e)
    {
       
        e.preventDefault();
        const value = e.target.innerText;
        setUseranslist(value);
        setnextquestion(currentquestion +1);
        
    }
    function Shuffle(questionlist){
        if(questionlist.incorrect_answers){

            for (let i = questionlist.incorrect_answers.length - 1; i >= 0; i--) {
                const randomIndex = Math.floor(Math.random() * (i + 1));
                questionlist.incorrect_answers.push(questionlist.incorrect_answers[randomIndex]);
                questionlist.incorrect_answers.splice(randomIndex, 1);
            }
        }
        console.log(...questionlist);


    }
    
    return (<div className="container-fluid text-align-center">
            
            {questions.map(q => <li className="card p-3">
                <h3 className="card-header">{q && q.question}</h3>
                <div className="card-body text-center">

                    {q.incorrect_answers.map((iq,idx) => <p onClick={OnClickNext} key={idx}>{iq}</p>)}
                    {/* <p>{q.correct_answer}</p> */}
                    
                </div>
                </li>)}
            
    </div>)
}