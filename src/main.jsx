/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/HomePage/Home.jsx';
import Blog from './pages/BlogPage/Blog.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import Login from './pages/Login/Login.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import AuthProvider from './components/Provider/AuthProvider.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import ChefDetails from './components/ChefDetails/ChefDetails.jsx';
import Recipe from './pages/Recipe/Recipe.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/blog",
        element:<PrivateRoute><Blog></Blog></PrivateRoute>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      },
      
    ]
  },
  {
    path:"/chef",
    element:<ChefDetails></ChefDetails>,
   
  },
  {
    path:"/recipe/:id",
    element:<PrivateRoute><Recipe></Recipe></PrivateRoute>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
