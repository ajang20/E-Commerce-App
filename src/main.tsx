import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import SignUp from "./Components/signUp-login/Signup.tsx";
import Login from "./Components/signUp-login/login.tsx";
import {   Route } from "react-router-dom";
import UsersContextProvider from "./Components/Protected&Context/UsersContextProvider.tsx";
import ProtectedRoute from "./Components/Protected&Context/ProtectedRoute.tsx";
import { createBrowserRouter,createRoutesFromElements,RouterProvider } from "react-router-dom";
import { ProductsLoader} from "./Components/users/ProductsLoader";
import Products from "./Products/Products.tsx";
import ProductDetails from "./Products/ProductDetails.tsx";
import Categories from "./Products/categories.tsx";
import Layout from "./Layout.tsx";


const router = createBrowserRouter(createRoutesFromElements(
        <>
          <Route element={<ProtectedRoute />}>
             <Route element={<Layout/>}>
            <Route path="/" element={<App />} loader={ProductsLoader} errorElement={<h1>Error Detected</h1>}/>

            <Route path='Categories' element={<Categories/>} loader={ProductsLoader}/>
            <Route path='categories/:category' element={<Products/>}/>
            <Route path='categories/:category/:id' element={<ProductDetails/>}/>
  
    

            </Route>
          </Route>


          <Route path="login" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
        </>
      ))

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UsersContextProvider>
    <RouterProvider router={router}/>
    </UsersContextProvider>
      
  </StrictMode>,
);
