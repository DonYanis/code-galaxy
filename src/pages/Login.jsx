import React from 'react'
import { StarsCanvas } from '../components'
import { useLoginForm, useUser } from '../contexts/UserContext'
import { back, css, html, js, vsc } from '../assets'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const {loginForm, handleChange, handleSubmit} = useLoginForm()
    const {user} = useUser()
    if (user != null) loginForm.username = user.username
    const navigate = useNavigate()
    return (
        <div className='w-full'>
            <div className="w-full h-12 p-3 pl-8">
                <img src={back} alt="back" className='w-12 cursor-pointer' onClick={()=>{navigate("/")}}/>
            </div>
            <div className="w-full flex justify-center items-center h-16 mt-9">
                <h1 className='bngshde text-galaxy-yellow text-[30px] sm:text-[40px]'>GALAXY OF CODE</h1>
            </div>
            <div className="flex flex-col sm:flex-row w-full justify-center items-center mt-4 h-full">
                <div className="left flex flex-col items-center justify-around ">
                    <img src={css} alt="back" className='w-20 m-5 transform rotate-45'/>
                    <img src={html} alt="back" className='w-20 m-5 transform -rotate-45'/>
                </div>
                <div className="login-form  w-[300px] rounded border-[1px] border-galaxy-yellow p-3">
                    <input 
                        className='text-[#fff] w-full h-16 outline-none pl-2 bg-transparent
                        rounded border-[1px] border-galaxy-yellow' 
                        type='text' 
                        name='username' 
                        placeholder='Username' 
                        onChange={handleChange}
                        value={loginForm.username}
                        maxLength={20}
                    />
                    <div className='flex justify-center items-center mt-6 w-full h-16  bg-galaxy-yellow hover:bg-white-100 hover:text-galaxy-yellow cursor-pointer select-none' onClick={handleSubmit}>LOGIN</div>

                </div>
                <div className="right flex flex-col items-center justify-around ">
                    <img src={js} alt="back" className='w-20 m-5 transform rotate-[80deg]'/>
                    <img src={vsc} alt="back" className='w-20 m-5 transform rotate-45'/>
                </div>
            </div>
            <StarsCanvas/>
        </div>
    )
    }

export default Login