// import React, { useState } from "react";
// import { MDBInput, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
// import { useNavigate } from "react-router-dom";

// function Register() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const navigate = useNavigate(); // For programmatic navigation
//   const handleRegister = async (event) => {
//     event.preventDefault();
    
//     if (!username || !password || !email || !mobile) {
//       setError("All fields are required.");
//       return;
//     }
  
//     try {
//       const response = await fetch("http://localhost:5000/reg", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ uname: username, uemail: email, upass: password, umob: mobile }),
//       });
  
//       const result = await response.text(); // Changed to text for debugging
  
//       if (result === "registration successfully") {
//         setSuccess("Registration successful!");
//         setError(""); // Clear any previous errors
//         setTimeout(() => navigate("/login"), 2000); // Redirect after 2 seconds
//       } else {
//         setError("Registration failed. Please try again.");
//         setSuccess(""); // Clear any previous success messages
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setError("An error occurred during registration.");
//       setSuccess(""); // Clear any previous success messages
//     }
//   };
  

//   return (
//     <div>
//       <center>
//         <div className="p-3 my-5 d-flex flex-column w-50">
//           <h5>Registration Form</h5>
//           <br />
//           <MDBInput
//             wrapperClass="mb-4"
//             label="Username"
//             id="form1"
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//           <MDBInput
//             wrapperClass="mb-4"
//             label="Email address"
//             id="form2"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <MDBInput
//             wrapperClass="mb-4"
//             label="Password"
//             id="form3"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <MDBInput
//             wrapperClass="mb-4"
//             label="Mobile Number"
//             id="form4"
//             type="text"
//             value={mobile}
//             onChange={(e) => setMobile(e.target.value)}
//             required
//           />

//           <MDBBtn className="mb-4" onClick={handleRegister}>Register</MDBBtn>

//           {error && <p style={{ color: "red" }}>{error}</p>}
//           {success && <p style={{ color: "green" }}>{success}</p>}

//           <div className="text-center">
//             <p>
//               Already a member? <a href="/login">Login here</a>
//             </p>
//             <p>or sign up with:</p>

//             <div
//               className="d-flex justify-content-between mx-auto"
//               style={{ width: "40%" }}
//             >
//               <MDBBtn
//                 tag="a"
//                 color="none"
//                 className="m-1"
//                 style={{ color: "#1266f1" }}
//               >
//                 <MDBIcon fab icon="facebook-f" size="sm" />
//               </MDBBtn>

//               <MDBBtn
//                 tag="a"
//                 color="none"
//                 className="m-1"
//                 style={{ color: "#1266f1" }}
//               >
//                 <MDBIcon fab icon="twitter" size="sm" />
//               </MDBBtn>

//               <MDBBtn
//                 tag="a"
//                 color="none"
//                 className="m-1"
//                 style={{ color: "#1266f1" }}
//               >
//                 <MDBIcon fab icon="google" size="sm" />
//               </MDBBtn>

//               <MDBBtn
//                 tag="a"
//                 color="none"
//                 className="m-1"
//                 style={{ color: "#1266f1" }}
//               >
//                 <MDBIcon fab icon="github" size="sm" />
//               </MDBBtn>
//             </div>
//           </div>
//         </div>
//       </center>
//     </div>
//   );
// }

// export default Register;


import React, { useState } from "react";
import { MDBInput, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  // Form validation function
  const validateForm = () => {
    if (!username || !password || !email || !mobile) {
      return "All fields are required.";
    }
    // Add additional validation for fields if necessary (e.g., email format, mobile number)
    return null;
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    
    // Clear previous error/success messages
    setError("");
    setSuccess("");

    // Validate form fields
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/reg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uname: username,
          upass: password,
          uemail: email,
          umob: mobile,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json(); // Expecting JSON response from the server

      if (result.message === "registration successfully") {
        setSuccess("Registration successful!");
        setError("");
        setTimeout(() => navigate("/login"), 2000); // Redirect to login after 2 seconds
      } else {
        setError(result.message || "Registration failed. Please try again.");
        setSuccess("");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("register seccessfully.");
      setSuccess("");
    }
  };

  return (
    <div>
      <center>
        <div className="p-3 my-5 d-flex flex-column w-50">
          <h5>Registration Form</h5>
          <br />
          <MDBInput
            wrapperClass="mb-4"
            label="Username"
            id="form1"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          
          {/*<MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="form2"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />*/}

          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="form3"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="form2"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <MDBInput
            wrapperClass="mb-4"
            label="Mobile Number"
            id="form4"
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />

          <MDBBtn className="mb-4" onClick={handleRegister}>
            Register
          </MDBBtn>

          {error && <p style={{ color: "blue" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}

          <div className="text-center">
            <p>
              Already a member? <a href="/login">Login here</a>
            </p>
            <p>or sign up with:</p>

            <div
              className="d-flex justify-content-between mx-auto"
              style={{ width: "40%" }}
            >
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="facebook-f" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="twitter" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="google" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="github" size="sm" />
              </MDBBtn>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default Register;

