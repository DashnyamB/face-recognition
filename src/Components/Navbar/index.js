import React, { useEffect } from "react";
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
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      window.addEventListener("scroll", () => {
        console.log(navbar.children);
        if (window.scrollY > 100) {
          for (let i = 0; i < navbar.children.length; i++) {
            navbar.children.item(i).style.display = "none";
          }
        } else {
          for (let i = 0; i < navbar.children.length; i++) {
            navbar.children.item(i).style.display = "flex";
          }
        }
        navbar.style.backgroundColor = `rgba(236, 0, 146, ${
          window.scrollY / 150
        })`;
        navbar.classList.toggle("navbar--hide", window.scrollY > 150);
      });
    }
    return () => {};
  }, []);
  return (
    <nav className="navbar active wrapper">
      <Logo />
      <div className="navbar__content">
        <Menu />
        <div className="navbar__content__ham">
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#fff", fontSize: "1.5rem" }}
            onClick={showCoolMenu}
          />
        </div>
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
