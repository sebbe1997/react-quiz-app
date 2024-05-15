import { Link } from "react-router-dom";

export default function About(){

    return (<main className="container m-auto p-5">
    <section className="row bg-light"> 
        <h2 className="fw-bold text-center" >About Page!</h2>
         {/*have a component in each col div for settings, and maybe news/information */}
     <div className="bg-light text-center">
        <section>
            <p>
                This is a trivia app made with react and react Bootstrap.
                it is made using the <Link className="text-decoration-none" to={"https://opentdb.com/"}>Open Trivia Db </Link>
                API for all the questions. 
            </p>
            <p className="">
                <em>i made this App because i want to learn more about react</em>, try to create a complete app 
                as i can and make a fun trivia/quiz app i can show family and friends.
                it is made by Sebastian Larsson.
            </p>
            <div className="">
                <h3 className="fw-bold">links</h3>
            <Link className="text-decoration-none" to={"https://github.com/sebbe1997"}>My github(use icons here instead)</Link>
            </div>
        </section>
        
     </div>

  
     </section>
</main>)
}