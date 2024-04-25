import React,  { useState } from 'react'
import { QuizHeader, StarsCanvas, Task, Confirm, Exercise } from '.'
import { useUser } from '../contexts/UserContext'
import { useNavigate } from 'react-router-dom'

const Quiz = ({name, data}) => {

    const {user, setUser} = useUser()
    const [confirm, setConfirm] = useState(false)
    const [confirmType, setConfirmType] = useState('')
    const navigate = useNavigate()

    const toggleConfirm = () => {
        setConfirm(!confirm);
    }

    const [selected, setSelected] = useState('')
    const [progress, setProgress] = useState(0)

    const handleProgress = () => {
        setProgress(Math.ceil(quizData.currrent*100/20))
    }

    const [quizData, setQuizData] = useState({
        currrent : 1,
        data : data
        }
    )

    const [userAnswers, setUserAnswers] = useState(Array.from({ length: 20 }, () => []))
    const handleUserAnswers = (index, blank, answer) => {
        setUserAnswers(prevState => {
            const newState = [...prevState]
            newState[index] = [...prevState[index]]
            newState[index][blank] = answer
            return newState
        })
    }
    const handleQuestion = (n)=>{
        setQuizData(prev => {
            return {
                ...prev,
                currrent : n
            }
        })
    }

    const handleSubmit = () => {
        let tests = Array.from({ length: 20 }, () => [])
        quizData.data.map((e, i)=>{
            e.answers.map((e, j)=>{
                tests[i][j] = e===userAnswers[i][j] ? 1 : 0
            })
        })
        //
        const tests_array = tests.flat()
        const percentage = ((tests_array.reduce((acc, curr) => acc + curr, 0) / tests_array.length)*100).toFixed(2)
        
        setUser((prev)=>{
            let data = prev.data
            data[name] = percentage
            return {
                ...prev,
                data: data
            }
        })
        localStorage.setItem('galaxyUser', JSON.stringify(user))
        let users = JSON.parse(localStorage.getItem('galaxyusers')) || []
        const userIndex = users.findIndex(u => u.username === user.username)

        if (userIndex !== -1) {
        users[userIndex].data = user.data
        localStorage.setItem('galaxyusers', JSON.stringify(users))
        }
        navigate('/results', {state : {answers : userAnswers, tests, score : percentage, exercises:quizData.data}})
        
    }
  return (
    <div className='flex flex-col justify-center items-center h-auto'>
        
        <QuizHeader name = {name}/>
        
        <div className="quiz_cont bg-blue-600 flex flex-col sm:flex-row m-5 h-auto">
            <div className="ques_cont h-auto">
                <div className="question azeret flex flex-row justify-between bg-light-dark m-5 p-5 rounded">
                    <div className='mt-5 ml-2'>
                        <div className='mb-3'>Question {quizData.currrent} / 20</div>
                        <div className='flex flex-row relative h-[3px] bg-slate-500 w-[200px]'>
                            <div className={`line1 h-[3px]  bg-green-next`} style={{ width: `${progress}%` }}></div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div className='btn mt-5 mr-2 bg-blue-400 hover:bg-white-100 hover:text-blue-400 select-none' onClick={()=>{if(quizData.currrent>1) handleQuestion(quizData.currrent-1); handleProgress()}}>BACK</div>
                        {quizData.currrent===20 ? 
                            <div className='btn mt-5 mr-2 bg-green-next hover:bg-white-100 hover:text-green-next select-none' onClick={()=>{setConfirmType('submit');toggleConfirm()}}>SUBMIT</div>
                        :
                            <div className='btn mt-5 mr-2 bg-green-next hover:bg-white-100 hover:text-green-next select-none' onClick={()=>{handleQuestion(quizData.currrent+1); handleProgress()}}>NEXT</div>
                        }
                        <div className='btn mt-5  bg-red-quit hover:bg-white-100 hover:text-red-quit select-none' onClick={()=>{setConfirmType('quit');toggleConfirm()}}>QUIT</div>
                    </div>
                </div>

                <Exercise result={false} exercise={quizData.data[quizData.currrent-1].code} selected={selected} handleUserAnswers={handleUserAnswers} exoIndex={quizData.currrent-1} userAnswers={userAnswers}/>
                
            </div>
            <div className="task_cont h-auto">
                <Task text={quizData.data[quizData.currrent-1].task}/>

                <div className='bg-light-dark min-h-[140px] h-auto m-5 pt-2 rounded flex flex-wrap p-2'>
                    {quizData.data[quizData.currrent-1].choices.map((c, index) => (
                        <div key={index} className={`azeret text-sm border flex items-center h-[50px]  cursor-pointer rounded-sm 
                            pl-2 pr-2 mr-2 ml-2 mt-1 border-pink-400 ${selected==c ? 'selected' : 'not-selected'}` }
                            onClick={()=>{setSelected(c)}}>{c}</div>
                    ))}
                </div>
            </div>
        </div>
        <StarsCanvas/>

        <Confirm handleConfirm={toggleConfirm} confirm={confirm} type={confirmType} handleSubmit={handleSubmit}/>

    </div>
  )
}

export default Quiz