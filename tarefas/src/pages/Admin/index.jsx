import './admin.css'

import { useState, useEffect } from 'react'

import { auth, db } from '../../firebaseConnection'
import { signOut } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'

function Admin() {

  const [tarefaInput, setTarefaInput] = useState('')
  const [user, setUser] = useState('')

  useEffect(() => {
    async function loadTarefas() {
      const userDatail = localStorage.getItem('@detailUser')
      setUser(JSON.parse(userDatail))
    }

    loadTarefas();
  }, [])




  async function handleRegister(e) {
    e.preventDefault();

    if (tarefaInput === '') {
      alert('Digite sua tarefa')
      return;
    }

    await addDoc(collection(db, "tarefas"), {
      tarefa: tarefaInput,
      created: new Date(),
      userUid: user?.uid,
    })
    .then(()=>{
      console.log('Tarefa cadastrada')
      setTarefaInput('')
    })
    .catch((e)=>{
      console.log('erro ao registrar '+e)
    })
  }

  async function handleLogout() {
    await signOut(auth);
  }

  return (
    <>
      <div className="admin-container">
        <h1>Minhas tarefas</h1>
        <form className="form" onSubmit={handleRegister}>
          <textarea placeholder='Digite sua tarefa...'
            value={tarefaInput}
            onChange={(e) => setTarefaInput(e.target.value)} />

          <button className='btn-register' type='submit'>Registrar tarefa</button>
        </form>

        <article className='list'>
          <p>estudar JS</p>
          <div>
            <button>editar</button>
            <button className='btn-delete'>concluir</button>
          </div>
        </article>

        <button onClick={handleLogout} className='btn-logout'>Sair</button>

      </div>
    </>
  )
}

export default Admin;