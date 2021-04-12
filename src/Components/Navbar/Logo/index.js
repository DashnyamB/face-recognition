import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
export default function Logo() {
  return (
    <Link to="/">
      <div className="logo">
        <img src="https://firebasestorage.googleapis.com/v0/b/login-c6162.appspot.com/o/Base%20Files%2Flogo-white.png?alt=media&token=761e39e1-8ddd-4d74-8311-3ca42aee0335" />
      </div>
    </Link>
  );
}
