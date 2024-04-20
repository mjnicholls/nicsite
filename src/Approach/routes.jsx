import React, { lazy } from "react";

// export lazy route
const Approach = lazy(() => import("./Approach"));

const APPROACH_ROUTE = [
  {
    path: "/my-approach",
    element: React.createElement(Approach),
  },
];

export default APPROACH_ROUTE;





