import { lazy } from "react";

export interface RouteInfo {
  id: string;
  name: string;
  path: string;
  component?: any;
  children?: RouteInfo[];
}

const ReactLazyPreload = (importStatement: any) => {
  const Component: any = lazy(importStatement);
  Component.preload = importStatement;
  return Component;
};

// preload pages examples
const FAQ = ReactLazyPreload(() => import("./pages/faq/Faq"));

export const siteRoutes: RouteInfo[] = [
  {
    id: "FAQ",
    name: "FAQ",
    path: "/faq",
    component: FAQ,
  },
];
