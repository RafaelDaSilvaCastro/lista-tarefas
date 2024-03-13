import {useState, useEffect} from 'react'
import { Navigate } from 'react-router-dom'
import { auth } from '../firebaseConnection'

import { onAuthStateChanged } from 'firebase/auth'



function Private(children){
  const [loading, setLoading] = useState(true);
  const [signed, setSigned] = useState(false)
  useEffect(()=>{
    async function checkLogin(){
      const unsub = onAuthStateChanged(auth,(user) =>{
        if(user){
          //Usuário logado
          const userData = {
            uid: user.uid,
            email: user.email,

          }

          localStorage.setItem('@datailUser', JSON.stringify(userData))

          setLoading(false)
          setSigned(true)
        }
        else{
          setLoading(false)
          setSigned(false)
        }
      })
    }

    checkLogin();
  }, [])

  if(loading){
    return(
      <div></div>
    )
  }

  if(!signed){
    return(
      <Navigate to="/"/>
    )
  }

  return children
}

export default Private;