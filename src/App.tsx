import { Switch, Route, Router, Link } from "react-router-dom";
import { Button } from "./Button";
import { HelloWorld } from "./pages/HelloWorld";
import "./scss/.Global.scss";
import "open-iconic/font/css/open-iconic.scss";


const helloReact = () => <div>Hello React!</div>;

export default ({ history }: any) => {
  return (
    <div>
      <Router history={history}>
        <br />
        <Link to="/react">Say hello to React!</Link>
        <br />
        <Link to="/">Say hello to the World!</Link>
        <Switch>
          <Route path="/react" component={helloReact} />
          <Route path="/" component={HelloWorld} />
        </Switch>
      </Router>
    </div>
  );
};
