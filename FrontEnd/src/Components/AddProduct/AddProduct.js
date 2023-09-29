import axios from "axios";
import React, { useState } from "react";

export const AddProduct = () => {


const[imageURL,setImageUrl]=useState('')
const[title,setTitle]=useState('')
const[category,setCategory]=useState('')
const[price,setPrice]=useState(0)


const addProduct=(e)=>{
    e.preventDefault()
    axios.post('https://grocery-website-gcgh.onrender.com/addProduct',{imageURL,title,price,category})
    .then(()=>{
        setImageUrl('')
        setTitle('')
        setPrice(0)
        setCategory('')
    }).catch((err)=>alert(err.message))
}

  return (
    <div className="container">
      <div className="bg position-relative" style={{height:'105vh',paddingTop:'0px'}}>
        <div className="loginbox">
          <h1>Add Product</h1>
          <form method="POST" action="">
            <p>ImageURL</p>{" "}
            <input
              type="text"
              placeholder=""
              onChange={(e)=>setImageUrl(e.target.value)}
              value={imageURL}
            />
            <p>Title</p>{" "}
            <input
              type="text"
              name=""
              placeholder=""
              onChange={(e)=>setTitle(e.target.value)}
              value={title}
            />
             <p>Category</p>{" "}
            <input
              type="text"
              name=""
              placeholder=""
              onChange={(e)=>setCategory(e.target.value)}
              value={category}
            />
            <p>Price</p>{" "}
             <input
              type="number"
              name=""
              placeholder=""
              style={{background:'transparent'}}
              onChange={(e)=>setPrice(e.target.value)}
              value={price}
            />
           
          
            <input type="submit" name="" value="Add to Product" onClick={addProduct}/>
           
          </form>
        </div>
      </div>
    </div>
  );
};
