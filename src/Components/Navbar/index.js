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
    const navbarBreakPoint = 300;
    let currentY;
    if (navbar) {
      window.addEventListener("scroll", () => {
        navbar.style.backgroundColor = `rgba(236, 0, 146, ${
          window.scrollY / navbarBreakPoint === 0
            ? 0.1
            : window.scrollY / navbarBreakPoint
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

        console.log(currentY, "===", window.scrollY);
        if (window.scrollY < currentY) {
          navbar.classList.remove("navbar--hide");
        }
        currentY = window.scrollY;
      });
    }
    return () => {
      window.removeEventListener("scroll");
      if (navbar) {
        navbar.removeEventListener("mouseout");
        navbar.removeEventListener("mouseover");
      }
    };
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
