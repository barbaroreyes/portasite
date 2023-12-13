import {Routes,Route}from 'react-router-dom'
import './App.css';
import Home from './pages/Home/Home';
import Portafolio from './pages/Portafolio/Portafolio';
import About from './pages/About/About';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/portafolio' element={<Portafolio/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/' element={<Contact/>}/>
    </Routes>
      
    </>
  );
}

export default App;
