import React from 'react'
import Blank from './Blank'

const Exercise = ({exercise, selected, handleUserAnswers,exoIndex,userAnswers, result, answers, tests}) => {
    
    let lines = exercise.map(prop => prop.replace(/tbspc/g, "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"))
    let i = 0
    let blank = 0
    if(result) {
        return(
            <div className='bg-[#31363F]  m-5 rounded code h-auto p-4'>
                {lines.map((e, index)=> {
                    {if (e.includes("blank")) {
                        
                        return (
                        <div key={index} className={`flex flex-row flex-wrap text-md pb-2 ${e == '}' ? 'mb-4' : '' }`}>
                            {
                                e.split(/\b(blank)\b/).map((p, index)  => {
                                    return(
                                    <div key={index} className='mt-2'>
                                        {p === 'blank' ? 
                                            <div className={`code-blank ${tests[exoIndex][blank]===1 ? 'code-blank bg-green-500 ' : 'code-red bg-red-500'}  bg-opacity-40 border h-6 rounded-sm pl-2 pr-2 mr-2 ml-2 border-slate-500  min-w-12 flex justify-center items-center` }>
                                                {answers[exoIndex][blank++] || ''}
                                            </div>
                                            :
                                            <span key={Math.random()}   className='ml-2 mr-2'>{p}</span>
                                        }
                                    </div>)
                                })
                            }
                        </div>)
                    }else {
                        return (<div key={index}  className={`text-md pb-2 ${e == '}' ? 'mb-4' : '' }`}>{e}</div>)
                    }}
                })}
            </div>
        )
    }

    return (
    <div className='bg-[#31363F] min-h-[300px] m-5 rounded code h-auto p-4'>
        {lines.map((e, index)=> {
            {if (e.includes("blank")) {
                return (<div key={index} className={`flex flex-row flex-wrap text-md pb-2 ${e == '}' ? 'mb-4' : '' }`}>
                    {
                        e.split(/\b(blank)\b/).map((p, index)  => {
                            return(
                            <div key={index} className='mt-2'>
                                {p === 'blank' ? 
                                     <Blank key={Math.random()*index} index={{exoIndex: exoIndex, blankIndex: i++}} handleUserAnswers={handleUserAnswers} selected={selected} userAnswers={userAnswers}/>
                                :
                                     <span key={Math.random()}   className='ml-2 mr-2'>{p}</span>
                                }
                            </div>)
                        })
                    }
                </div>)
            }else {
                return (<div key={index}  className={`text-md pb-2 ${e == '}' ? 'mb-4' : '' }`}>{e}</div>)
            }}
        })}
    </div>
    )
    

}

export default Exercise