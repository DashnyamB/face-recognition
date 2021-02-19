import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import "./style.scss";
function DataDetails(props) {
  const [data, setData] = useState({
    desc: "",
    name: "",
    imgUrl: null,
  });

  useEffect(() => {
    const item = db.collection("filters").doc(props.match.params.id);
    item
      .get()
      .then((res) => {
        if (res.exists) setData(res.data());
        else console.log("There is no document");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);

  return (
    <div className="data-details">
      <figure>
        <img src={data.imgUrl} />
      </figure>
      <div className="data-details__info">
        <div className="data-details__info__name">
          <h3>Гарчиг : </h3> {data.name}
        </div>
        <div className="data-details__info__desc">
          <h3>Дэлгэрэнгүй : </h3> {data.desc}
        </div>
      </div>
    </div>
  );
}

export default DataDetails;
