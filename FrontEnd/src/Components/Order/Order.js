import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import axios from "../api/axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const { user, isAuthorized } = useSelector((state) => state.authReducer);
  const [myOrders, setMyOrders] = useState([]);
  const navigate=useNavigate()

  function date(milli) {
    const date = new Date(milli).toString().split(" ");
    return `${date[0]} ${date[1]} ${date[2]} ${date[3]}`;
  }

  useEffect(() => {
    if (isAuthorized) {
      axios
        .post("/getuserorders", { userId: user._id })
        .then((res) => {
          setMyOrders(res.data.order);
          console.log(res.data);
        })

        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <Fragment>
      {!isAuthorized ? (
        <Fragment>
          <div className="min-h-450px">
            <div className="container my-5 p-5 bg-warning">
              <h6 className="text-center mb-3 mt-4">
                No Product to be Ordered
              </h6>
              <h6 className="text-center mb-4">
                <span className="btn btn-success" onClick={() => navigate("/")}>
                  Go To Home
                </span>
              </h6>
            </div>
          </div>
        </Fragment>
      ) : (
       <Fragment>
        {user?.Orders.length<1?     <div className="min-h-450px">
            <div className="container my-5 p-5 bg-warning">
              <h6 className="text-center mb-3 mt-4">
                No Product to be Ordered
              </h6>
              <h6 className="text-center mb-4">
                <span className="btn btn-success" onClick={() => navigate("/")}>
                  Go To Home
                </span>
              </h6>
            </div>
          </div> : 
         <Fragment>
          <section className="h-100 gradient-custom">
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-10 col-xl-8">
                  <div className="card" style={{ borderRadius: "10px" }}>
                    <div className="card-header px-4 py-5">
                      <h5 className="text-muted mb-0">
                        Thanks for your Order ,
                        <span style={{ color: "#a8729a" }}>
                          {" "}
                          {user?.UserName}
                        </span>
                        !
                      </h5>
                    </div>
                    {myOrders.map((element, i) => {
                      return (
                        <Fragment key={i}>
                          <div className="card-body p-2  mb-3">
                            <div className="p-4 shadow">
                              <div className="d-flex justify-content-between align-items-center mb-2">
                                <p
                                  className="lead fw-normal mb-0"
                                  style={{ color: "#a8729a" }}
                                >
                                  Receipt
                                </p>
                                <p className="small text-muted mb-0">
                                  Voucher No : {element?.orderedDate}
                                </p>
                              </div>
                              {element.orderedProducts.map((pro, index) => {
                                return (
                                  <Fragment key={index}>
                                    <div className="card shadow-0 border">
                                      <div className="card-body">
                                        <div className="row">
                                          <div className="col-md-3 text-center">
                                            <img
                                              style={{ maxWidth: "200px" }}
                                              src={pro?.imageURL}
                                              className="img-fluid"
                                              alt="Phone"
                                            />
                                          </div>
                                          <div className="col-md-3 text-center d-flex justify-content-center align-items-center">
                                            <p className="text-muted mb-0">
                                              {pro?.title}
                                            </p>
                                          </div>

                                          <div className="col-md-3 text-center d-flex justify-content-center align-items-center">
                                            <p className="text-muted mb-0 small">
                                              Qty: {pro?.quantity}
                                            </p>
                                          </div>
                                          <div className="col-md-3 text-center d-flex justify-content-center align-items-center">
                                            <p className="text-muted mb-0 small">
                                              {`Rs.${
                                                pro?.price * pro?.quantity
                                              }.00`}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Fragment>
                                );
                              })}

                              <div className="d-flex justify-content-between pt-2">
                                <p className="fw-bold mb-0">Order Details</p>
                              </div>

                              <div className="d-flex justify-content-between">
                                <p className="text-muted mb-0">
                                  Invoice Date : {date(element?.orderedDate)}
                                </p>
                                <p className="text-muted mb-0">
                                  <span className="fw-bold me-4">Total</span>{" "}
                                  {`Rs.${element?.orderedTotalPrie}.00`}
                                </p>
                              </div>

                              <div className="d-flex justify-content-between mb-1">
                                <p className="text-muted mb-0">
                                  Voucher No : {element?.orderedDate}
                                </p>
                                <p className="text-muted mb-0">
                                  <span className="fw-bold me-4">Charges</span>{" "}
                                  Free
                                </p>
                              </div>
                            </div>
                          </div>
                        </Fragment>
                      );
                    })}
                    <div
                      className="card-footer border-0 px-4 py-5"
                      style={{
                        backgroundColor: "#a8729a",
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                      }}
                    >
                      <h5 className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">
                        Total paid:{" "}
                        <span className="h2 mb-0 ms-2">
                          Rs.
                          {myOrders
                            .map((e) => e.orderedTotalPrie)
                            .reduce((total, crr) => total + crr, 0)}
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fragment>}
       </Fragment>
      )}
    </Fragment>
  );
};

export default Order;
