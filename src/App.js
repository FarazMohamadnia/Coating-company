import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Home/homeP.jsx';
import GetQuote from './pages/GetaQuote/getQuote.js';
import Feedback from './pages/feedback/feedback.js';
import Colors from './pages/color/colors.js';
import Login from './pages/ownerLogin/ownerLogin.js';
import Dashboard from './pages/Dashboard/dashboard.js';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/getQuote' element={<GetQuote />}/>
        <Route path='/feedback' element={<Feedback />}/>
        <Route path='/Color' element={<Colors />}/>
        <Route path='/owner/login' element={<Login />}/>
        <Route path='/owner/dashboard' element={<Dashboard />}/>
      </Routes>
    </BrowserRouter> 
  )
}

export default App;
