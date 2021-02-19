import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
function DataDetails(props) {
  const [data, setData] = useState({});

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
  }, []);

  const updateData = () => {
    db.collection("filters")
      .doc(props.match.params.id)
      .set(data)
      .then((res) => {
        props.history.replace("/panel");
      })
      .catch((err) => {
        alert("Шинэчилж чадсангүй");
      });
  };
  const deleteData = () => {
    db.collection("filters")
      .doc(props.match.params.id)
      .delete()
      .then((res) => {
        props.history.replace("/panel");
      })
      .catch((err) => {
        alert("устгаж чадсангүй");
      });
  };
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="columns">
        <div className="column is-one-quarter">
          <figire className="image">
            <img src={data.imgUrl} alt={data.name} />
          </figire>
        </div>
        <div className="column">
          <div className="field">
            <label className="label">Нэр</label>
            <div className="control">
              <input
                className="input is-success"
                name="name"
                onChange={changeHandler}
                type="text"
                value={data.name}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Тайлбар</label>
            <div className="control">
              <textarea
                className="textarea is-success"
                name="desc"
                type="text"
                onChange={changeHandler}
                value={data.desc}
              />
            </div>
          </div>
          <div className="buttons">
            <button onClick={updateData} className="button is-warning">
              Засах
            </button>
            <button onClick={deleteData} className="button is-danger">
              Устгах
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataDetails;
