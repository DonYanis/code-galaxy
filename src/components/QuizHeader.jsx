import React from 'react'

import css from '../assets/logos/css.svg'
import html from '../assets/logos/html.svg'
import js from '../assets/logos/js.svg'

const QuizHeader = ({name}) => {
    if(name === 'CSS') {
        var src = css
        var color = 'text-blue-600'
    }else if(name === 'HTML'){
        var src = html
        var color = 'text-orange-600'
    }else{
        var src = js
        var color = 'text-yellow-600'
    }

    return (
    <div className='header h-40 flex items-end pl-8 pt-8 mb-5 w-full'>
        <div className=' flex items-end pl-8 pt-8 mb-5 w-full'>
            <img src={src} className='w-[75px]'/>
            <div className={`bngshde ${color} pl-3 text-7xl`}>{name}</div>
        </div>
        
    </div>
    )
}

export default QuizHeader