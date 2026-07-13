import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

const ViewCar = () => {
    const [data,changeData] = useState([])

    const fetchData = () => {
        axios.get("https://host-demo-app.onrender.com/api/cars")
        .then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }
        
    useEffect(
        () => {
            fetchData()
        },[ ]
    )
   
  return (
    <>
    <NavBar/>
    <div className="container mt-5">
      <h2 className="mb-4">View Cars</h2>

      <div className="row">
        <div className="col-12">
          <table className="table table-hover table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Reg No</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Type</th>
                <th>Fuel</th>
                <th>Transmission</th>
                <th>Seats</th>
                <th>Rent/Day</th>
                <th>City</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
                {data.map((value, index) => {
                    return (
                    <tr key={index}>
                        <td>{value.registration_number}</td>
                        <td>{value.brand}</td>
                        <td>{value.model}</td>
                        <td>{value.vehicle_type}</td>
                        <td>{value.fuel_type}</td>
                        <td>{value.transmission}</td>
                        <td>{value.seating_capacity}</td>
                        <td>{value.rent_per_day}</td>
                        <td>{value.city}</td>
                        <td>{value.availability_status}</td>
                    </tr>
                    );
                })}
                </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
};

export default ViewCar;