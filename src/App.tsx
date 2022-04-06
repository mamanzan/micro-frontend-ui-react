import { Switch, Route, Router, Link } from "react-router-dom";
import { Button } from "./Button";
import { HelloWorld } from "./pages/HelloWorld";
import { Components } from "./pages/Components";
import "open-iconic/font/css/open-iconic.scss";

import { LayoutSidebarMain } from "./components/LayoutSidebarMain";
import { Sidebar } from "./components/Sidebar";
import { Main } from "./pages/Main";
const helloReact = () => <div>Hello React ummm!</div>;

export default ({ history }: any) => {
  return (
    <div>
      <Router history={history}>
        <LayoutSidebarMain
          sidebar={<Sidebar />}
          main={
            <Switch>
              <Route path="/react" component={helloReact} />
              <Route path="/components/:type" component={Components} />
              <Route path="/" component={Main} />
            </Switch>
          }
        />
      </Router>
    </div>
  );
};
