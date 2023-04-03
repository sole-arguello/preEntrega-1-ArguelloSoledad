//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

import NavBar from './components/NavBar/NavBar'
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer'

function App() {
  //const [count, setCount] = useState(0)

  return (

    <div className='APP'>
      <NavBar />
      <ItemsListContainer  geeting='Bienvenidos'/>
    </div>
    
  )
}

export default App
