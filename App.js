import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Login from "./components/Login";
import Register from "./components/Register";
import Homepage from './components/Homepage';
import {BrowserRouter as Router ,Routes,Route}from "react-router-dom";
import {useState} from "react";
import Forget from './components/forget';
import Navbar from './components/layout/navbar';
import Students from './components/students/students';
import AddDetails from './components/addDetails/AddDetails';
import TeacherData from './components/students/teacherData';
import Search from './components/Search/Search';
import Develop from './components/layout/Develop';
import About from './about/about';
import Contacts from './contact/contacts';

function App() {
  const [user,setLoginUser]=useState({});


  return (
    
    <Router>
      <Navbar/>
    <div className="App">
      <Routes>
        <Route path="/" element={<Students/>}></Route>
        <Route path="/Homepage/:id" element={user && user._id ? <Homepage />: <Login setLoginUser={setLoginUser}/>}></Route>
        <Route path="/teacherdata/:id" element={<TeacherData id={user._id}/>}></Route>
        <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/forget" element={<Forget />}></Route>
        <Route path="/contact" element={<Contacts />}></Route>
        <Route path="/search" element={<Search/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path='/students' element={<Students id={user._id}/>}> </Route>
        <Route path='/addDetails' element={<AddDetails id={user._id}/>}></Route>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
