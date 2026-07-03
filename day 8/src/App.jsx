import React, { useState } from "react";
import "./App.css";

function App() {
  const initialStudents = [
    { id: 1, regNo: "720823104001", name: "Abi B", className: "III ECE A", status: "Absent" },
    { id: 2, regNo: "720823104002", name: "Abirami P", className: "III ECE A", status: "Absent" },
    { id: 3, regNo: "720823104003", name: "Abishek K ", className: "III ECE A", status: "Absent" },
    { id: 4, regNo: "720823104004", name: "Ajay K", className: "III ECE A", status: "Absent" },
    { id: 5, regNo: "720823104005", name: "Ajaykumar S", className: "III ECE A", status: "Absent" },
    { id: 6, regNo: "720823104006", name: "Bala A", className: "III ECE A", status: "Absent" },
    { id: 7, regNo: "720823104007", name: "Bindhiya S", className: "III ECE A", status: "Absent" },
    { id: 8, regNo: "720823104008", name: "Charan R", className: "III ECE A", status: "Absent" },
    { id: 9, regNo: "720823104009", name: "Chandru G", className: "III ECE A", status: "Absent" },
    { id: 10, regNo: "720823104010", name: "Dhanya V", className: "III ECE A", status: "Absent" },
    { id: 11, regNo: "720823104011", name: "Dinesh P", className: "III ECE A", status: "Absent" },
  ];

  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState("");

  const toggleAttendance = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? {
              ...student,
              status: student.status === "Present" ? "Absent" : "Present",
            }
          : student
      )
    );
  };

  const present = students.filter((s) => s.status === "Present").length;
  const absent = students.length - present;
  const percentage = ((present / students.length) * 100).toFixed(0);

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.regNo.includes(search)
  );

  return (
    <div className="container">
      <div className="header">
        <h1>🏫 Hindusthan Institute of Technology</h1>
        <h3>Student Attendance Management Portal</h3>
      </div>

      <div className="cards">
        <div className="card blue">
          <h2>{students.length}</h2>
          <p>Total Students</p>
        </div>

        <div className="card green">
          <h2>{present}</h2>
          <p>Present</p>
        </div>

        <div className="card red">
          <h2>{absent}</h2>
          <p>Absent</p>
        </div>

        <div className="card purple">
          <h2>{percentage}%</h2>
          <p>Attendance</p>
        </div>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search by Name or Register Number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Register No</th>
              <th>Name</th>
              <th>Class</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.regNo}</td>
                <td>{student.name}</td>
                <td>{student.className}</td>

                <td
                  style={{
                    color:
                      student.status === "Present" ? "limegreen" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {student.status}
                </td>

                <td>
                  <button
                    onClick={() => toggleAttendance(student.id)}
                    className={
                      student.status === "Present"
                        ? "btn-absent"
                        : "btn-present"
                    }
                  >
                    {student.status === "Present"
                      ? "Mark Absent"
                      : "Mark Present"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer>
        <p>© 2026 Hindusthan Institute of Technology</p>
      </footer>
    </div>
  );
}

export default App;