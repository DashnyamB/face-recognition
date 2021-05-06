import React from 'react'
import { connect } from 'react-redux'
import HamburgerMenu from '../HamburgerMenu'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faCaretDown } from "@fortawesome/free-solid-svg-icons"
import Logo from "../Navbar/Logo"
import * as actions from "../../redux/actions/CoolMenuAction"
import "./style.scss"

const MobileMenu = (props) => {
    const toggleMobileMenu = () => {
        props.toggleMobileMenu();
    };
    return (
        <div className={`mobileMenu ${props.mobileMenuShow && "mobileMenu--show"}`}>
            <div className="mobileMenu--top">
                <Logo />
                <div className="mobileMenu--top--exit-icon">
                    <FontAwesomeIcon
                        onClick={toggleMobileMenu}
                        icon={faTimes}
                        style={{ color: "#fff", fontSize: "1.8rem" }}
                    />
                </div>
            </div>
            <div className="mobileMenu--content">
                <a href="/">HOME</a>
                <a href="/filters">FILTERS</a>
                <a href="/">SERVICE</a>
                <a href="/">TEAM</a>
            </div>
            <div className="mobileMenu-contact">
                <div className="mobileMenu--contact--location">
                    <p>
                        National University Mongolia, ikh surguuliin gudamj, baga toiruu, Sukhbaatar district
                </p>
                </div>
                <hr></hr>
                <div className="mobileMenu--contact--phone">
                    <p>Email: teamone@facereco.com</p>
                    <p>Phone: +976 91990388</p>
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        mobileMenuShow: state.coolMenuReducer.mobileMenuShow,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleMobileMenu: () => dispatch(actions.toggleMobileMenuShow())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenu)
