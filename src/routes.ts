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
const AboutUs = ReactLazyPreload(() => import("./pages/about-us/AboutUs"));
const Inspirations = ReactLazyPreload(
  () => import("./pages/inspirations/Inspirations")
);
const InspirationsArticle = ReactLazyPreload(
  () => import("./pages/inspirations/InspirationsLayout")
);
const ShowroomLaunched = ReactLazyPreload(
  () => import("./pages/inspirations/contents/ShowroomLaunched")
);
const BathroomTiles = ReactLazyPreload(
  () => import("./pages/inspirations/contents/BathroomTiles")
);
const CeramicPorcelain = ReactLazyPreload(
  () => import("./pages/inspirations/contents/CeramicPorcelain")
);
const KitchenRenovationIdeas = ReactLazyPreload(
  () => import("./pages/inspirations/contents/KitchenRenovationIdeas")
);
const BathroomRemodel = ReactLazyPreload(
  () => import("./pages/inspirations/contents/BathroomRemodel")
);
const KitchenFlooring = ReactLazyPreload(
  () => import("./pages/inspirations/contents/KitchenFlooring")
);
const KitchenCountertops = ReactLazyPreload(
  () => import("./pages/inspirations/contents/KitchenCountertops")
);
const Projects = ReactLazyPreload(
  () => import("./pages/projects/Projects")
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
        path: ":category/:name/:code",
        component: PrdItemDetail,
      },
      {
        id: "PRODUCTS-ITEM",
        name: "Product Item",
        path: ":category/:subcategory/:name/:code",
        component: PrdItemDetail,
      },
    ],
  },
  {
    id: "AboutUs",
    name: "AboutUs",
    path: "/about-us",
    component: AboutUs,
  },
  {
    id: "Inspirations",
    name: "Inspirations",
    path: "/inspirations",
    component: Inspirations,
  },
  {
    id: "InspirationsArticle",
    name: "InspirationsArticle",
    path: "/inspirations/article",
    component: InspirationsArticle,
    children: [
      {
        id: "ShowroomLaunched",
        name: "ShowroomLaunched",
        path: "weve-launched-our-new-showroom",
        component: ShowroomLaunched,
      },
      {
        id: "BathroomTiles",
        name: "BathroomTiles",
        path: "5-things-to-consider-when-choosing-bathroom-tiles-for-malaysian-homes",
        component: BathroomTiles,
      },
      {
        id: "CeramicPorcelain",
        name: "CeramicPorcelain",
        path: "ceramic-vs-porcelain-which-one-should-i-choose-for-my-malaysian-home",
        component: CeramicPorcelain,
      },
      {
        id: "KitchenRenovationIdeas",
        name: "KitchenRenovationIdeas",
        path: "7-inexpensive-ideas-to-renovate-your-malaysian-kitchen",
        component: KitchenRenovationIdeas,
      },
      {
        id: "BathroomRemodel",
        name: "BathroomRemodel",
        path: "8-simple-ideas-for-your-next-bathroom-remodel-in-malaysia",
        component: BathroomRemodel,
      },
      {
        id: "KitchenFlooring",
        name: "KitchenFlooring",
        path: "3-affordable-options-for-kitchen-flooring-in-malaysia",
        component: KitchenFlooring,
      },
      {
        id: "KitchenCountertops",
        name: "KitchenCountertops",
        path: "3-options-for-kitchen-countertops",
        component: KitchenCountertops,
      },
    ]
  },
  {
    id: "Projects",
    name: "Projects",
    path: "/projects",
    component: Projects,
  },
];
