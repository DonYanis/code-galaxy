import { useEffect } from "react";
import { Route, Routes  } from "react-router-dom"
import {Main,  List, HTMLQuiz, CSSQuiz, JSQuiz , Login, Profile, Results} from './pages'
import { useUser } from './contexts/UserContext';

const App = () => {

  const {setUser} = useUser()

  useEffect(() => {
    const storedUser = localStorage.getItem('galaxyUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, []);

  return (
        <Routes>
          <Route path='/'>
            <Route index element={<Main/>}/>
            <Route path='galaxy' element={<List/>}/>
            <Route path='quiz-html' element={<HTMLQuiz/>}/>
            <Route path='quiz-css' element={<CSSQuiz/>}/>
            <Route path='quiz-js' element={<JSQuiz/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='profile' element={<Profile/>}/>
            <Route path='results' element={<Results/>}/>
          </Route>
        </Routes>
  )
}


export default App
