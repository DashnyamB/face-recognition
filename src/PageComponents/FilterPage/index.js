import React from "react";
import Logo from "../../Components/Navbar/Logo";
import "./style.scss";
const FilterPage = (props) => {
  console.log(props.match.params.id);
  return (
    <section className="filter-page">
      <div className="filter-page__container">
        <div className="filter-page__logo">
          <Logo />
        </div>
        <div className="filter-page__content">
          <div className="filter-page__content__description">
            <div className="filter-page__content__description__text">
              ldsal;dkl;akf;kla;skdasdjashdjkhasjkdhsadkjasdsdjkahduiwqydsjka
            </div>
            <div className="filter-page__content__description__sep"></div>
            <div className="filter-page__content__description__name">
              #TEAMMATRIX
            </div>
          </div>
          <div className="filter-page__content__video"></div>
        </div>
      </div>
    </section>
  );
};

export default FilterPage;
