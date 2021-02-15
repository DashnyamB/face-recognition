import { Route, Switch } from "react-router-dom";
import ExploreOurWorks from "../../Components/ExploreOurWorks";
import LoginPage from "../../Components/LoginPage";
import Login from "../../Components/LoginPage";
import AdminPanel from "../AdminPanel";
import HomePage from "../HomePage";
import "./style.scss";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/panel" component={AdminPanel} />
        <Route path="/" exact component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
