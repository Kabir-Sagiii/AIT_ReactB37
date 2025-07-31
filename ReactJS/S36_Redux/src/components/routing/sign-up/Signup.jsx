import { useState } from "react";
import "./Signup.css";

import { useNavigate } from "react-router-dom";
function Signup() {
  const [newUser, setNewUser] = useState({
    name: "",
    gender: "",
    city: "",
    password: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="">Sign Up</h2>

        <form className="signup-form">
          <input
            value={newUser.name}
            type="text"
            placeholder="Full Name"
            name="name"
            onChange={(event) => {
              getData(event);
            }}
            required
          />
          <input
            value={newUser.city}
            type="text"
            placeholder="City"
            name="city"
            onChange={(event) => {
              getData(event);
            }}
            required
          />

          <select
            name="gender"
            required
            value={newUser.gender}
            onChange={(event) => {
              getData(event);
            }}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <input
            value={newUser.email}
            onChange={(event) => {
              getData(event);
            }}
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <input
            value={newUser.phone}
            onChange={(event) => {
              getData(event);
            }}
            type="tel"
            placeholder="Phone Number"
            name="phone"
            required
          />
          <input
            type="password"
            onChange={(event) => {
              getData(event);
            }}
            placeholder="Password"
            name="password"
            required
            value={newUser.password}
          />

          <button type="button">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
