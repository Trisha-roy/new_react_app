import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './Singer'

function App() {
  const actors=['jasim','raj','sakib','jeet','sharukh','hrittik']
  const singers=[
    {name:'Pritom Hasan',age:28},
    {name:'Trisha Roy',age:24}
  ]

  return (
    <>
      
      <h1>Vite + React</h1>
      <Person></Person>
      {
        singers.map(singer=><Singer singer={singer}></Singer>)
      }
      <Actor name={"Dev Adhikari"}></Actor>
      {
        actors.map(actor=><Actor name={actor}></Actor>)
      }
      <Todo task="Learn React"></Todo>
     
      <Todo task="Learn React"></Todo>
      
    </>
  )
}

function Person(){
  const age=25
  return <h3>Hi I am Trisha!! My age is: {age}</h3>
  
}

export default App
