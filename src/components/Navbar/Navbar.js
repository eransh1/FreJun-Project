import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./Navbar.module.css"

const Navbar = () => {
    const navigate=useNavigate()

const handleLogout=()=>{
    localStorage.removeItem("isLoggedIn")
    navigate("/")
}

  return (
    <>
        <section className={styles.navbar}>
          <h1 onClick={()=>navigate('/')} className={styles.logo}>FreJun Task</h1> 
          <button onClick={handleLogout} className={styles.btn}>Logout</button> 
        </section>
    </>
  )
}

export default Navbar