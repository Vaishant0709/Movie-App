import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import NoPage from './pages/NoPage.jsx'
import SignUp from './pages/SignUp.jsx'
import Layout from './Layout.jsx'
import Login from './pages/Login.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/signUp' element={<SignUp/>}/>,
      <Route path='/login' element={<Login/>} />,
      <Route path="" element={<Home/>}/>,
      <Route path='*' element={<NoPage/>}/>
    </Route>
  )
  
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
