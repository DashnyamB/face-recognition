import React from "react";
import { Link } from "react-router-dom";

function AllDataItem(props) {
  return (
    <tr>
      <td>
        <Link to={`/panel/post/${props.id}`}>{props.name}</Link>
      </td>
    </tr>
  );
}

export default AllDataItem;
