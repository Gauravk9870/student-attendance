import React, { useState } from 'react'
import styles from "../styles/Form.module.css";

const AttendanceForm = ({addStudent,setIsCheckIn}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [checkIn, setCheckIn] = useState(false);

  const handleSubmit=(e)=>{
    e.preventDefault();

    addStudent(firstName+" "+lastName, rollNumber);
    setIsCheckIn(true);
    setFirstName("");
    setLastName("");
    setRollNumber("");
  }
  return (
    <div className={styles.form}>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <div className={styles.name}>

            <div className={[styles.firstName]}>
              <label htmlFor="firstname">First Name</label>
              <input type="text" placeholder='Gaurav' onChange={e => setFirstName(e.target.value)} value = {firstName} required />
            </div>

            <div className={styles.lastName}>
              <label htmlFor="lastname">Last Name</label>
              <input type="text" placeholder='Kumar' onChange={e => setLastName(e.target.value)} value = {lastName}/>
            </div>

          </div>

          <div className={styles.rollNumber}>
            <label htmlFor="rollno">Roll Number</label>
            <input type="text" placeholder='209088' onChange={e => setRollNumber(e.target.value)} value = {rollNumber} required />
          </div>
          <button className={styles.btn}>Check In</button>
          
        </form>
    </div>
  )
}

export default AttendanceForm