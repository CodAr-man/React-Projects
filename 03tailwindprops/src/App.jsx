import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "arman",
    age: 27
  }

  return (
    <>
      <h1 className='bg-green-400 text-black mb-4'>Tailwind Css</h1>
      <Card username = "chaiaurcode" btnText = "clickme"/>
      <Card username= "Arman"/>

    </>
  )
}

export default App
