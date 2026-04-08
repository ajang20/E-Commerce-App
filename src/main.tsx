import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import SignUp from './signUp-login/Signup'
import Login from './signUp-login/singIn'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
     <Routes>
    <Route path='/' element={<App />}/>
    <Route path ='signIn' element={<Login/>}/>
    <Route path ='signUp' element={<SignUp/>}/>
   </Routes>
</BrowserRouter>
  </StrictMode>,
)
