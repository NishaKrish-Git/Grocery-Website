import React, { useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CategoryProduct from './CategoryProduct'
import { useEffect } from "react";
import axios from "../api/axios";
import { responsive } from "../responsive";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

 const CategoryProducts = () => {
  const {category}=useParams()
  const [productVeg, setProductVeg] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `/getProducts/${category}`
      );
      setProductVeg(data);
      
    };
    fetchData();
  }, [category]);

  const product =
    productVeg &&
    productVeg?.map((item, i) => <CategoryProduct key={i} {...item}></CategoryProduct>);

  return (
    <div className="App">
      <h1
        style={{ textAlign: "center", color: "green", paddingBottom: "20px", textTransform:'capitalize' }}
      >
        {category&&category}
      </h1>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
};
export default CategoryProducts;
