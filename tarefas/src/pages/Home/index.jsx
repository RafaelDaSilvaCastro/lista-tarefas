import { useState } from "react"
import { Link } from "react-router-dom"

import './Home.css'

function Home(){

  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')  

  function handleLogin(e){
    e.preventDefault();

    if(email !== '' && password !== ''){
      alert('teste')
    }
    else{
      alert('Preencha todos os campos para continuar')
    }

    
  }

  return(
    <>
     <div className="home-container">
      <h1>Lista de tarefas</h1>
      <span>Gerencie seu dia de forma fácil</span>
      <form className="form" onSubmit={handleLogin}>
        <input type="text"
               placeholder="Digite seu email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               />
        <input type="password"
               autoComplete={false}
               placeholder="*********"
               value={password}
               onChange={(e) => setpassword(e.target.value)}
               />   
        <button type="submit">Acessar</button>            
      </form>
      <Link className="button-link" to="/register">
        Não possui uma conta cadastre-se
      </Link>
    </div> 
    </>
  )
}

export default Home;