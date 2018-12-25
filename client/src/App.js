import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.scss";
import Navbar from "./components/layout/Navbar";
import data from "./data/vehicle.json";
import View from "./components/vehicle/View";
import Edit from "./components/vehicle/Edit";

let vehicleData = {
  name: data.name,
  compDeductible: data.compDeductible,
  collDeductible: data.collDeductible,
  rentalCar: data.rentalCar,
  roadside: data.roadside
};
localStorage.setItem("vehicleData", JSON.stringify(vehicleData));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={View} />
            <Route exact path="/edit" component={Edit} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
