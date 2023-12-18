import {FaHome,FaUser,FaFolderOpen,FaEnvelopeOpen } from 'react-icons/fa'

  export const links = [
    {
        id: 1,
        name: 'Home',
        icon: <FaHome className='nav__icon' />,
        path: '/',
      },
    
      {
        id: 2,
        name: 'About',
        icon: <FaUser className='nav__icon' />,
        path: '/about',
      },
    
      {
        id: 3,
        name: 'Portfolio',
        icon: <FaFolderOpen className='nav__icon' />,
        path: '/portfolio',
      },
    
      {
        id: 4,
        name: 'Contact',
        icon: <FaEnvelopeOpen className='nav__icon' />,
        path: '/contact',
      },
]


export const personalinfo = [
  {
      id: 1,
      title: 'Name :',
      description:' Barbaro Reyes ',
    },
  {
      id:4,
      title: 'Dev Stack   :',
      description: [' ReactJs '," ," , "Express","  ,", 
      'GraphQl'," ,",
      "MySQL"," ,",
      " GitHub",", ",
      "AWS"],
      },
      {
        id:5,
        title: 'Design Tools  : ',
        description: ['Figma'," ,"," Canva ",","," Sktech "],
        },

    
]

export const stats = [
  {
      id: 1,
      title: 'Software Engineering  :',
      description:'  General Assembly ', 
      graduation: " Jun 2021 "
    },
  
    {
      id: 2,
      title: 'UI/UX Design :',
      description:'  WorkForce Institute ', 
      graduation: " Nov 2023 " ,
    
    },
      {
        id:5,
        title: 'BSCS :',
        description:' Colorado Tecnical University ', 
        graduation: " Nov 2024 " ,
        },
  
    
]