import React from 'react'
import { Home } from '../components'
import { StarsCanvas } from '../components/canvas'

const Main = () => {
  return (
    <div className="relative z-0 bg-primary m-0 h-full">
        <Home/>
        <StarsCanvas />
    </div>
  )
}

export default Main