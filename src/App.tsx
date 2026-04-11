// import React from 'react'
import Header from "./Components/Header/Header";
import Body from "./Body/BodySection";
import useUsers from "./Components/users/userUsers";
import Footer from "./Components/Header/Footer";

export default function App() {
  const { users, error, loading } = useUsers();
  console.log(users);
  console.log(error);
  console.log(loading);

  return (
    <div>
      <Header />
      <Body />
      <Footer/>
    </div>
  );
}
