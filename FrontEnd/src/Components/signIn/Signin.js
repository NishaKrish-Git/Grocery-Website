import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    UserName: "",
    Email: "",
    PassWord: "",
  });
  

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //errors
    const validationErrors = {};
    if (!formData.UserName.trim()) {
      validationErrors.UserName = "User Name is required";
    }
    if (!formData.Email.trim()) {
      validationErrors.Email = "Email is required";
    }
    // else if(!/\s+@\s+/.test(formData.Email)){
    //     validationErrors.Email="Email is not valid"
    // }
    if (!formData.PassWord.trim()) {
      validationErrors.PassWord = "PassWord is required";
    }
    // else if(!formData.PassWord.length<6){
    //     validationErrors.PassWord="Password should be at least 6 character"
    // }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      axios
        .post("https://grocery-website-gcgh.onrender.com/signup", formData)
        .then((res) => {
          if (res.data.status === "email already exist") {
            toast.warning("email is already exist");
           
          }
          
          if (res.data.status === "username already exist") {
            toast.warning("UserName is already exist");
           
          }
          if (res.data.status === "user created") {
            toast.success("Form submitted successfully");
            navigate("/login");
          }
          
        })
        .catch((err) => console.log(err.message));
    }
  };
  return (
    <div className="register-photo">
      <div className="form-container">
        <div className="image-holder"></div>
        <form method="post" onSubmit={handleSubmit}>
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
              onChange={handleChange}
              value={formData.UserName}
            />
          </div>{" "}
          <p className="error">{errors.UserName && errors.UserName}</p>
          <div className="form-group">
            <input
              className="form-control mt-3"
              style={{ borderColor: "#F5C32C" }}
              type="email"
              name="Email"
              placeholder="Email"
              onChange={handleChange}
              value={formData.Email}
            />
          </div>{" "}
          <p className="error">{errors.Email && errors.Email}</p>
          <div className="form-group">
            <input
              className="form-control mt-3"
              style={{ borderColor: "#F5C32C" }}
              type="password"
              name="PassWord"
              placeholder="Password"
              onChange={handleChange}
              value={formData.PassWord}
            />
          </div>
          <p className="error">{errors.PassWord && errors.PassWord}</p>
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
  );
};
