import React from "react";
import ErrorImg from "../images/error.png";

export default function Error() {
  return (
    <div className="wrapper">
      <h2>Error 404: Contact Page Not Found!</h2>
      <h5>Contact Elon Musk for help &#128514;</h5>
      <div className="error">
        <img src={ErrorImg} alt="" />
      </div>
    </div>
  );
}
