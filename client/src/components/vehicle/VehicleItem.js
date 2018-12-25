import React from "react";
import { Link } from "react-router-dom";

const VehicleItem = ({ vehicle }) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto mt-5">
            <div className="view-wrapper">
              <div className="header d-flex">
                <p className="align-self-center">{vehicle.name}</p>
              </div>
              <div className="body d-flex justify-content-between">
                <div className="left d-flex flex-column">
                  <p>Comprehensive Deductible</p>
                  <p>Collision Deductible</p>
                  <p>Rental Reimbursement</p>
                  <p>Roadside Assistance</p>
                </div>
                <div className="right d-flex flex-column align-items-end">
                  <p>
                    {vehicle.compDeductible === "9999"
                      ? "No Coverage"
                      : `$${vehicle.compDeductible}`}
                  </p>
                  <p>
                    {vehicle.collDeductible === "9999"
                      ? "NO Coverage"
                      : `$${vehicle.collDeductible}`}
                  </p>
                  <p>{vehicle.rentalCar === "true" ? "Yes" : "No"}</p>
                  <p>{vehicle.roadside === "true" ? "Yes" : "No"}</p>
                </div>
              </div>
              <div className="footer text-center">
                <Link className="myLink" to="/edit">
                  Edit Coverage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleItem;
