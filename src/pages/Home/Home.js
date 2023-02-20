import React, { useEffect, useState } from 'react'
import styles from "./Home.module.css"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
const [data,setData]=useState({username:"",pass:""})
const navigate=useNavigate()


//CHECK IF LOGGED IN

useEffect(()=>{
const data=localStorage.getItem("isLoggedIn")
if(!data){return}
if(data==="true"){navigate("/dashboard")}
},[])

const handleInput=(e)=>{
    const{name,value}=e.target
    setData((prev)=>{
        return{...prev,[name]:value}
    })
}

const handleLogin=(e)=>{
e.preventDefault()

if(data.username===""||data.pass===""){toast.error("Kindly fill both fields");return}
if(data.username==="admin@frejun"&&data.pass==="12345678"){localStorage.setItem("isLoggedIn",true);navigate("/dashboard")}
else{toast.error("Wrong Email or Password")}

}

  return (
    <>
        <section className={styles.outerCont}>
        <ToastContainer/>
            <div className={styles.innerCont}>
                <h1 className={styles.title}>Log In</h1>
                <form onSubmit={handleLogin} className={styles.form}>
                <div className={styles.inputCont}>
                    <label className={styles.label} htmlFor="username">Username</label>
                    <input onChange={handleInput} autoFocus className={styles.input} type="text" id='username' name='username' placeholder='Enter your username' autoComplete='off' value={data.username} />
                    </div>
                    <div className={styles.inputCont}>
                    <label className={styles.label} htmlFor="pass">Password</label>
                    <input onChange={handleInput} className={styles.input} type="password" id='pass' name='pass' placeholder='Enter your Password' autoComplete='off' value={data.pass}/>
                    </div>
                    <button className={styles.btn} type='submit'>
                        Login
                    </button>
                </form>
            </div>
        </section>
    </>
  )
}

export default Home