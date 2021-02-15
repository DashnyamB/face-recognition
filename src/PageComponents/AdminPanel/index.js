import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import DataList from "../../Components/DataList";
import "./style.scss";
function AdminPanel() {
  return (
    <div className="admin-panel wrapper">
      <div className="admin-panel__panel">
        <h1 className="admin-panel__panel__title">
          <Link to="/panel">Хэрэглэгчийн мэдээлэл</Link>
        </h1>
        <div className="admin-panel__panel__user">
          <div className="admin-panel__panel__user__name">Нэр : Dashnyam</div>
          <div className="admin-panel__panel__user__id">ID : 12313212</div>
          <Link to="/panel/add">мэдээлэл нэмэх</Link>
        </div>
      </div>
      <div className="admin-panel__data">
        <DataList />
      </div>
    </div>
  );
}

export default AdminPanel;
