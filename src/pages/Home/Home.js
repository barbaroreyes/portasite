import React from 'react';
import {FaArrowRight } from 'react-icons/fa';
import {Link } from 'react-router-dom'

import './Home.css'


const Home = () => {
  return (
    <section className="home section grid">
    <img src="https://avatars.githubusercontent.com/u/48423441?v=4"  className='home_image' alt=''/>
    <div className="home_content">
    <div className="home_data">
      <h1 className="home_title">
        <span>Barbaro Reyes</span> 
        
      </h1>
      <h1>Developer &  UX/UI  Designer</h1>
      <p className="home_description">I invite you to embark on this journey with me, where innovation and creativity converge to redefine digital experiences. 
        Join me as I continue to push boundaries, experiment with new technologies, and evolve as a web developer and UX/UI designer. 
        Thank you for visiting 
        – let's create impactful digital journeys together!"</p>
        <Link to='/about' className='button'>
          More About me <span className='button_icon'><FaArrowRight/></span>
        </Link>
    </div>
    </div>
    <div className='color-block'>
      
    </div>
    </section>
  );
}

export default Home;
