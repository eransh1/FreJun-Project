import React from 'react'
import styles from "./Table.module.css"
import load from "../../../images/Pulse-1s-200px.svg"



const Table = ({dataTosHow}) => {
  return (
    <section className={styles.outerCont}>
        <div className={styles.top}>
        <p>User</p>
        <p>Email</p>
        <p>Age</p>
        <p>Gender</p>    
        </div>
        {dataTosHow?<>
            
        <div className={styles.table}>
        {dataTosHow.length===0?<><div className={styles.noDataCont}>No Match Found</div></>:
        dataTosHow.map((user)=>{
                return <>
                <div key={user?.id} className={styles.tableList}>
          <p className={styles.tableContentName}><span><img className={styles.userImg} src={user?.image} alt="userImg" /></span>{`${user?.firstName} ${user?.lastName}`}</p> 
          <p className={styles.tableContent}>{user?.email}</p> 
          <p className={styles.tableContent}>{user?.age}</p>
          <p className={styles.tableContent}>{user?.gender}</p>
          </div>
          </>})}
        </div>
    

        </>:<><div className={styles.loaderCont}><span className={styles.loadingText}>Loading.....</span>
        <span><img src={load} alt="loader" /></span></div></>}
    </section>
  )
}

export default Table