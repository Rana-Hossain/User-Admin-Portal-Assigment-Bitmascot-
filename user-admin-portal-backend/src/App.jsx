import { useState } from 'react'
import './App.css'
//import Header from './header'
import Login from './login'
import Registration from './registration'
import Profile from './profile'
import Admin from './admin'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} > </Route>
          <Route path='/registration' element={<Registration/>} > </Route>
          <Route path='/profile' element={<Profile/>} > </Route>
          <Route path='/admin' element={<Admin/>} > </Route>
        </Routes>
      
        
      </BrowserRouter>
      
    </>
  )
}
export default App
