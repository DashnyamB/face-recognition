import React, { useState } from "react";
import fire, { db, storage } from "../../../firebase";
import firebase from "firebase";
import Button from "../../Button";
import css from "./style.module.scss";
import { withRouter } from "react-router-dom";
function ImgUpload(props) {
  const [data, setData] = useState({
    name: null,
    desc: null,
  });
  const [img, setImg] = useState(null);
  const [progress, setProgress] = useState(0);
  const changeHandler = (e) => {
    if (e.target.files[0]) {
      setImg(e.target.files[0]);
    }
  };
  const handleUpload = (e) => {
    const uploadTask = storage.ref(`images/${img.name}`).put(img);

    uploadTask.on(
      "state changed",
      (snapshot) => {
        // progress function
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (err) => {
        console.log(err);
      },
      () => {
        //   complete
        storage
          .ref(`images`)
          .child(img.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("filters").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              name: data.name,
              desc: data.desc,
              imgUrl: url,
            });

            props.history.replace("/panel");
          });
      }
    );
  };
  const handleInfo = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className={css.Add}>
      <input
        type="text"
        name="name"
        placeholder="нэрээ оруулна уу"
        onChange={handleInfo}
      />
      <textarea
        type="text"
        name="desc"
        placeholder="нэрээ оруулна уу"
        onChange={handleInfo}
      />
      <input type="file" onChange={changeHandler} />
      <Button text="нийтлэх" onClick={handleUpload} />
    </div>
  );
}

export default withRouter(ImgUpload);
