import React, { useState } from "react";
import "./Signup.scss";
import { Link } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const result = await axiosClient.post("/auth/signup", {
        name,
        email,
        password,
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="Signup">
      <div className="signup-box">
        <h2 className="heading">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="name"
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="submit"
            value="Submit"
            className="submit"
            // onClick={handleSubmit}
          />
        </form>

        <p className="subheading">
          Already have an account <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
