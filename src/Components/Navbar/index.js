import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import "./style.scss";

export default function index() {
  return (
    <nav className="navbar active">
      <Logo />
      <Menu />
    </nav>
  );
}
