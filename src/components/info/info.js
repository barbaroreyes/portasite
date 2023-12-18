import React from 'react';
import { personalinfo} from  '../../data'
import './info.css'

const info = () => {
  return (
    <div >
      
     {personalinfo.map((item,i)=>{
      return(<li key={i} className='info__Item'>
       <span className='info_title'>{item.title}</span> 
        <span className='info_description' >{item.description}</span>
        <span>{item.graduation}</span>
        </li>)
     })}
    </div>
  );
}

export default info;
