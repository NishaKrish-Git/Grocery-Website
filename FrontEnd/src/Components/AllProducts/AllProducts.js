import React, { Fragment, useEffect, useState } from "react";
import CardComponent from "../CardComponent/CardComponent";

import { useDispatch, useSelector } from "react-redux";
import axios from '../api/axios'
import { CgArrowLeft } from "react-icons/cg";

function AllProduct() {
  const dispatch = useDispatch();
  const [products,setProducts]=useState([])
  console.log(products)
  useEffect(() => {
     axios.get('/products').then((res)=>setProducts(res.data)).catch((err)=>console.log(err))
  }, []);

  return (
    <Fragment>
      <div className="container p-0">
        
        {!products ? (
          <Fragment>
            <div className="py-5 my-5 bg-white shadow h-300">
              <div className="d-flex justify-content-center h-100 align-items-center">
                <div className="link-danger">Check your internet</div>
              </div>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 px-3 px-sm-0 mx-auto">
              {products &&
                products.map((el, i) => {
                  return (
                    <div className="col p-2 bg-white position-relative" key={i}>
                      <CardComponent {...el} />
                      
                    </div>
                  );
                })}
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}

export default AllProduct;
