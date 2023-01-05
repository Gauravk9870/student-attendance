import styles from "./styles/App.module.css"
import AttendanceForm from "./components/AttendanceForm"
import { useEffect, useState } from "react";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([]);
  const [isCheckIn, setIsCheckIn] = useState(false);
  const [totalPresent, setTotalPresent] = useState(0);


  const addStudent = (name, rollNumber) => {
    const checkTime = new Date().toLocaleString();
    setStudents([...students, { name, rollNumber, checkTime, checkOutTime: null }]);
  }

  const checkOut = rollNumber => {
    setStudents(students.map(student => {
      if (student.rollNumber === rollNumber) {
        setIsCheckIn(false);
        return { ...student, checkOutTime: new Date().toLocaleString() };
      }
      return student;
    }))
  }

  useEffect(() => {
    const count = students.reduce((acc, student) => acc + (student.checkOutTime ? 0 : 1), 0);
    setTotalPresent(count);

  }, [students]);

  return (
    <div className={styles.app}>
      <div className={styles.title}>
        {
          isCheckIn ? (
            <>
              <h3>Present</h3>
              <h1>Students</h1>
              <p>
        There are currently {totalPresent}{totalPresent <= 1 ? " Student" : " Students"} in the
        school.
      </p>
            </>
          ) :
            (
              <>
                <h3>Student</h3>
                <h1>Attendance</h1>
              </>
            )
        }

      </div>
      {isCheckIn ? (
        <>
          <StudentList students={students} checkOut={checkOut} />
          <div className={styles.btnContainer}>
            <button onClick={()=>setIsCheckIn(false)} className={styles.homeBtn}>Home</button>
          </div>
        </>
      )
        :(
          
          <AttendanceForm addStudent={addStudent} setIsCheckIn={setIsCheckIn} />
        )
      }
    </div>
  );
}

export default App;
