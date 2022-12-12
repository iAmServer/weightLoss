import Main from "../pages/Main";
import History from "../pages/History";
import Activity from "../pages/Activity";

const routes = [
  {
    path: "/",
    component: Main,
    exact: true,
  },
  {
    path: "/history",
    component: History,
    exact: true,
  },
  {
    path: "/activity",
    component: Activity,
    exact: true,
  },
];

export default routes;
