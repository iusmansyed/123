import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login/Login'
import Dashboard from './Pages/Dashboard/Dashboard'
import Protected from './Components/Protected/Protected'
import ResetPassword from './Pages/ResetPassword/ResetPassword'
import Signup from './Pages/SignUp/Signup'

function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/reset' element={<ResetPassword />} />
        <Route path='/Sign-up' element={<Signup />} />
        <Route path='/Dashboard' element={<Protected Component={Dashboard} />} />
      </Routes>
    </>
  )
}

export default App
