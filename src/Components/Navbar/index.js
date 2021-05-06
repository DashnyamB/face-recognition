import React, { useEffect } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import * as actions from "../../redux/actions/CoolMenuAction";
import "./style.scss";
import { connect } from "react-redux";
import HamburgerMenu from "../HamburgerMenu";

function Navbar(props) {
  function showCoolMenu() {
    props.toggleCoolMenu();
  }
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    const navbarBreakPoint = 300;
    let currentY;
    if (navbar) {
      window.addEventListener("scroll", () => {
        navbar.style.backgroundColor = `rgba(236, 0, 146, ${window.scrollY / navbarBreakPoint
          })`;
        navbar.classList.toggle(
          "navbar--hide",
          window.scrollY > navbarBreakPoint
        );

        navbar.addEventListener("mouseover", () => {
          if (window.scrollY) {
            navbar.classList.remove("navbar--hide");
          }
        });
        navbar.addEventListener("mouseout", () => {
          if (window.scrollY > navbarBreakPoint) {
            navbar.classList.add("navbar--hide");
          }
        });

        if (window.scrollY < currentY) {
          navbar.classList.remove("navbar--hide");
        }
        currentY = window.scrollY;
      });
    }
    return () => {
      window.removeEventListener("scroll", () => { });
      if (navbar) {
        navbar.removeEventListener("mouseout", () => { });
        navbar.removeEventListener("mouseover", () => { });
      }
    };
  }, []);
  return (
    <nav className="navbar active wrapper">
      <Logo />
      <div className="navbar__content">
        <Menu refProp={props.refProp} references={props.references} />
        <div className="navbar__content__ham">
          <HamburgerMenu onClick={showCoolMenu} />
          {/* <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#fff", fontSize: "1.5rem" }}
            onClick={showCoolMenu}
          /> */}
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
