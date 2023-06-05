import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './index.css'
import Dashboard from './pages/Dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="portal-wrapper relative md:py-20">
      <Dashboard />
    </main>
  )
}

export default App
