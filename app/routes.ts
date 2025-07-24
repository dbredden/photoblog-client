import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  layout("layouts/navbar.tsx", [
    index("routes/home.tsx"),
    route("contact", "routes/contact.tsx")
  ])
] satisfies RouteConfig;
