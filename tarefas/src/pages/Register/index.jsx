import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { auth } from '../../firebaseConnection'
import { createUserWithEmailAndPassword } from 'firebase/auth'

function Register() {
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')

  const navigate = useNavigate()

  async function handleRegister(e) {
    e.preventDefault();

    if (email !== '' && password !== '') {
      await createUserWithEmailAndPassword(auth, email, password)
      .then(()=>{
        navigate('/admin', {replace:true})
      })
      .catch((e)=>{
        console.log(`erro ao realizar cadastro   ${e}`)
      })
    }
    else {
      alert('Preencha todos os campos para continuar')
    }


  }

  return (
    <>
      <div className="home-container">
        <h1>Cadastre-se</h1>
        <span>Vamos criar sua conta</span>
        <form className="form" onSubmit={handleRegister}>
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
          <button type="submit">Cadastrar</button>
        </form>
        <Link className="button-link" to="/">
          Já possui uma conta? faça login
        </Link>
      </div>
    </>
  )
}

export default Register;