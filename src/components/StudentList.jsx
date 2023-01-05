import React from "react";
import styles from "../styles/StudentList.module.css";

const StudentList = ({ students, checkOut }) => {
  return (
    <div className={styles.list}>
      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Roll No.</th>
              <th>Name</th>
              <th>Check In Time</th>
              <th>Check Out Time</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.rollNumber}>
                <td>{student.rollNumber}</td>
                <td>{student.name}</td>
                <td>{student.checkTime}</td>
                <td>
                  {student.checkOutTime || (
                    <button
                      onClick={() => checkOut(student.rollNumber)}
                      className={styles.checkOutBtn}
                    >
                      Check Out
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
