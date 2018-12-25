import React, { Component } from "react";
import VehicleItem from "./VehicleItem";
import Spinner from "../common/Spinner";

class View extends Component {
  state = {
    animate: false
  };
  componentDidMount() {
    setTimeout(() => this.setState({ animate: true }), 500);
  }
  render() {
    let vehicle = JSON.parse(localStorage.getItem("vehicleData"));
    let showVehicle;
    if (vehicle === undefined || Object.keys(vehicle).length === 0) {
      showVehicle = <Spinner />;
    } else {
      showVehicle = <VehicleItem vehicle={vehicle} />;
    }
    return (
      <div className={`view ${this.state.animate ? "myAnimate" : null}`}>
        {showVehicle}
      </div>
    );
  }
}

export default View;
