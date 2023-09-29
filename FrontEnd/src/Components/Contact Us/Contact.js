import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
  const navigate=useNavigate()
  return (
    <section className="bg-warning">
      <h3 className="text-center pb-4 bg-light mt-5">Reach Out To Us</h3>
      <div className="bg-warning container">
        <div className=" row row-cols-1 px-4 py-4 row-cols-sm-2 text-light row-cols-lg-4">
          <div className="col d-flex justify-content-center  text-center">
            <div>
              <div  className="mb-3 text-dark">
                <span>
                  <b>Quick Links</b>
                </span>
              </div>
              <div>
                <span onClick={()=>navigate('/')} style={{cursor:'pointer'}}> Home </span>
              </div>
              <div>
                <span onClick={()=>navigate('/categories')} style={{cursor:'pointer'}}> Categories </span>
              </div>
              <div>
                <span onClick={()=>navigate('/reviewCustomers')} style={{cursor:'pointer'}}>Review</span>
              </div>
              <div>
                <span onClick={()=>navigate('/contactus')} style={{cursor:'pointer'}}>Contact Us </span>
              </div>
            </div>
          </div>
          <div className="col d-flex justify-content-center text-center text-sm-start pb-3">
            <div>
              <div className="mb-3 text-dark">
                <span >
                  <b>Our Products</b>
                </span>
              </div>
            
              <div onClick={()=>navigate('/categoryproducts/Vegetables')} style={{cursor:'pointer'}}>
                <span>Vegetables</span>
              </div>
              <div>
                <span onClick={()=>navigate('/categoryproducts/snacks')} style={{cursor:'pointer'}}>Snacks</span>
              </div>
              <div>
                <span onClick={()=>navigate('/categoryproducts/Fruits')} style={{cursor:'pointer'}}>Fruits</span>
              </div>
              <div>
                <span onClick={()=>navigate('/categoryproducts/rice')} style={{cursor:'pointer'}}>Rice</span>
              </div>
              <div>
                <span onClick={()=>navigate('/categoryproducts/oil')} style={{cursor:'pointer'}}>Oil</span>
              </div>
              <div>
                <span onClick={()=>navigate('/categoryproducts/nuts')} style={{cursor:'pointer'}}>Nuts & Seeds</span>
              </div>
              <div>
                <span onClick={()=>navigate('/categoryproducts/cooldrinks')} style={{cursor:'pointer'}}>CoolDrinks</span>
              </div>
            </div>
          </div>
          <div className="col justify-content-center text-center d-flex ">
            <div>
              <div className="mb-3 text-dark">
                <span>
                  <b>Grocer Ocean Pvt.Ltd</b>
                </span>
              </div>
             
              <div>
                <span>No 123,</span>
              </div>
              <div>
                <span>Nungambakkam High Rd,</span>
              </div>
              <div>
                <span>Thousand Lights, Chennai</span>
              </div>
              <div>
                <span>Tamil Nadu 600034</span>
              </div>
            </div>
          </div>
          <div className="col justify-content-center text-center d-flex ">
            <div>
              <div className="mb-3 text-dark">
                <span>
                  <b>Get In Touch</b>
                </span>
              </div>
             
              <div>
                <span>+91 70927 78032</span>
              </div>
              <div>
                <span>GrocerOcean@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      <hr style={{color:'white',opacity:'1'}}/>
        <div className="footer-last">
          <p>
            <i className="fa-regular fa-copyright"></i> 2023 Grocer-Ocean. All
            right reserved
          </p>
          <p className="text-end">
            Website by <b>MS</b>
          </p>
        </div>
      </div>
    </section>
  );
};
