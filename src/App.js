import {Routes,Route}from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Portafolio from './pages/Portafolio';
import About from './pages/About';
import Contact from './pages/Contact';

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
