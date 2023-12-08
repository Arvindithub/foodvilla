import { Route, Routes } from "react-router-dom";
import { About } from './About';

import { Contact, Feedback, Haveit, Needhelp, Takeaway } from './Contact';
import { Login, Privacy, Signup, Term } from './Login';
import { Navbar } from './Navbar';
import { Home } from "./Home";
import { Body } from "./Body";
//import { Contact } from "./Contact";


function App() {
  return (
    <div>
      <Navbar/>
  <Routes>
    <Route path="/Term" element={<Term/>}/>
    <Route path="/Privacy" element={<Privacy/>}/>
    <Route path="/Signup"  element={<Signup/>}/>
    <Route path="/Feedback" element={<Feedback/>}/>
    <Route  path="/Needhelp" element={<Needhelp/>}/>
    <Route path="/" element ={<Home/>}/>
    <Route path="/Haveit" element={<Haveit/>}></Route>
    <Route path="/Takeaway" element={<Takeaway/>}></Route>
        <Route path="/contact" element ={<Contact/>}/>
        <Route path="/about" element ={<About/>}/>
        <Route path="/Login" element ={<Login/>}/>
        {/* <Route path="Body"  element={<Body/>}/> */}

  </Routes>
  </div>
  );
}

export default App;
