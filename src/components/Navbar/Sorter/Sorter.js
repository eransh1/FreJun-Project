import React from 'react'
import styles from "./Sorter.module.css"
import icon from "../../../images/Icon.png"
import {RiArrowDownSLine} from "react-icons/ri"

const Sorter = ({gender,setGender,isGenderClicked,setIsGenderClicked,searchUser,setSerchUser}) => {
  return (
    <div className={styles.sorterCont}>
        <div className={styles.searchCont}>
        <img className={styles.labelIcon} src={icon} alt="icon" />
        <input onChange={(e)=>setSerchUser(e.target.value)} id='search' className={styles.inputSearch} type="text" name='search' placeholder='Search' value={searchUser} autoComplete="off"/>
        </div>
        <div onClick={()=>setIsGenderClicked(e=>!e)} className={styles.genderSelect}>{gender} <RiArrowDownSLine className={styles.downArrow}/>
        {isGenderClicked?<div className={styles.optionCont}>
        <p onClick={()=>setGender("All")} className={styles.options}>All</p>
            <p onClick={()=>setGender("Male")} className={styles.options}>Male</p>
            <p onClick={()=>setGender("Female")} className={styles.options}>Female</p>
        </div>:null}
        </div>

        </div>
  )
}

export default Sorter