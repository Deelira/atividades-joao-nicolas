import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import HelloWorld from './components/FirstComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
  
    <section>
      <div>
        <HelloWorld />
      </div>
    </section>
  
  )
}

export default App
