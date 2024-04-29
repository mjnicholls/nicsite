import React, { lazy } from "react";

// export lazy route
const Home = lazy(() => import("./Home"));

const HOME_ROUTE = [
  {
    path: "/",
    element: React.createElement(Home),
  },
];


export default HOME_ROUTE;





