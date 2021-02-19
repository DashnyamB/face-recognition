import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import DataList from "../../Components/DataList";
import "./style.scss";
function AdminPanel() {
  return (
    <section style={{ background: "#eee", height: "100vh" }}>
      <div className="columns wrapper" style={{ paddingTop: "5rem" }}>
        <div className="column is-one-quarter" style={{ background: "#fff" }}>
          <aside className="menu">
            <p className="menu-label">Хэрэглэгч</p>
            <ul className="menu-list">
              <li>
                <Link>Хэрэглэгчийн мэдээлэл</Link>
              </li>
            </ul>
            <p className="menu-label">Мэдээллийн тухай</p>
            <ul className="menu-list">
              <li>
                <Link to="/panel">Мэдээлэл</Link>
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

export default AdminPanel;
