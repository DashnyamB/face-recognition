import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import * as actions from "../../redux/actions/CoolMenuAction";
import "./style.scss";
import { connect } from "react-redux";

function Navbar(props) {
  function showCoolMenu() {
    props.toggleCoolMenu();
  }
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

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCoolMenu: () => dispatch(actions.toggleMenuShow()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
