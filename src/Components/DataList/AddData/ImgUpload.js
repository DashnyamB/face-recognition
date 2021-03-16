import React, { useState } from "react";
import fire, { db, storage } from "../../../firebase";
import firebase from "firebase";
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
    <div>
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <div className="field">
            <label className="label">Нэр :</label>
            <div className="control">
              <input
                className="input is-primary"
                name="name"
                onChange={handleInfo}
                type="text"
                placeholder="Нэрээ оруулна уу.."
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Мэдээлэлээ оруулна уу :</label>
            <div className="control">
              <textarea
                className="textarea is-primary"
                name="name"
                onChange={handleInfo}
                type="desc"
                placeholder="Мэдээлэлээ оруулна уу  уу.."
              />
            </div>
          </div>
          <div className="file">
            <label className="file-label">
              <input
                className="file-input"
                onChange={changeHandler}
                type="file"
              />
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">Зургаа оруулна уу…</span>
              </span>
            </label>
          </div>
          <div className="buttons" style={{ marginTop: "1rem" }}>
            <button onClick={handleUpload} className="button is-success">
              Нэмэх
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(ImgUpload);
