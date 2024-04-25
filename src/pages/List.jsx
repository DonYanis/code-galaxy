import React, { useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import './List.css'; // Import your CSS file for styling
import { StarsCanvas, PLanet2Canvas, PlanetA, PlanetB, PlanetC, BallCanvas } from '../components/canvas';

import js from '../assets/logos/js.svg'
import css from '../assets/logos/css.svg'
import html from '../assets/logos/html.svg'
// Main App component
const List = () => {
  const [loading, setLoading] = useState(true)

  setTimeout(()=>{
    setLoading(false)
  }, 5000)

  return (
    <div className="app overflow-hidden">
      {
        loading ?
         <div className='bg-[#1A1B1F] w-full h-full absolute z-50 flex justify-center items-center'>
          <InfinitySpin color="grey"/>
         </div>
        
        : <></>
      }
      <div className="galaxy relative h-full w-full">
        
        <div className="central-planet w-[600px] h-[600px]">
          <PLanet2Canvas/>
        </div>

        <div className="orbit-cont w-[800px] h-[800px]">
        <div className="orbit relative w-full h-full m-0 p-0">
        <div className={`planet${1} `} style={{  width: '200px', height: '200px'}}>
          <PlanetA />
            <BallCanvas icon={js} />
        
        </div>
        <div className={`planet${2} flex flex-wrap`} style={{  width: '200px', height: '200px'}}>
          <PlanetB/>
          <BallCanvas icon={css} />
        </div>
        <div className={`planet${3}`} style={{  width: '200px', height: '200px'}}>
          <PlanetC/>
          <BallCanvas icon={html} />
        </div>
        </div>
        </div>
        
      </div>
      

      <StarsCanvas/>
    </div>
  );
};


export default List;
