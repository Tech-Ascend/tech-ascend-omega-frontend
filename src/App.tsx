import { useState } from 'react'
import './App.css'
import arrays from '../tech-ascend-project1/src/arrays/index'

function App() {
  const [result, setResult] = useState('')

  const handleArraysClick = () => {
    const arraysResult = arrays()
    setResult(arraysResult)
  }

  return (
    <>
      <button onClick={handleArraysClick}>Call Arrays Function</button>
      {result && <p>Result: {result}</p>}
    </>
  )
}

export default App