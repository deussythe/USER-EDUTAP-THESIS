import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
    index("routes/login-page.tsx"),
    route("/reset-password", "routes/reset-password.tsx"),
    route("/parent-dashboard", "routes/parent-dashboard.tsx"),
] satisfies RouteConfig;