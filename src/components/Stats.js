import React from 'react';
import {stats} from '../../src/data';

const Stats = () => {
  return (
    <div>
      <h1>Education</h1>
      {stats.map((item,i)=>{
        return(<li className='info__Item' >
            <span className='info_title'>{item.title}</span>
            <span className='info_description'>{item.description}</span>
            <span>{item.graduation}</span>
            </li>)
      })}
    </div>
  );
}

export default Stats;
