import React from "react";
import { Route, Switch } from "react-router-dom";
import AddData from "./AddData";
import AllData from "./AllData";
import DataDetails from "./DataDetails";
import "./styles.scss";
function DataList() {
  return (
    <div className="data-list">
      <h1 className="subtitle">Мэдээллүүд</h1>
      <div className="data-list__title">
        <Switch>
          <Route path="/panel/add" exact component={AddData} />
          <Route path="/panel/post/:id" component={DataDetails} />
          <Route path="/panel" component={AllData} />
        </Switch>
      </div>
    </div>
  );
}

export default DataList;
