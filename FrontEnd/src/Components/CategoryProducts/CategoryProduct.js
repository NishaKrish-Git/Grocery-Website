import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartSlice";

export default function Product(props) {
  const dispatch = useDispatch();


  return (
    <div className="px-3 shadow-sm my-5">
      <div className="border">
        <div className="p-2 text-center overflow-hidden">
          {props?.imageURL && (
            <img
              src={props?.imageURL}
              alt=""
              style={{
                maxWidth: "180px",
                maxHeight: "150px",
                height: "150px",
                objectFit: "cover",
                width: "100%",
                borderRadius: "10px",
              }}
              className=" curser-pointer"
            />
          )}
        </div>
        <div className="p-0 text-center overflow-hidden">
          <h6 className="p-0 capitalise curser-pointer">{props?.title}</h6>
          <h6 className="p-0 fs-10px text-nowrap">Rs. {props?.price}</h6>
          <h6 className="p-0 fs-10px text-nowrap">
            <span className="btn btn-success" onClick={()=>dispatch(addToCart({...props,quantity:1}))}>Add to Cart</span>
          </h6>
        </div>
      </div>
    </div>
  );
}
