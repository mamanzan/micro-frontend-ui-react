import { Link } from "react-router-dom";

interface IRouteLink {
  route: string;
  name: string;
}
const routes: IRouteLink[] = [
  { name: "Dropdowns", route: "/react/components/dropdowns" },
  { name: "Text Fields", route: "/react/components/textfields" },
  { name: "Toggles", route: "/react/components/toggles" },
  { name: "Tables", route: "/react/components/tables" },
  { name: "Highcharts", route: "/react/components/highcharts" },
  { name: "ECharts", route: "/react/components/echarts" },
  { name: "Sandbox", route: "/react/components/sandbox" },
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
