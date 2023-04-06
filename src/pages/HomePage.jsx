import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Link to={"/facts"} className="button-link">
      Click here!
    </Link>
  );
};

export default HomePage;
