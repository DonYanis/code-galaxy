import React from 'react'
import { Quiz } from '../components'
import { jsData } from '../data'

const JSQuiz = () => {
  return (
      <Quiz name={'JavaScript'} data={jsData}/>
  )
}

export default JSQuiz