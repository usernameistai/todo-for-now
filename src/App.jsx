import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Navbar from './Navbar'
import TodoList from './TodoList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CssBaseline />
      <Navbar/>
      <TodoList />
    </>
  )
}

export default App
