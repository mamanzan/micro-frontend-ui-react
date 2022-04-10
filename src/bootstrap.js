import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createBrowserHistory } from "history";

<<<<<<< HEAD
//TODO: Somehow check if the styles are already existent so that they
//are not duplicated by the below include when running under the
//container.
//import "styles/dist/main";
=======
//Import styles from the remote,  doesn't look like this duplicates
//the styles per framework
import "styles/StylesApp";
>>>>>>> updates

const mount = (el) => {
  const history = createBrowserHistory();

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#hello-react-dev-app");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
