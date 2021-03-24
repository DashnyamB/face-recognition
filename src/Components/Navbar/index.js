import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

function Navbar() {
  function showCoolMenu() {}
  return (
    <nav className="navbar active wrapper">
      <Logo />
      <div className="navbar__content">
        <Menu />
        <FontAwesomeIcon
          icon={faBars}
          style={{ color: "#fff", fontSize: "1.5rem" }}
          onClick={showCoolMenu}
        />
      </div>
    </nav>
  );
}
const mapStateToProps = (state) => {
  return {
    coolMenuShow: state.coolMenuReducer.coolMenuShow,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
