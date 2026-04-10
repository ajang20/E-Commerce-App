// import React from 'react'
import Header from './Header/Header'
import Body from './Body/BodySection'
import useUsers from './users/userUsers'

export default function App() {
  const {users,error,loading} = useUsers()
  console.log(users)
  console.log(error)
  console.log(loading)
  
  return (
    <div>
      <Header/>
      <Body/>
    </div>
  )
}
