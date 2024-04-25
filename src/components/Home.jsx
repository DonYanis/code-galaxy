import  { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { rocket } from '../assets';

const Home = () => {
  const navigate = useNavigate()
  return (
    <div
      className={`xl:mt-12 flex flex-col justify-around  sm:flex-row gap-10 overflow-hidden `}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
      >
        <h1 className='galaxy-text'>Galaxy <br /> Of code</h1>
        <p className='desc-text'>Test Your Mastery in <br /> 
          <span className='text-yellow-300'>JavaScript</span>, 
          <span className='text-red-600'>HTML</span>, and 
          <span className='text-blue-500'>CSS</span>
        </p>
        <div className='flex flex-row h-12 mt-2 ml-3 p-2 rounded border-[1px] border-galaxy-yellow w-[150px] cursor-pointer hover:bg-slate-900' onClick={()=>{navigate('/login')}}>
          <img src={rocket} alt="rocket"  className='w-14'/>
          <div className='w-20  flex items-center justify-center bg-transparent unlock text-xl font-normal text-galaxy-yellow ' >START</div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className=' h-[400px]  cursor-grab'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Home,"Home")