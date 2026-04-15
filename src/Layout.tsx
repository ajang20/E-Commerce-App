
import { Outlet } from "react-router-dom"
import Header from "./Components/Header/Header";
import Footer from "./Components/Header/Footer";
import ContextProvider from "./Components/Header/ContextProvider";

function Layout() {
  
  return (
      <ContextProvider>
        <div >
      <Header/>
      <Outlet/>
       <Footer />
       </div>
       </ContextProvider>
  )
}

export default Layout