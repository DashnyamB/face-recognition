import React, { useEffect } from "react";
import Logo from "../../Components/Navbar/Logo";
import vid from "../../assets/video/Filterpage.mp4";
import "./style.scss";
import { useState } from "react/cjs/react.development";
const FilterPage = (props) => {
  console.log(props.match.params.id);
  const [width, setWidth] = useState(720);
  const [height, setHeight] = useState(560);
  useEffect(() => {
    const videoContaiter = document.querySelector(
      ".filtera-page__content__video"
    );

    // window.addEventListener("resize", () => {});
    function aa() {
      setWidth(window.innerWidth);
    }
    window.onresize = aa;

    if (videoContaiter) {
      if (window.innerWidth < 520) {
        videoContaiter.style.width = `${
          window.innerWidth - window.innerWidth / 3
        }px`;
        videoContaiter.style.height = `${
          (window.innerWidth - window.innerWidth / 3) * 2
        }px`;
      } else if (window.innerWidth > 1200) {
        videoContaiter.style.width = `${
          window.innerWidth / 2 - window.innerWidth / 5
        }px`;
        videoContaiter.style.height = `${
          (window.innerWidth / 2 - window.innerWidth / 5) * 1.2
        }px`;
      }
    }
  }, [width]);
  return (
    <section className="filtera-page">
      <div className="filtera-page__container">
        <div className="filtera-page__logo">
          <Logo />
        </div>

        <div className="filtera-page__content">
          <div className="filtera-page__content__description">
            <div className="filtera-page__content__description__text">
              ldsal;dkl;akf;kla;skdasdjashdjkhasjkdhsadkjasdsdjkahduiwqydsjka
            </div>
            <div className="filtera-page__content__description__sep"></div>
            <div className="filtera-page__content__description__name">
              #TEAMMATRIX
            </div>
          </div>
          <div className="filtera-page__content__video">
            <video
              style={{ backgroundColor: "green" }}
              className="filtera__video"
              width={width}
              height={height}
              autoPlay={true}
              muted
            >
              <source src={vid}></source>
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterPage;
