import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>
      
      <h1>Vite + React</h1>
      <Person></Person>
     
      
    </>
  )
}

function Person(){
  const age=25
  return <h3>Hi I am Trisha!! My age is: {age}</h3>
  
}

export default App
