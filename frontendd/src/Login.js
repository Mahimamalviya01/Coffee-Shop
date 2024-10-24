import React, { useState } from "react";
import { MDBInput, MDBCheckbox, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch("http://localhost:5000/login", { // Update with your backend URL
        method: "POST", // Changed to POST
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uemail: email, upass: password }), // Request body
      });

      const result = await response.json();
      
      if (result) {
        alert("Login successful!");
        // Redirect or handle successful login here
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred during login.");
    }
  };

  return (
    <div>
      <center>
        <div className="p-3 my-5 d-flex flex-column w-50">
          <h5>LogIn Form</h5>
          <br></br>
          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="form1"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="form2"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="d-flex justify-content-between mx-3 mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4" onClick={handleLogin}>Sign in</MDBBtn>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className="text-center">
            <p>
              Not a member? <Link to={"/reg"}>Register</Link>
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

export default Login;
