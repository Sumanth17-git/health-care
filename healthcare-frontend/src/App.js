import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import config from "./config";
const API_BASE_URL = config.API_BASE_URL;

function App() {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
    address: "",
    email: "",
    bloodGroup: "",
    allergies: "",
    medicalHistory: "",
    diagnosis: "",
    prescription: "",
    doctorName: "",
    department: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_BASE_URL}/patients`, patient);
      setMessage(`Patient registered successfully! ID: ${res.data.id}`);
    } catch (err) {
      setMessage("Error registering patient: " + err.message);
    }
  };

  return (
    <div className="App">
      <h1>Healthcare - Patient Registration</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={patient.name} onChange={handleChange} required />
        <input name="age" type="number" placeholder="Age" value={patient.age} onChange={handleChange} required />
        <input name="gender" placeholder="Gender" value={patient.gender} onChange={handleChange} required />
        <input name="contact" placeholder="Contact" value={patient.contact} onChange={handleChange} required />
        <input name="address" placeholder="Address" value={patient.address} onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" value={patient.email} onChange={handleChange} />
        <input name="bloodGroup" placeholder="Blood Group" value={patient.bloodGroup} onChange={handleChange} />
        <input name="allergies" placeholder="Allergies" value={patient.allergies} onChange={handleChange} />
        <input name="medicalHistory" placeholder="Medical History" value={patient.medicalHistory} onChange={handleChange} />
        <input name="diagnosis" placeholder="Diagnosis" value={patient.diagnosis} onChange={handleChange} />
        <input name="prescription" placeholder="Prescription" value={patient.prescription} onChange={handleChange} />
        <input name="doctorName" placeholder="Doctor Name" value={patient.doctorName} onChange={handleChange} />
        <input name="department" placeholder="Department" value={patient.department} onChange={handleChange} />
        
        <button type="submit">Register Patient</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;

