// import React from 'react'
import Header from './Header/Header'
import Body from './Body/BodySection'
import SignUp from './signUp-login/Signup'
import SignIn from './signUp-login/singIn'

export default function App() {
  return (
    <div>
      <SignIn/>
      <SignUp/>
      {/* <Header/>
      <Body/> */}
    </div>
  )
}
