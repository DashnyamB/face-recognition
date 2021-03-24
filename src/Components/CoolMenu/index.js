import React from "react";
import { connect } from "react-redux";
import "./style.scss";
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
    cont.addEventListener("mousemove", (e) => {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 26;
      //let yAxis = (window.innerHeight / 2 - e.pageY) / 26;
      card.style.transform = `rotateY(${xAxis}deg)`;
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
        <div className="containz--cool"></div>
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
