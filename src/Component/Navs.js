import React from "react";

import { LinkStyled, NavList } from "./Navs.styled";
import { useLocation } from "react-router-dom";
const Links = [
  { to: "/box-office", text: "Home Page" },
  { to: "/Starred", text: "Starred page" },
];

const Navs = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <NavList>
        {Links.map((item) => (
          <li key={item.to}>
            <LinkStyled
              to={item.to}
              className={item.to === location.pathname ? "active" : ""}
            >
              {item.text}{" "}
            </LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
};

export default Navs;
