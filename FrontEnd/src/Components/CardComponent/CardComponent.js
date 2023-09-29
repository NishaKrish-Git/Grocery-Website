import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartSlice";

function CardComponent(props) {
  const dispatch = useDispatch();
console.log(props);
  return (
    <div className="border shadow-sm ">
      <div className="p-2 text-center overflow-hidden">
        {props?.imageURL &&<img
          src={props?.imageURL}
          alt=""
          style={{
            maxWidth: "180px",
            maxHeight: "150px",
            height:'150px',
            objectFit: "cover",
            width: "100%",
            borderRadius: "10px",
          }}
          className=" curser-pointer"
          
        />}
      </div>
      <div className="p-0 text-center overflow-hidden">
        <h6 className="p-0 capitalise curser-pointer" >{props.title}</h6>
        <h6 className="p-0 fs-10px text-nowrap">Rs. {props.price}</h6>
        <h6 className="p-0 fs-10px text-nowrap"><span className="btn btn-success" onClick={()=>dispatch(addToCart({...props,quantity:1}))}>Add to Cart</span></h6>
      </div>
    </div>
  );
}

export default CardComponent;