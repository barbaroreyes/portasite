import React from 'react';
import Info from '../../components/info/info';
import Stats from '../../components/Stats';
import CV from './BarbaroReyesResume.pdf'
import {FaDownload } from 'react-icons/fa'
import './About.css';

const About = () => {
  return (
    <main className="section container">
     <section className="about">
      <h2 className="section_title">
        About <span>Me</span>
      </h2>
      <div className="about-info">
        <h3 className="section_subtitle">
          Personal Infos
        </h3>
        <ul className="info_list grid">
        <Info/>
        <Stats/>
        </ul>
        <a href={CV} 
        download=''
        className="button">
          Dowload CV
        <span className="button_icon">
          <FaDownload/>
          </span>
          </a>
      </div>
       <div className="stats grid">
       
       </div>
     </section>
    </main>
  );
}

export default About;
