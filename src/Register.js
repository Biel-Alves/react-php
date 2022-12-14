import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  let history = useNavigate(); //use for Navigate on Previous
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    // console.log(data);
  };
  const submitForm = (e) => {
    e.preventDefault();
    const sendData = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
    };
    // console.log(sendData);
    axios
      .post("http://localhost/php-react/insert.php", sendData)
      .then((result) => {
        if (result.data.Status === "Invalid") {
          alert("Invalid User");
        } else {
          history("/");
        }
      });
  };

  return (
    <div className="flex items-center justify-center bg-[#181818] text-white h-screen w-screen">
      <form
        onSubmit={submitForm}
        className="flex flex-col justify-evenly bg-green-700 p-7 rounded-lg lg:h-[50vh] lg:w-[20vw] md:h-[45vh] md:w-[37vw] shadow-lg shadow-black"
      >
        <label htmlFor="name">Name:</label>
        <input
          className="inputField"
          type="text"
          name="first_name"
          id="name"
          onChange={handleChange}
          value={data.first_name}
          placeholder="Your first name"
        />
        <label htmlFor="surname">Last Name:</label>
        <input
          className="inputField"
          type="text"
          name="last_name"
          id="surname"
          onChange={handleChange}
          value={data.last_name}
          placeholder="Your last name"
        />
        <label htmlFor="email">Email:</label>
        <input
          className="inputField"
          type="text"
          name="email"
          id="email"
          onChange={handleChange}
          value={data.email}
          placeholder="Your email"
        />
        <label htmlFor="password">Password:</label>
        <input
          className="inputField"
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          value={data.password}
          placeholder="Your password"
        />
        <button
          type="submit"
          className="bg-green-500 mt-4 p-2 uppercase rounded cursor-pointer transition-all hover:scale-105"
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default Register;
