import { getDynamicRoute } from "@/utils/routes/getDynamicRoute";

export enum BackendRouteTargets {}

export const BackendRoutes = getDynamicRoute(BackendRouteTargets);
