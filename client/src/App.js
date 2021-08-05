import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Accueil from './components/AccueilAdmin/Accueil';
import { useEffect, useState } from 'react';
function App() {

  const [username, setusername] = useState(localStorage.getItem("username"))
  const [lastname, setlastname] = useState(localStorage.getItem("lastname"))
  const [email, setEmail] = useState(localStorage.getItem("email"))
  const [countery, setCountery] = useState(localStorage.getItem("countery"))
  const [phone, setPhone] = useState(localStorage.getItem("phone"))
  const [date_birth, setdate_birth] = useState(localStorage.getItem("date_birth"))
  const [id, setid] = useState(localStorage.getItem("_id"))
  const [user, setuser] = useState({
    id,
    username,
    lastname,
    email,
    countery,
    phone,
    date_birth
  })



  useEffect(() => {

    setusername(localStorage.getItem("username"))
    setlastname(localStorage.getItem("lastname"))
    setEmail(localStorage.getItem("email"))
    setCountery(localStorage.getItem("countery"))
    setPhone(localStorage.getItem("phone"))
    setdate_birth(localStorage.getItem("date_birth"))
    setid(localStorage.getItem("_id"))
    setuser({
      id,
      username,
      lastname,
      email,
      countery,
      phone,
      date_birth
    })
    return () => {

    }
  }, [])
  console.log(user)
  return (
    <div >
      
      <Accueil user={user} />

    </div >


  )
}

export default App;
