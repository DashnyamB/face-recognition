import React, { useState } from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import MenuItem from "../../MenuItem";

export default function Menu() {
  const [menus, setMenu] = useState(["home", "services", "team", "contact us"]);
  return (
    <div className="menuf">
      <div className="menuf__icon">
        <FontAwesomeIcon icon={faUser} />
      </div>
      {menus.map((menu) => {
        return <MenuItem key={menu} text={menu} />;
      })}
    </div>
  );
}
