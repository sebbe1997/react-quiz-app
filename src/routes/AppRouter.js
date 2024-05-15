import { Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import Quispage from "../pages/QuizPage";
import About from "../pages/AboutPage";

export default function AppRouter(){
    return(<Routes>
        <Route  path= "/" element={<Home/>}/>
        <Route path="/quizpage" element = {<Quispage/>}/>
        <Route path="/quizpage/:amount" element = {<Quispage/>}/>

        <Route path="/quizpage/:amount/:category" element = {<Quispage/>}/>
    
        <Route path="/aboutpage" element = {<About/>}/>
        </Routes>
    
    )
}