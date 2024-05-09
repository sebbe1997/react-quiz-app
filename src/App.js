
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <AppRouter/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
