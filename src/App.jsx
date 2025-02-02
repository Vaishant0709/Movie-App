import React from 'react'
import "./app.css"
import { Outlet } from 'react-router-dom'
export default function App() {
  return (
  <>
  <div>
    <h1>Hello world</h1>
    <Outlet/>
  </div>
  </>
  )
}
