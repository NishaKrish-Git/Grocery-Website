import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const navigate=useNavigate()

  const [errors, setErrors] = useState({});
const{user,isAuthorized}=useSelector((state)=>state.authReducer)
  const handleChange = (e) => {
    
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!feedback.trim()) {
      validationErrors.FeedBack = "Enter Your Message";
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      if(!isAuthorized){
       toast.error('Please SignUp and Update')
      }else if(isAuthorized){
        axios.post("https://grocery-website-gcgh.onrender.com/userfeedback", {feedback:feedback,userId:user._id}).then((res) => {
        console.log(res.data.status)
        if (res.data.status === "feedback submitted") {
          toast.success("Feedback submitted successfully");
          navigate('/')
        }
      });
      }
    }
  };
  return (
    <div style={{ textAlign: "center", height: "100vh", color: "#ffc107" }}>
      <h2>Your FeedBack Here</h2>
      <form action="" onSubmit={handleSubmit}>
        <textarea
          name="FeedBack"
          id=""
          cols="30"
          rows="10"
          typeof="text"
          placeholder="Your Message here"
          style={{ marginBottom: "20px", marginTop: "20px" }}
          onChange={handleChange}
          value={feedback}
        ></textarea>
         <p className="error">{errors.FeedBack && errors.FeedBack}</p>
        <br />
        <input type="submit" className="btn btn-warning" value="Submit" />
      </form>
    </div>
  );
};
