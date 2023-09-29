import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import axios from "axios";
import { toast } from "react-toastify";

export const SignUpRouter = () => {
  const [newUser, setNewUser] = useState({
    UserName: "",
    Email: "",
    PassWord: "",
  });
  const [userErr, setUserErr] = useState({
        userNameError:'',
            emailError:'',
            passError:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
    setUserErr({
        userNameError:'',
            emailError:'',
            passError:''
    })
    }
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
     if(newUser.UserName && newUser.Email && newUser.PassWord){
        axios
        .post("https://grocery-website-gcgh.onrender.com/signup",newUser)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err.message));
     }
     
     if(newUser.UserName===''){
        
        userErr.userNameError=''
       
     } 
     console.log(userErr);
     if(newUser.Email===''){
        userErr.emailError='Enter Email' 
     } 
     console.log(userErr);
     if(newUser.PassWord===''){
        userErr.passError='Enter Password'
      
        
     } 
     console.log(userErr);   
  };
  console.log(userErr); 
  return (
    <>
      <div className="register-photo">
        <div className="form-container">
          <div className="image-holder"></div>
          <form method="post" encType="text/html" onSubmit={handleSubmit}>
            <h2 className="text-center">
              <strong style={{ color: "#F5C32C" }}>Create</strong> an account.
            </h2>
            <div className="form-group">
              <input
                className="form-control"
                style={{ borderColor: "#F5C32C" }}
                type="text"
                name="UserName"
                placeholder="User Name"
                onChange={(e) => handleChange(e)}
                value={newUser.UserName}
              />
            </div>{" "}
            <p className="error">{userErr.userNameError}</p>
            <div className="form-group">
              <input
                className="form-control mt-3"
                style={{ borderColor: "#F5C32C" }}
                type="email"
                name="Email"
                placeholder="Email"
                onChange={(e) => handleChange(e)}
                value={newUser.Email}
              />
            </div>{" "}
            <p className="error">{userErr.emailError}</p>
            <div className="form-group">
              <input
                className="form-control mt-3"
                style={{ borderColor: "#F5C32C" }}
                type="password"
                name="PassWord"
                placeholder="Password"
                onChange={(e) => handleChange(e)}
                value={newUser.PassWord}
              />
            </div>
            <p className="error">{userErr.passError}</p>
            <div className="form-group">
              <button className="btn btn-primary" type="submit">
                Sign Up
              </button>
            </div>
            You already have an account?{" "}
            <Link to="/login">
              <span
                style={{
                  color: "#F5C32C",
                  listStyleType: "none",
                  fontWeight: "bold",
                }}
              >
                Login here
              </span>
            </Link>
          </form>
        </div>
      </div>
    </>
  )}
