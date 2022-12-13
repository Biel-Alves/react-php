import React from "react";

function Register() {
  return (
    <div className="flex items-center justify-center bg-[#333] text-white h-screen w-screen">
      <form
        className="flex flex-col justify-evenly bg-green-700 p-7 rounded-lg lg:h-[50vh] lg:w-[20vw] md:h-[45vh] md:w-[37vw] shadow-lg shadow-black"
        method="post"
      >
        <label htmlFor="name">Name:</label>
        <input
          className="inputField"
          type="text"
          name="name"
          id="name"
          placeholder="Full name"
        />
        <label htmlFor="">Phone Number:</label>
        <input
          className="inputField"
          type="text"
          name="phone"
          id="phone"
          placeholder=" Your phone number"
        />
        <label htmlFor="">Email:</label>
        <input
          className="inputField"
          type="text"
          name="email"
          id="email"
          placeholder="Your email"
        />
        <label htmlFor="">Address:</label>
        <input
          className="inputField"
          type="text"
          name="address"
          id="address"
          placeholder="Your address"
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
