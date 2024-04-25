import React from 'react'
import { useNavigate } from 'react-router-dom';

const Confirm = ({handleConfirm, confirm, type, handleSubmit}) => {
  const navigate = useNavigate()
  return (
    <div className={`absolute w-full h-full bg-slate-600/5 flex ${confirm ? 'flex' : 'hidden'} justify-center`}>            
        <div className=' bg-gray-600 w-[300px] h-[200px] flex flex-col items-center rounded '>
            <div className='m-5 font-medium'>{type === 'quit' ? 'Quit and lose progress ?' : 'Finish the quiz and submit ?'}</div>
            <div className=' flex flex-row justify-between'>
            
            {type === 'quit' ?
            <>
                <div className='btn m-5 bg-red-quit hover:bg-white-100 hover:text-red-quit' onClick={()=>{handleConfirm(); navigate('/')}}>Yes</div>
                <div className='btn m-5 bg-green-next hover:bg-white-100 hover:text-green-next' onClick={handleConfirm}>No</div>
            </>:<>
                <div className='btn m-5 bg-green-next hover:bg-white-100 hover:text-green-next' onClick={()=>{handleConfirm(); handleSubmit()}}>Yes</div>
                <div className='btn m-5 bg-blue-400 hover:bg-white-100 hover:text-blue-400' onClick={handleConfirm}>No</div>
            </>}

            </div>
        </div>
    </div>   
  )
}

export default Confirm