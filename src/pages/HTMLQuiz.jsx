import React from 'react'
import { Quiz } from '../components'
import { htmlData } from '../data'

const HTMLQuiz = () => {
  return (
    <Quiz name={'HTML'} data={htmlData}/>
  )
}

export default HTMLQuiz