import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Home/homeP.jsx';


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}/>
      </Routes>
    </BrowserRouter> 
  )
}

export default App;
