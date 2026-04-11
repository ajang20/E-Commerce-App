import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import SignUp from './signUp-login/Signup'
import Login from './signUp-login/login.tsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import UsersContextProvider from './Protected&Context/UsersContextProvider.tsx'
import ProtectedRoute from './Protected&Context/ProtectedRoute.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <UsersContextProvider>
     <Routes>
     <Route element={<ProtectedRoute/>}>
    <Route path='/' element={<App />}/>
   </Route>
    <Route path ='login' element={<Login/>}/>
    <Route path ='signUp' element={<SignUp/>}/>
   </Routes>
   </UsersContextProvider>
</BrowserRouter>
  </StrictMode>,
)
