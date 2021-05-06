import React, { useState } from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import MenuItem from "../../MenuItem";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions/LogOutActions";

function Menu(props) {
  const [menus, setMenu] = useState(["services", "team"]);
  const handleLogout = () => {
    props.logout();
  };
  return (
    <div className="menuf">
      {console.log(props.references)}
      <MenuItem path="/" text="home" />
      {menus.map((menu) => {
        return <MenuItem key={menu} text={menu} references={props.references[menu]} />;
      })}
      {props.userId ? <MenuItem path="/panel" text="Dashboard" /> : ""}

      {!props.userId ? (
        <div className="menuf__icon">
          <Link to="/login">
            <FontAwesomeIcon
              icon={faUser}
              style={{ color: "#fff", fontSize: "1.5rem" }}
            />
          </Link>
        </div>
      ) : (
        <MenuItem text="logout" onClick={handleLogout} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userId: state.LoginRegisterReducer.user.uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
