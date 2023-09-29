import React, { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import Category from "../Category/Category";
import {Review} from '../Review/Review'
import {Contact} from '../Contact Us/Contact'

const Home = () => {
  return (
    <>
      {/* Navbar 2nd line */}
      <Fragment>
      <div className="py-1 px-1 bg-success container mx auto">
        <div
          className="d-flex justify-content-around fw-bold"
          style={{ listStyleType: "none", color: "#F5C32C" }}
        >
          <Link to="/" style={{textDecoration:'none',color:'#F5C32C'}}>Home</Link>
          <Link to="/categories" style={{textDecoration:'none',color:'#F5C32C'}}>Categories</Link>
          <Link to="/reviewCustomers" style={{textDecoration:'none',color:'#F5C32C'}}>Review</Link>
          <Link to="/contactus" style={{textDecoration:'none',color:'#F5C32C'}}>Contact Us</Link>
        </div>
      </div>
      </Fragment>

      {/* Banner Section */}
      <Fragment>
      <div className="container">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="banner2.jpg"
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="banner 1.jpg"
              alt="Second slide"
            />
            <Carousel.Caption className="d-none d-lg-block">
              <h5 className="pt-5">Fresh and Organic</h5>
              <p style={{ color: "#F5C32C", fontWeight: "bold" }}>
                Grocer Ocean is an online supermarket for all your daily needs.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="banner3.jpg"
              alt="Third slide"
            />
            <Carousel.Caption className="d-none d-lg-block">
              <h5>Healthy Snacks</h5>
              <p style={{ color: "#F5C32C", fontWeight: "bold" }}>
                Now Go To Online Grocer Ocean
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>{" "}
        <br />
        <br />
        <br />
      </div>
      </Fragment>


<Fragment>
  <div className="">
  <Category />
      <Review />
      <Contact />
  </div>
</Fragment>
     
    </>
  );
};

export default Home;
