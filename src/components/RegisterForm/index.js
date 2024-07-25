// import React, { useState } from "react";
// import "./index.css";
// import axios from "axios";


// import { useNavigate } from "react-router-dom";

// const RegisterForm = () => {
//   const [employeeId, setEmployeeId] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleNav = (e) => {
//     navigate("/login");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (employeeId && email && password) {
//       try {
//         await axios.post("http://localhost:5000/register", {
//           username: email,
//           password,
//         });
//         setMessage("Registration successful!");
//         //navigate("/");
//       } catch (error) {
//         setMessage("Registration failed.");
//         console.error("Registration failed:", error);
//       }
//     } else {
//       setMessage("Please fill in all fields.");
//     }
//   };

//   return (
//     <div className="register-main">
//       <div className="registration-container">
//         <h2 className="registration-title">Registration</h2>
//         {message && <p className="registration-message">{message}</p>}
//         <form onSubmit={handleSubmit} className="registration-form">
//           <div className="form-group">
//             <input
//               type="text"
//               value={employeeId}
//               onChange={(e) => setEmployeeId(e.target.value)}
//               className="form-input"
//               required
//             />
//             <label className="form-label">Employee ID</label>
//           </div>
//           <div className="form-group">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="form-input"
//               required
//             />
//             <label className="form-label">Email</label>
//           </div>
//           <div className="form-group">
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="form-input"
//               required
//             />
//             <label className="form-label">Password</label>
//           </div>
//           <button type="submit" className="form-button">
//             Register
//           </button>
//         </form>
//         <div className="login-link">
//           Already a Member?{" "}
//           <button className="login-btn" onClick={handleNav}>
//             Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterForm;

// import React, { useState } from "react";
// import "./index.css";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const RegisterForm = () => {
//   const [employeeId, setEmployeeId] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleNav = () => {
//     navigate("/login");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (employeeId && email && password) {
//       try {
//         await axios.post("http://localhost:5000/register", {
//           employeeId,
//           username: email,
//           password,
//         });
//         setMessage("Registration successful!");
//         // Navigate to login page or home page after successful registration
//         navigate("/login");
//       } catch (error) {
//         setMessage("Registration failed.");
//         console.error("Registration failed:", error);
//       }
//     } else {
//       setMessage("Please fill in all fields.");
//     }
//   };

//   return (
//     <div className="register-main">
//       <div className="register-container">
//         <h2 className="register-title">Register</h2>
//         {message && <p className="register-message">{message}</p>}
//         <form onSubmit={handleSubmit} className="register-form">
//           <div className="form-group">
//             <input
//               type="text"
//               value={employeeId}
//               onChange={(e) => setEmployeeId(e.target.value)}
//               className="form-input"
//               required
//             />
//             <label className="form-label">Employee ID</label>
//           </div>
//           <div className="form-group">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="form-input"
//               required
//             />
//             <label className="form-label">Email</label>
//           </div>
//           <div className="form-group">
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="form-input"
//               required
//             />
//             <label className="form-label">Password</label>
//           </div>
//           <button type="submit" className="form-button">
//             Register
//           </button>
//         </form>
//         <div className="login-link">
//           Already a Member?{" "}
//           <button className="login-btn" onClick={handleNav}>
//             Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterForm;

import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [department, setDepartment] = useState('');
  const [designation, setDesignation] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password!== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    axios.post('/api/register', {
      name,
      email,
      password,
      employeeId,
      department,
      designation,
    })
     .then(response => {
        console.log(response.data);
        // Redirect to login page or show success message
      })
     .catch(error => {
        setError(error.response.data.error);
      });
  };

  return (
    <div className="register-page">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <label>
          Confirm Password:
          <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
        </label>
        <br />
        <label>
          Employee ID:
          <input type="text" value={employeeId} onChange={(event) => setEmployeeId(event.target.value)} />
        </label>
        <br />
        <label>
          Department:
          <input type="text" value={department} onChange={(event) => setDepartment(event.target.value)} />
        </label>
        <br />
        <label>
          Designation:
          <input type="text" value={designation} onChange={(event) => setDesignation(event.target.value)} />
        </label>
        <br />
        {error && <div style={{ color: 'ed' }}>{error}</div>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
