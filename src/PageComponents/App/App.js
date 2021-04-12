import { Route, Switch } from "react-router-dom";
import LoginPage from "../LoginPage";
import AdminPanel from "../AdminPanel";
import HomePage from "../HomePage";
import ForgotPassword from "../ForgotPasswordPage";
import "./style.scss";
import { useEffect } from "react";
import fire from "../../firebase";
import * as actions from "../../redux/actions/LoginRegisterAction";
import { connect } from "react-redux";
import FiltersPage from "../FiltersPage";
import FilterPage from "../FilterPage";

function App(props) {
  useEffect(async () => {
    await fire.auth().onAuthStateChanged(function (user) {
      if (user) {
        props.autoLogin(user);
      }
    });

    return () => {
      const userData = {};
      props.autoLogin(userData);
    };
  }, []);
  return (
    <div className="app">
      <Switch>
        <Route path="/panel" component={AdminPanel} />
        <Route path="/login" component={LoginPage} />
        <Route path="/filters/:id" component={FilterPage} />
        <Route path="/filters" component={FiltersPage} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: (userData) => dispatch(actions.loginSuccess(userData)),
  };
};
export default connect(null, mapDispatchToProps)(App);
