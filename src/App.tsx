import { Switch, Route, Router, Link } from "react-router-dom";
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
              <Route path="/react/components/:type" component={Components} />
              <Route path="/react" component={Main} />
            </Switch>
          }
        />
      </Router>
    </div>
  );
};
