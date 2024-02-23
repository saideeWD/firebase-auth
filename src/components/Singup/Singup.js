import React from "react";
import "./Singup.css";

const Singup = () => {
  return (
    <div className="sing-up">
      <div className="sing">
      <h2>Sing up</h2>
        <form className="form-input">
       
        <input type="text" placeholder="Username" required />
        <input type="email" name="" id=""  placeholder="Email" required/>
        <input type="password" name="" id=""  placeholder="password" required/>
        <input type="password" name="" id=""  placeholder="Confirm password" required/><br />
        <input type="submit" value="Submit" placeholder="Submit" required />
        </form>
      </div>
    </div>
  );
};

export default Singup;
