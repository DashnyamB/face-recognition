import React, { useRef, useEffect } from "react";
import "./style.scss";
const Footer = (props) => {
  useEffect(() => {
    if (props.refHandler)
      props.refHandler(footerRef, "footer")
  }, [])
  const footerRef = useRef()
  return (
    <footer className="footer wrapper" ref={footerRef}>
      <div className="footer__content">
        <h1>WE HAVE MATRIX</h1>
        <h3>Ulaanbaatar</h3>
        <p>
          National University Mongolia, ikh surguuliin gudamj, baga toiruu,
          Sukhbaatar district
        </p>
      </div>
    </footer>
  );
};

export default Footer;
