import { Link } from "react-router-dom";

interface IRouteLink {
  route: string;
  name: string;
}
const routes: IRouteLink[] = [
  { name: "Dropdowns", route: "/react/components/dropdown" },
  { name: "Text Fields", route: "/react/components/textfields" },
  { name: "Toggles", route: "/react/components/toggles" },
  { name: "Tables", route: "/react/components/tables" },
];
export const Sidebar = () => (
  <nav className="sidebar">
    <h1 className="sidebar__title">Components</h1>
    <ol className="sidebar__list">
      {routes.map((route: IRouteLink) => (
        <li className="sidebar__list-item" key={route.name}>
          <Link to={route.route}>{route.name}</Link>
        </li>
      ))}
    </ol>
  </nav>
);
