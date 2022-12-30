import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import AddEdit from './pages/AddEdit';
import Index from './Components/Index'
 
import Footer from './Components/Footer';
import About from './pages/About';
import Medicine from './pages/Medicine';
import Home from './pages/Home';
import Registration from './pages/Registration';
import LoginPage from './pages/LoginPage';

import SearchDataForm from './pages/SearchDataForm'

function App() {
  return (
    
   <Router>
    <Index/>
  
   
    <Routes>
    <Route   path='/' element={<Home/>} />
    <Route   path='/home' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route   path='/medicine' element={<Medicine/>} />
    <Route   path='/addcontact' element={<AddEdit/>} />
    <Route path='/about' element={<About/>} />
    
 
    
		<Route path='/Registration' element={<Registration/>} />
		<Route path='/LoginPage' element={<LoginPage/>} />
    
    <Route path='/SearchDataForm' element={<SearchDataForm/>}/>
    </Routes>
    <Footer/>
    </Router>
   );
}

export default App;
