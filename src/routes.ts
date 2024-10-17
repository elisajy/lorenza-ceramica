import React from "react";

export interface RouteInfo {
  id: string;
  name: string;
  path: string;
  component?: any;
  children?: RouteInfo[];
}

const ReactLazyPreload = (importStatement: any) => {
  const Component: any = React.lazy(importStatement);
  Component.preload = importStatement;
  return Component;
};

//preload pages examples
// const ChangePassword = ReactLazyPreload(
//   () => import("./pages/settings/change-password/ChangePassword")
// );

export const siteRoutes: RouteInfo[] = [
//   {
//     id: "ChangePassword",
//     name: "ChangePassword",
//     path: "/settings/change-password",
//     component: ChangePassword,
//   },
];
