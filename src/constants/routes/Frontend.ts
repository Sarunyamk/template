import { getDynamicRoute } from "@/utils/routes/getDynamicRoute";

export enum FrontendRouteTargets {}

export const FrontendRoutes = getDynamicRoute(FrontendRouteTargets);
