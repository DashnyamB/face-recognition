import React from "react";
import { connect } from "react-redux";

const User = (props) => {
  return (
    <div className="user">
      <div>Email : {props.user.email}</div>
      <div>ID :{props.user.uid}</div>
      <div>
        {props.user.displayName ? props.user.displayName : "no given username"}
      </div>
      <div>
        Role :
        {props.user.displayName ? props.user.displayName : "no given role"}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.LoginRegisterReducer.user,
  };
};

export default connect(mapStateToProps)(User);
