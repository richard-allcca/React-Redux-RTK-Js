import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { TasksList } from './components/TasksList'
import { TaskForm } from './components/TaskForm'

function App() {
   const [ count, setCount ] = useState(0)

   return (
      <>
         <TaskForm />
         <TasksList />
      </>
   )
}

export default App
