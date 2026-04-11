import { Navigate,Outlet } from "react-router-dom";
import { useAuth } from "./UsersContextProvider";

export default function ProtectedRoute(){
    const auth = useAuth()

    if(!auth?.currentUser){
        <Navigate to='/login' replace/>
    }

    return (
    <Outlet/>
)}

