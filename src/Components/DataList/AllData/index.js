import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import AllDataItem from "../AllDataItem";
import "./styles.scss";
const AllData = (props) => {
  const [datas, setData] = useState([]);
  useEffect(() => {
    db.collection("filters").onSnapshot((snapshot) => {
      setData(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
    console.log(datas);
  }, [datas]);
  return (
    <div className="all-data">
      <ul className="all-data__ul">
        {datas.map(({ id, data }) => (
          <AllDataItem key={id} id={id} data={data} />
        ))}
      </ul>
    </div>
  );
};

export default AllData;
