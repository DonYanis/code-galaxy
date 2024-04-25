import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Circle = ({value, color, icon, link}) => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-row justify-between h-[100px] p-3 m-3 cursor-pointer hover:scale-110 transform transition duration-300 ease-in-out' onClick={()=>{navigate(link)}}>
        <img src={icon} alt="" className='w-[60px]' />
        <CircularProgressbar 
            value={value} 
            maxValue={100} 
            text={`${value}%`} 
            className='azeret w-16' 
            styles={ buildStyles({
                    textColor: color, 
                    pathColor: color, 
                    trailColor:'#253343',
                    
                })}/>
    </div>
  )
}

export default Circle