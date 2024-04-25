import React from 'react'

const Task = ({text}) => {
  return (
    <div className='bg-light-dark h-[250px] m-5 pt-2'>
        <div className='bngotln text-4xl ml-5'>TASK</div>
        <div className='p-5 azeret'>{text}</div>
    </div>
  )
}

export default Task