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
const Products = ReactLazyPreload(() => import("./pages/products/Products"));
const PrdCategoryPage = ReactLazyPreload(
  () => import("./pages/products/ProductCategory")
);
const PrdItemDetail = ReactLazyPreload(
  () => import("./pages/products/ProductDetails")
);

export const siteRoutes: RouteInfo[] = [
  {
    id: "FAQ",
    name: "FAQ",
    path: "/faq",
    component: FAQ,
  },
  {
    id: "PRODUCTS",
    name: "Products",
    path: "/products",
    component: Products,
    children: [
      {
        id: "PRODUCTS-CATEGORY",
        name: "Product Category",
        path: ":category",
        component: PrdCategoryPage,
      },
      {
        id: "PRODUCTS-ITEM",
        name: "Product Item",
        path: ":category/:subcategory",
        component: PrdCategoryPage,
      },
      {
        id: "PRODUCTS-ITEM",
        name: "Product Item",
        path: ":category/:subcategory/:code",
        component: PrdItemDetail,
      },
    ],
  },
  {
    id: "PRODUCTS",
    name: "Product Categories",
    path: "/products/:category/:id",
    component: Products,
  },
];
