import React from "react";
import "./Review.css";
import ana from "./ana.png";
import jack from "./Jack.png";
import Bunny from "./Bunny.png";
import cute from "./cute.png";
import { useNavigate } from "react-router-dom";

export const Review = () => {
  const navigate=useNavigate()
  return (
    <>
      <div className="container">
        <div className="review">
          <p>CUSTOMER REVIEW'S</p>
          <br />
          <h1>
            See What Our Customers
            <br />
            Has To Say About Us
          </h1>
        </div>
        <div className="bx">
          <div className="bx-cont1">
            <div id="box1">
              <p>Marry Shan</p>
              <p>Business Person</p>
              <br />
              <p>
                Really efficient.Excellent service. Would definitely use them
                again.
              </p>
              <img src={ana} className="rounded-corners" />
            </div>
            <br />
            <br />
            <br />

            <div id="box2">
              <p>Jack </p>
              <p>Business Men</p>
              <br />
              <p>
                Nice products,I’m glad I found “Best Grocery” and I definitely
                recommend it!{" "}
              </p>
              <img src={jack} className="rounded-corners" />
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />

          
        </div>
        <br></br>
        <button className="feedbtn" onClick={()=>navigate('/feedback')}>Feedback</button>
        <br />
        <br />
      </div>
    </>
  );
};
