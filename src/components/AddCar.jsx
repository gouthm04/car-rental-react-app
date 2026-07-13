import { useState } from "react";
import axios from "axios";

const AddCar = () => {
  const [car, setCar] = useState({
    registration_number: "",
    brand: "",
    model: "",
    vehicle_type: "Hatchback",
    fuel_type: "Petrol",
    transmission: "Manual",
    seating_capacity: "",
    rent_per_day: "",
    city: "",
    availability_status: "Available",
  });

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setCar({
      ...car,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  axios
    .post("https://host-demo-app.onrender.com/api/add-car", car)
    .then((response) => {
      setMessage(response.data.message);
      setIsError(false);

      setCar({
        registration_number: "",
        brand: "",
        model: "",
        vehicle_type: "Hatchback",
        fuel_type: "Petrol",
        transmission: "Manual",
        seating_capacity: "",
        rent_per_day: "",
        city: "",
        availability_status: "Available",
      });
    })
    .catch((error) => {
      setIsError(true);
      setMessage(error.response.data.message);
    });
};

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add Car</h2>

      {message && (
        <div className={isError ? "text-danger mb-3" : "text-success mb-3"}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="row">

          <div className="col-md-6 mb-3">
            <label className="form-label">Registration Number</label>
            <input
              type="text"
              className="form-control"
              name="registration_number"
              value={car.registration_number}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Brand</label>
            <input
              type="text"
              className="form-control"
              name="brand"
              value={car.brand}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Model</label>
            <input
              type="text"
              className="form-control"
              name="model"
              value={car.model}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Vehicle Type</label>
            <select
              className="form-select"
              name="vehicle_type"
              value={car.vehicle_type}
              onChange={handleChange}
            >
              <option>Hatchback</option>
              <option>Sedan</option>
              <option>SUV</option>
              <option>MUV</option>
              <option>Luxury</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Fuel Type</label>
            <select
              className="form-select"
              name="fuel_type"
              value={car.fuel_type}
              onChange={handleChange}
            >
              <option>Petrol</option>
              <option>Diesel</option>
              <option>Electric</option>
              <option>Hybrid</option>
              <option>CNG</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Transmission</label>
            <select
              className="form-select"
              name="transmission"
              value={car.transmission}
              onChange={handleChange}
            >
              <option>Manual</option>
              <option>Automatic</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Seating Capacity</label>
            <input
              type="number"
              className="form-control"
              name="seating_capacity"
              value={car.seating_capacity}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Rent Per Day</label>
            <input
              type="number"
              className="form-control"
              name="rent_per_day"
              value={car.rent_per_day}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              name="city"
              value={car.city}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Availability Status</label>
            <select
              className="form-select"
              name="availability_status"
              value={car.availability_status}
              onChange={handleChange}
            >
              <option>Available</option>
              <option>Booked</option>
              <option>Maintenance</option>
            </select>
          </div>

          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Add Car
            </button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default AddCar;