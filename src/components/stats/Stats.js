import React from 'react';
import {stats} from '../../data';
import './stats.css'

const Stats = () => {
  return (
    <div >
      <h1>Education</h1>
      {stats.map((item,i)=>{
        return(<li key={i} className='info__Item stats_box' >
            <span className='info_title'>{item.title}</span>
            <span className='info_description'>{item.description}</span>
            <span className=' year' >{item.graduation}</span>
            </li>)
      })}
    </div>
  );
}

export default Stats;
