import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import coveragesData from "../../data/coverages.json";

class Changes extends Component {
  state = {
    vehicle: {},
    current: {}
  };
  static getDerivedStateFromProps(props, state) {
    if (props.vehicle !== state.vehicle) {
      return {
        vehicle: props.vehicle
      };
    } else if (props.current !== state.current) {
      return {
        current: props.current
      };
    }
    // Return null if the state hasn't changed
    return null;
  }
  onClick = () => {
    let editedVehicleData = {
      name: this.state.vehicle.name,
      compDeductible: this.state.current.compDeductible,
      collDeductible: this.state.current.collDeductible,
      roadside: this.state.current.roadside,
      rentalCar: this.state.vehicle.rentalCar
    };
    localStorage.setItem("vehicleData", JSON.stringify(editedVehicleData));
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto m-3">
              <div className="changes-wrapper">
                <div className="header d-flex">
                  <p className="align-self-center">Coverages Changes</p>
                </div>
                <div className="body">
                  <div>
                    {this.props.isChangesVisible ? (
                      <div>
                        {coveragesData.coverageOptions
                          .filter(item => item.name !== "rentalCar")
                          .map((item, i) =>
                            this.props.vehicle[item.name] !==
                            this.props.current[item.name] ? (
                              <div
                                key={i}
                                className="d-flex justify-content-between"
                              >
                                <div className="left">{item.title}</div>
                                <div className="right">
                                  {this.props.vehicle[item.name] !== "9999" &&
                                  this.props.vehicle[item.name] !== "true" &&
                                  this.props.vehicle[item.name] !== "false"
                                    ? `$${this.props.vehicle[item.name]}`
                                    : this.props.vehicle[item.name] === "9999"
                                    ? "No Coverage"
                                    : this.props.vehicle[item.name] === "false"
                                    ? "No"
                                    : "Yes"}{" "}
                                  <span className="arrow">--&gt;</span>{" "}
                                  {this.props.current[item.name] !== "9999" &&
                                  this.props.current[item.name] !== "true" &&
                                  this.props.current[item.name] !== "false"
                                    ? `$${this.props.current[item.name]}`
                                    : this.props.current[item.name] === "9999"
                                    ? "No Coverage"
                                    : this.props.current[item.name] === "false"
                                    ? "No"
                                    : "Yes"}
                                </div>
                              </div>
                            ) : null
                          )}
                      </div>
                    ) : (
                      <div> No Changes </div>
                    )}
                  </div>
                </div>
                <div className="footer">
                  <div className="myBtn" onClick={this.onClick}>
                    Save Changes
                  </div>
                  <Link className="myLink mt-3" to="/">
                    Cancel Changes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Changes);
