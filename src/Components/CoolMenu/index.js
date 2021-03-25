import React from "react";
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
  const card = document.querySelector(".containz--cool");
  const cont = document.querySelector(".containz");
  if (cont && card) {
    //Moving animation event
    cont.addEventListener("mousemove", (e) => {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
      let yAxis = (window.innerHeight / 2 - e.pageY) / 30;
      card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    //Animate in
    cont.addEventListener("mouseenter", (e) => {
      card.style.transition = "none";
    });
    //Animate out
    cont.addEventListener("mouseleave", (e) => {
      card.style.transition = "all 0.5s ease";
      card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
  }

  return (
    <div className={`cool-menu ${props.show ? "cool-menu--show" : ""}`}>
      <FontAwesomeIcon
        onClick={toggleCoolMenu}
        icon={faTimes}
        style={{ color: "#fff", fontSize: "1.5rem" }}
        className="x"
      />
      <div className="containz">
        <div
          className="containz--cool"
          style={{
            backgroundImage: `url("${bimg}")`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="left--info">
            <div className="left--info--email">
              <div>-EMAIL</div>
              <div className="left--info--email--small">info@MATRIX.com</div>
            </div>
            <div className="left--info--phone">
              <div>-PHONE</div>
              <div className="left--info--phone--small">123456789</div>
            </div>
            <div className="left--info--location">
              <div>-ULAANBAATAR</div>
              <div className="left--info--location--small">
                Han-Uul 3-r khoroo
              </div>
              <div className="left--info--location--small">
                Uildverchnii gudamj
              </div>
            </div>
          </div>
          <div className="right--info">
            <div className="right--info--bigone">HOME</div>
            <div className="right--info--bigone">SERVICES</div>
            <div className="right--info--bigone">TEAM</div>
            <div className="right--info--bigone">CONTACT US</div>
            <div className="right--info--smallone">instagram</div>
            <div className="right--info--smallone">twitter</div>
            <div className="right--info--smallone">facebook</div>
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
