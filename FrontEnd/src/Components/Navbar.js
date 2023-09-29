import React, { useEffect, useState } from "react";
// import '../Components/nav.css'
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart, AiTwotoneHome,AiOutlineLogout,AiTwotoneHeart } from "react-icons/ai";
import {GiFruitBowl} from 'react-icons/gi'
import { BiSolidUser } from "react-icons/bi";
import {FaShopify} from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../Components/Redux/CartSlice";
import { Link } from "react-router-dom";
import { signOut } from "../Components/Redux/UserSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Navbar = () => {
  const { cart } = useSelector((state) => state.Cart);
  const navigate = useNavigate();
  const { isAuthorized, user } = useSelector((state) => state.authReducer);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  
  console.log(search)

  const handleSearch = (e) => {
  
    e.preventDefault();
    if(search.trim()){
      navigate(`/searchproducts/${search}`);
    }
  };

  return (
    <>
      {/* Navbar */}
      <div className="py-3">
        <div className="container row mx-auto">
          <img src="logo1.png" style={{ width: "60px" }} alt="" />
          <div className="col name fw-bold" style={{ color: "#F5C32C" }}>
            Grocer Ocean
          </div>
          <form
            action=""
            onSubmit={handleSearch}
            className="border d-flex flex-nowrap col-5 p-0 rounded"
          >
            <input
              type="text"
              className="form-control shadow-none border-0"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <span
              className="btn"
              style={{ backgroundColor: "#F5C32C" }}
              onClick={handleSearch}
            >
              <AiOutlineSearch />
            </span>
          </form>
          <div className="col d-flex justify-content-center">
            <span onClick={()=>navigate('/')}
               style={{
                color: "#F5C32C",
                fontSize: "25px",
                paddingRight:'20px',
                cursor:'pointer'
              }}
            >
              <AiTwotoneHome />
            </span>
            <span onClick={()=>navigate('/wishlist')}
               style={{
                color: "#F5C32C",
                fontSize: "25px",
                paddingRight:'20px',
                cursor:'pointer'
              }}
            >
              <AiTwotoneHeart />
            </span>

            <span onClick={()=>navigate('/products')}  
             style={{
                  color: "#F5C32C",
                  fontSize: "25px",
                  paddingRight:'20px',
                  cursor:'pointer'
                }}>
              <GiFruitBowl/>
            </span>

           
            
            {isAuthorized ? (
              <Link onClick={() => dispatch(signOut())}>
                <span
                  style={{
                    color: "#F5C32C",
                    paddingRight: "20px",
                    fontSize: "25px",
                  }}
                >
                  <AiOutlineLogout/>
                </span>
              </Link>
            ) : (
              <Link to="/login">
                <span
                  style={{
                    color: "#F5C32C",
                    paddingRight: "20px",
                    fontSize: "25px",
                  }}
                >
                  <BiSolidUser />
                </span>
              </Link>
            )}

            <Link to="/cart" style={{ textDecoration: "none" }}>
              <span
                style={{
                  color: "#F5C32C",
                  fontSize: "25px",
                }}
              >
                <AiOutlineShoppingCart />
              </span>
              <span
                style={{
                  position: "absolute",
                  color: "green",
                  backgroundColor: "#F5C32C",
                  borderRadius: "50%",
                  padding: "0 5px",
                }}
              >
                {cart?.length}
              </span>
            </Link>
            <span style={{ color: "red" }}></span>

            <span onClick={()=>navigate('/orders')}  
             style={{
                  color: "#F5C32C",
                  fontSize: "25px",
                  marginLeft:'25px',
                  cursor:'pointer'
                }}>
              <FaShopify/>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
