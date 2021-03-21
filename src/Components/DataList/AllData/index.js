import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import AllDataItem from "../AllDataItem";
const AllData = (props) => {
  const [datas, setData] = useState([]);
  useEffect(() => {
    db.collection("filters").onSnapshot((snapshot) => {
      setData(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, [datas]);

  const toAdd = () => {
    props.history.push("/panel/add");
  };
  return (
    <div className="all-data" style={{ textAlign: "left" }}>
      <div className="buttons">
        <button onClick={toAdd} className="button is-primary">
          нэмэх
        </button>
      </div>
      <table className="table is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Мэдээллийн нэр</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data) => {
            return <AllDataItem name={data.data.name} id={data.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllData;
