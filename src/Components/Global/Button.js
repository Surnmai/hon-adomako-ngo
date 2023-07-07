import React from "react";
import { Link } from "react-router-dom";

const Button = ({ name, path, target }) => {
  return (
    <Link to={path} target={target} className="btn">
      {name}
    </Link>
  );
};

export default Button;
