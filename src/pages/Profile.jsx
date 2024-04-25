import React from 'react'
import {useNavigate} from 'react-router-dom'
import {logo, html, css, js, logout } from '../assets'
import { useUser } from '../contexts/UserContext'
import { StarsCanvas, Circle } from '../components'

const Profile = () => {
    const { user, handleLogout } = useUser()
    const value = 49
    const navigate = useNavigate()
    return (
        <div>
            { user != null ? 
            <div>
                <div className="flex items-center justify-between h-16 p-3 mt-3">
                    <div className='flex items-center justify-between'>
                        <img src={logo} alt="logo" className='w-16 ml-1 mr-2 cursor-pointer' onClick={()=>navigate('/')} />
                        <div className='azeret'>{user.username}</div>
                    </div>
                    <div onClick={handleLogout}>
                        <div className='flex flex-row items-center h-12 mt-2 ml-3 p-2  w-[150px] cursor-pointer' onClick={handleLogout}>
                            <img src={logout} alt="rocket"  className='w-10 pr-2'/>
                            <div className=' azeret  text-galaxy-yellow ' >Logout</div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center">
                    <div className="w-[600px] p-4 justify-between flex flex-col ">
                        <Circle value={user.data.HTML} color={'#e34f26'} icon={html} link={'/quiz-html'}/>
                        <hr />
                        <Circle value={user.data.CSS} color={'#264DE4'} icon={css} link={'/quiz-css'}/>
                        <hr />
                        <Circle value={user.data.JavaScript} color={'#e9ca32'} icon={js} link={'/quiz-js'}/>
                    </div>
                </div>
            </div>
            : <></>
            }
        <StarsCanvas/>
        </div>
    )
}

export default Profile