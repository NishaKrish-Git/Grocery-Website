import React, { Fragment, useEffect, useState } from "react";
import CardComponent from "../CardComponent/CardComponent";
import { useDispatch, useSelector } from "react-redux";
import axios from '../api/axios'
import { useParams } from "react-router-dom";
import { CgArrowLeft } from "react-icons/cg";

function SearchProducts() {
  const {search}=useParams()
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try{
        const { data } = await axios.get(`/searchproducts/${search}`);
        setProducts(data);
      }catch(err){
console.log(err.message);
      }
   
      
    };
    fetchData();
  }, [search]);

  return (
    <Fragment>
      <div className="container p-0">
        
        {!products?.length? (
          <Fragment>
            <div className="py-5 my-5 bg-white shadow h-300">
              <div className="d-flex justify-content-center h-100 align-items-center">
                <div className="link-danger">Sorry! No Products Found</div>
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

export default SearchProducts;

