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
      description:' Barbaro ',
    },
  
    {
      id: 2,
      title: 'Last:',
      description: ' Reyes',
    },
  
    {
      id: 3,
      title: ' Age :  ',
      description: ' 45 Years',
    },{
      id:4,
      title: 'Dev Stack   :',
      description: [' ReactJs '," ," , "Express","  ,", 'GraphQl'," ,","MySQL"," ,"," "],
      },
      {
        id:5,
        title: 'Desing Tools  : ',
        description: ['Figma'," ,"],
        },
  

  
    {
    id:6,
    title: ' Email   :',
    description: '  bfreyesgomez@gmail.com ',
    },
    
]