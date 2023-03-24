import React from "react";
import { Link } from "react-router-dom";

const Button = ({ name, path }) => {
  return (
    <Link to={path} className="btn">
      {name}
    </Link>
  );
};

export default Button;
