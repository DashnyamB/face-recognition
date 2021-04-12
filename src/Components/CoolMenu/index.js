import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./style.scss";
import bimg from "../../assets/image/cool-menu-background-2560x1600.jpg";
import * as actions from "../../redux/actions/CoolMenuAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCaretDown } from "@fortawesome/free-solid-svg-icons";
const CoolMenu = (props) => {
  const toggleCoolMenu = () => {
    props.toggleCoolMenu();
  };

  useEffect(() => {
    const body = document.body;
    const scrollY = document.documentElement.style.getPropertyValue(
      "--scroll-y"
    );
    if (props.show) {
      body.style.position = "fixed";

      body.style.top = `-${scrollY}`;
    } else {
      body.style.position = "";
      body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
    window.addEventListener("scroll", () => {
      document.documentElement.style.setProperty(
        "--scroll-y",
        `${window.scrollY}px`
      );
    });
    const container = document.querySelector(".cool-menu__wrapper");
    const content = document.querySelector(".cool-menu__content");
    const texts = document.querySelectorAll(".cool-menu__text");
    const icon = document.querySelector(".cool-menu__exit-icon");
    if (container && content && icon && texts) {
      container.addEventListener("mousemove", (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 100;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 100;
        content.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      });
      container.addEventListener("mouseenter", (e) => {
        content.style.transition = "none";
        texts.forEach((text) => {
          text.style.transform = `translateZ(3.5rem)`;
        });
        icon.style.transform = `translateZ(1.5rem)`;
      });
      container.addEventListener("mouseleave", (e) => {
        content.style.transition = "all 0.5s ease";
        content.style.transform = `rotateY(0deg) rotateX(0deg)`;
        texts.forEach((text) => {
          text.style.transform = `translateZ(0)`;
        });
        icon.style.transform = `translateZ(0)`;
      });
    }
  }, [props.show]);

  return (
    <div className={`cool-menu  ${props.show ? "cool-menu--show" : ""}`}>
      <div className="cool-menu__wrapper">
        <div
          className="cool-menu__content"
          style={{ background: `url(${bimg})`, backgroundSize: "cover" }}
        >
          <div className="cool-menu__exit-icon">
            <FontAwesomeIcon
              onClick={toggleCoolMenu}
              icon={faTimes}
              style={{ color: "#fff", fontSize: "1.8rem" }}
            />
          </div>
          <div className="cool-menu__content__contact">
            <div className="cool-menu__content__contact__email">
              <h2 className="cool-menu__text">Email</h2>
              <p className="cool-menu__text">teamone@facereco.com</p>
            </div>
            <div className="cool-menu__content__contact__phone">
              <h2 className="cool-menu__text">Phone</h2>
              <p className="cool-menu__text">+976 99009900</p>
            </div>
          </div>
          <div className="cool-menu__content__menu">
            <h1 className="cool-menu__text">home</h1>
            <h1 className="cool-menu__text">Services</h1>
            <h1 className="cool-menu__text">Team</h1>
            <h1 className="cool-menu__text">Contact us</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    show: state.coolMenuReducer.coolMenuShow,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleCoolMenu: () => dispatch(actions.toggleMenuShow()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoolMenu);
