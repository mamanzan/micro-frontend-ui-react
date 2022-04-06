import { Link } from "react-router-dom";
import "../scss/Sidebar.scss";

interface IRouteLink {
  route: string;
  name: string;
}
const routes: IRouteLink[] = [
  { name: "Dropdowns", route: "/components/dropdown" },
  { name: "Text Fields", route: "/components/textfields" },
  { name: "Toggles", route: "/components/toggles" },
];
export const Sidebar = () => (
  <nav className="sidebar">
    <h1 className="sidebar__title">Components</h1>
    <ol className="sidebar__list">
      {routes.map((route: IRouteLink) => (
        <li className="sidebar__list-item">
          <Link to={route.route}>{route.name}</Link>
        </li>
      ))}
    </ol>
  </nav>
);
