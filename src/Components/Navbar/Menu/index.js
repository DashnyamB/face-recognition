import React, { useState } from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import MenuItem from "../../MenuItem";
import { Link } from "react-router-dom";

export default function Menu() {
  const [menus, setMenu] = useState(["home", "services", "team", "contact us"]);
  return (
    <div className="menuf">
      {menus.map((menu) => {
        return <MenuItem key={menu} text={menu} />;
      })}
      <div className="menuf__icon">
        <Link to="/login">
          <FontAwesomeIcon
            icon={faUser}
            style={{ color: "#fff", fontSize: "1.5rem" }}
          />
        </Link>
      </div>
    </div>
  );
}
