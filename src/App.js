import './App.css';
import Dashboard from './Components/Dashboard';
import { LandingPage } from './Components/Landingpage/LandingPage';
import { Navbar } from './Components/Navbar';
import { Login } from "./Components/Register/Login"
import { Register } from './Components/Register/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
  
  <Router>
  <Navbar />
    {/* <Dashboard/> */}
  <div className="container">
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/login" element={<Login/>} />

    </Routes>
  </div>
</Router>

  );
}

export default App;
