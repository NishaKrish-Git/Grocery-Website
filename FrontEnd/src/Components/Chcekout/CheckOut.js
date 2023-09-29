import React, { Fragment } from "react";
import axios from "../api/axios";
import { useSelector, useDispatch } from "react-redux";
import { initCart } from "../Redux/CartSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const CheckOut = () => {
  const dispatch = useDispatch();
  const { isAuthorized, user } = useSelector((state) => state.authReducer);
  const cart = useSelector((state) => state.Cart);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    if (isAuthorized && cart.cart.length > 0) {
      axios
        .post("/placeorder", { ...cart, userId: user._id })
        .then((res) => {
          if (res.data.status === "product ordered") {
            dispatch(initCart());
            toast.success('Ordered Placed Successfully')
           setTimeout(()=>navigate('/orders'),2000)
          }
        })
        .catch((err) => console.log(err));
    }else{
      toast.warning('Your Cart is Empty')
      
    }
  };
  return (
    
    <Fragment>
    {cart?.cart.length < 1 ? (
      <Fragment>
        <div className="min-h-450px">
          <div className="container my-5 p-5 bg-warning">
            <h6 className="text-center mb-3 mt-4">No Product to be Checkout</h6>
            <h6 className="text-center mb-4"><span className="btn btn-success" onClick={()=>navigate('/')}>Go To Home</span></h6>
          </div>
        </div>
      </Fragment>
    ) : (
      <Fragment>
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center h-100 container mx-auto">
            <div className="col container">
              <p>
                <span className="h4">CheckOut </span>
              </p>

              <Fragment>
                <div className="card mb-4">
                  <div className="card-body p-2">
                    {cart?.cart.map((item, i) => {
                      return (
                        <Fragment key={i}>
                          <div className="mb-3 shadow-sm py-2 mt-2">
                            <div className="mb-3 row row-cols-1 row-cols-sm-4  px-2 mx-auto">
                              <div className="col  mx-auto text-center">
                                <img
                                  className="mx-auto"
                                  src={item?.imageURL}
                                  alt=""
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    maxWidth: "100px",
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                              <div className="col p-0 d-flex justify-content-center">
                                <h6 className="mt-2 fw-bold">{item?.title}</h6>
                              </div>
                              <div className="col  p-0 d-flex justify-content-center">
                                <h6 className="text-center mt-sm-2 m-0 mb-2 ">
                                  Rs. {item?.price * item?.quantity}
                                </h6>
                              </div>
                              <div className="col p-0 d-flex justify-content-center">
                                <h6 className="d-flex mt-sm-2">
                                  Qty : {item?.quantity}
                                </h6>
                              </div>
                            </div>
                          </div>
                        </Fragment>
                      );
                    })}
                  </div>
                </div>
              </Fragment>

              <div className="card mb-4">
                <div className="card-body p-2">
                  <div className="mx-auto ">
                    <div className="row row-cols-1 row-cols-sm-2">
                      <p className="col pt-2 text-end pe-4 pe-sm-0 fw-bold">
                        Order total: Rs. {cart?.totalPrice}
                      </p>
                      <h6 className="col text-end pt-1">
                        <button
                          type="button"
                          className="btn btn-warning me-2"
                          onClick={handlePlaceOrder}
                        >
                          Confirm Order
                        </button>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
    )}
  </Fragment>
  );
};
