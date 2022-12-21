import React from "react";
import { Link } from "react-router-dom";

const Links = [
  { to: "/", text: "Home Page" },
  { to: "/Aboutus", text: "Aboutus Page" },
  { to: "/Contactus", text: "Contactus Page" },
  { to: "/Service", text: "Service Page" },
];

const Navs = () => {
  return (
    <div>
      <ul>
        {Links.map((item) => (
          <li key={item.to}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navs;
