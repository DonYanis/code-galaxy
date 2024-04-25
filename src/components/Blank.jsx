import React from 'react'

const Blank = ({selected, index, handleUserAnswers, userAnswers }) => {

  return (
    <div className={`code-blank  border min-h-6 cursor-pointer rounded-sm 
        pl-2 pr-2 mr-2 ml-2 border-slate-500  min-w-12 hover:border-slate-200 flex justify-center items-center` }
      onClick={()=>{handleUserAnswers(index.exoIndex, index.blankIndex, selected)}}
    >
        {userAnswers[index.exoIndex][index.blankIndex]}
    </div>
  )
}

export default Blank