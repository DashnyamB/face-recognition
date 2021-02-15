import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function AllDataItem(props) {
  return (
    <li className="all-data-item">
      <Link to={`/panel/${props.id}`}>
        <div className="all-data-item__name">Нэр: {props.data.name}</div>
      </Link>
    </li>
  );
}

export default AllDataItem;
