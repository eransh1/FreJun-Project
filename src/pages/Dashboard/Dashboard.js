import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Sorter from '../../components/Navbar/Sorter/Sorter'
import Table from '../../components/Navbar/Table/Table'
import styles from "./Dashboard.module.css"


const Dashboard = () => {
const navigate=useNavigate()
const[gender,setGender]=useState("Gender")
const[isGenderClicked,setIsGenderClicked]=useState(false)
const[userData,setUserData]=useState(null)
const[searchUser,setSerchUser]=useState("")
const[dataTosHow,setDataToShow]=useState(null)

//CHECK IF LOGGED IN
useEffect(()=>{
    const data=localStorage.getItem("isLoggedIn")
    if(!data){navigate("/")}
    if(data==="true"){return}
    },[])

//FETCH USERDATA
useEffect(()=>{
    const fetchUserData=async()=>{
const data=await fetch("https://dummyjson.com/users")
const res=await data.json()
setUserData(res.users)
    }
fetchUserData()
},[])



//SORT USER ON BASIS OF SEARCH AND GENDER
useEffect(()=>{
   
        if(gender==="All"||gender==="Gender"){
            if(searchUser===""){setDataToShow(userData)}
            if(searchUser!==""){
              const temp=userData.filter((user)=>{return user.firstName.toLowerCase().includes(searchUser.toLowerCase())||user.email.toLowerCase().includes(searchUser.toLowerCase())})
              setDataToShow(temp)
            } 
          }
          if(gender==="Male"){
            if(searchUser===""){
                const temp=userData.filter((user)=>{return user.gender.toLowerCase()==="male"})
                setDataToShow(temp)
            }
            if(searchUser!==""){
                const Verytemp=userData.filter((user)=>{return user.gender.toLowerCase()==="male"})
                const temp=Verytemp.filter((user)=>{return user.firstName.toLowerCase().includes(searchUser.toLowerCase())||user.email.toLowerCase().includes(searchUser.toLowerCase())})
                setDataToShow(temp)
              } 
          }
   
          if(gender==="Female"){
            if(searchUser===""){
                const temp=userData.filter((user)=>{return user.gender.toLowerCase()==="female"})
                setDataToShow(temp)
            }
            if(searchUser!==""){
                const Verytemp=userData.filter((user)=>{return user.gender.toLowerCase()==="female"})
                const temp=Verytemp.filter((user)=>{return user.firstName.toLowerCase().includes(searchUser.toLowerCase())||user.email.toLowerCase().includes(searchUser.toLowerCase())})
                setDataToShow(temp)
              } 
          }

},[searchUser,gender,userData])

  return (
  <>
    <Navbar/>
    <section className={styles.outerCont}>
    <div className={styles.innerCont}>
        <Sorter gender={gender} setGender={setGender} isGenderClicked={isGenderClicked} setIsGenderClicked={setIsGenderClicked} searchUser={searchUser}
setSerchUser={setSerchUser}/>
        </div>
    <Table dataTosHow={dataTosHow}/>
    </section>
  </>
  )
}

export default Dashboard