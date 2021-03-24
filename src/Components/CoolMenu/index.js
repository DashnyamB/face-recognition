import React from "react";
import { connect } from "react-redux";
import "./style.scss";
import * as actions from "../../redux/actions/CoolMenuAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";
const CoolMenu = (props) => {
  const toggleCoolMenu = () => {
    props.toggleCoolMenu();
  };
  return (
    <div className={`cool-menu ${props.show ? "cool-menu--show" : ""}`}>
      <FontAwesomeIcon onClick={toggleCoolMenu} icon={faAdjust} color="#fff" />
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
