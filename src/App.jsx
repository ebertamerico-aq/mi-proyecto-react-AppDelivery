import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='titulo'>
      <h1>Mi aplicacion movil v0.1.2</h1>
    </div>
    
    <div className='logo'>
      <img src="Motorizado.svg"></img>
    </div>
    <section className='title'>
      <h1 className='title-h1'>Chaskas</h1>
      <span className='subtitle'>Delevery App</span>
    </section>

    <section className='Impute- fore'>
      <input type="text" name= "user" id="user" placeholder='user' />
      <input type="password" name='password' id='user' placeholder='password'/>
    </section>

    <section className='btn-login'>
      <span>¿olvidaste tu contraseña?</span>
      <button>login</button>
      <span>o</span>
      <button>Create una cuenta</button>

    </section>

    </>
  )
}

export default App
