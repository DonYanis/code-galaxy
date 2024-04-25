import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { StarsCanvas, Exercise } from '../components';
import { UserCanvas } from '../components/canvas';
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Results = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const  data  = location.state || {}

    return (
    <div>
        <div className='w-full relative p-3 h-[300px] flex items-center'>
            
                <h1 className='azeret text-galaxy-yellow text-[2rem] sm:text-[4rem] pr-6'>Score</h1>
                <CircularProgressbar value={data.score} maxValue={100} text={`${data.score}%`} 
                    className='azeret w-[150px] sm:w-[200px] absolute left-1/2 top-10 transform -translate-x-1/2' 
                    styles={ buildStyles({
                            textColor: '#D6C954', 
                            pathColor: '#0FFF50', 
                            trailColor:'#253343',
                })}/>
            
            <div className=' pl-8  mb-5 cursor-pointer absolute top-9 right-0 w-36' onClick={()=>{navigate('/profile')}}><UserCanvas/></div>
        </div>
        <div>


        <div className="quiz_cont  flex flex-row  m-5 h-auto">
            <div className="w-full h-auto">
                {
                    data.exercises.map((e, index)=>{
                        return(
                            <div key={index} className='bg-[#31363F]  m-5 pt-2 rounded flex flex-wrap'>
                                <h1 className='pl-3 azeret text-galaxy-yellow'>TASK {index+1}</h1>
                                <Exercise  exercise={e.code} result={true} answers={data.answers} exoIndex={index} tests={data.tests}/>
                            </div>
                        )
                    })
                }

            </div>
        </div>





        </div>
        <StarsCanvas/>
    </div>
    )
}

export default Results