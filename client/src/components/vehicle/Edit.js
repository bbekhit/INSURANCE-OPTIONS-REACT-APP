import React, { Component } from "react";
import coveragesData from "../../data/coverages.json";
import Changes from "./Changes";

export class Edit extends Component {
  state = {
    compDeductible: "",
    collDeductible: "",
    rentalCar: "",
    roadside: "",
    vehicle: {},
    blueColored: false,
    isChangesVisible: false,
    sameData: true
  };
  componentDidMount() {
    let vehicle = JSON.parse(localStorage.getItem("vehicleData"));
    this.setState({
      compDeductible: vehicle.compDeductible,
      collDeductible: vehicle.collDeductible,
      rentalCar: vehicle.rentalCar,
      roadside: vehicle.roadside,
      vehicleName: vehicle.name,
      vehicle
    });
    this.addBlue();
  }
  addBlue = () => {
    this.setState({ blueColored: true });
  };
  onClick = (value, name) => {
    this.setState({ [name]: value, isChangesVisible: true });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto mt-5">
              <div className="edit-wrapper">
                <div className="header d-flex">
                  <p className="align-self-center">{this.state.vehicle.name}</p>
                </div>
                <div className="body">
                  {coveragesData.coverageOptions.map((item, i) => (
                    <div key={i} className="unit-wrapper">
                      <div>
                        <p>{item.title}</p>
                      </div>
                      <div className="d-flex item-wrapper text-uppercase">
                        {item.options.map((subItem, i) => (
                          <table
                            key={i}
                            className={`item text-center ${
                              this.state.blueColored &&
                              this.state[item.name] === subItem.value
                                ? "addBlue"
                                : null
                            }`}
                            onClick={this.onClick.bind(
                              this,
                              subItem.value,
                              item.name
                            )}
                          >
                            <tbody>
                              <tr>
                                <td className="item-data">{subItem.name}</td>
                              </tr>
                            </tbody>
                          </table>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Changes
          current={this.state}
          vehicle={this.state.vehicle}
          isChangesVisible={this.state.isChangesVisible}
        />
      </div>
    );
  }
}

export default Edit;
