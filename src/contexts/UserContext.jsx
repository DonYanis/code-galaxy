import React, {createContext, useContext, useState} from "react";
import { useNavigate } from "react-router-dom";


const UserContext = createContext()
const FormContext = createContext()

export function useUser() {
  return useContext(UserContext)
}

export function useLoginForm() {
  return useContext(FormContext)
}


export function UserProvider({children}){
  
  const [user, setUser] = useState(null)
  const [loginForm, setLoginForm] = useState({username:''})

  const navigate = useNavigate()

  function handleChange(e){
    
    setLoginForm(prev => {
      return {
        ...prev,
        [e.target.name] : e.target.value,
      }
    })
  }

  function handleLogout(){
    
    setUser(null)
    localStorage.removeItem('galaxyUser')
    navigate('/')
  }

  function handleSubmit() {
        if(loginForm.username.length > 0 ){
          const userData = {username : loginForm.username, data:{HTML:0, CSS:0, JavaScript:0}}

          let users = JSON.parse(localStorage.getItem('galaxyusers')) || []

          const targetUser = users.find(existingUser => existingUser.username === userData.username)
          if (!targetUser) {
            users.push(userData)
            localStorage.setItem('galaxyusers', JSON.stringify(users))
          } else {
            userData.data = targetUser.data
          }
          setUser(userData)
          localStorage.setItem('galaxyUser', JSON.stringify(userData))
          navigate('/galaxy')
        }
        
    }



  return (
      <UserContext.Provider value={{user,handleLogout, setUser}}>
        <FormContext.Provider value={{loginForm, handleChange, handleSubmit}}>
          {children}
        </FormContext.Provider>
      </UserContext.Provider>
  ) 
}