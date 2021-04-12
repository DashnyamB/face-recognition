import React from "react";
import { connect } from "react-redux";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import DataList from "../../Components/DataList";
import "./style.scss";
function AdminPanel(props) {
  return (
    <section style={{ background: "#eee", height: "100vh" }}>
      {!props.userId ? <Redirect to="/" /> : ""}
      <div className="columns wrapper" style={{ paddingTop: "5rem" }}>
        <div className="column is-one-quarter" style={{ background: "#fff" }}>
          <aside className="menu">
            <p className="menu-label">Хэрэглэгч</p>
            <ul className="menu-list">
              <li>
                <Link to="/panel/user">Хэрэглэгчийн мэдээлэл</Link>
              </li>
            </ul>
            <p className="menu-label">Мэдээллийн тухай</p>
            <ul className="menu-list">
              <li>
                <Link to="/panel">Филтер</Link>
              </li>
            </ul>
          </aside>
        </div>
        <div
          className="column"
          style={{ background: "#fff", marginLeft: "1rem" }}
        >
          <DataList />
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    userId: state.LoginRegisterReducer.user.uid,
  };
};
export default connect(mapStateToProps)(AdminPanel);
