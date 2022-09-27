import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section
        id="header"
        className="d-flex align-items-center mt-2"
        style={{ height: 680 }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong className="brand-name"> SonaleeAgrawal</strong>
                  </h1>
                  <h2 className="my-3 fs-7">
                    we are the team of talented developer making website..
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className=" col-xl order-1 order-lg-2 header-img m-4">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="home img"
                    // style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
