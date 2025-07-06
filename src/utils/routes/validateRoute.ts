import { FrontendRouteTargets } from "@/constants/routes/Frontend";
import { NextRequest, NextResponse } from "next/server";

/**
 * Checks if a current path matches any of the routes in the provided array
 * Handles both static routes and dynamic routes with parameters
 */
export const isPathMatchingRoutes = (
  currentPath: string,
  routes: Array<FrontendRouteTargets>,
): boolean => {
  return routes.some((route) => {
    const routePath = route.toString();

    // Handle dynamic routes with parameters (e.g., /company/{companyId})
    if (routePath.includes("{")) {
      // Convert route pattern to regex pattern
      const regexPattern = routePath
        .replace(/{[^}]+}/g, "[^/]+") // Replace {param} with regex pattern
        .replace(/\//g, "\\/"); // Escape forward slashes

      const regex = new RegExp(`^${regexPattern}$`);
      return regex.test(currentPath);
    }

    // Handle static routes
    return currentPath === routePath || currentPath.startsWith(routePath + "/");
  });
};

/**
 * Interface for route access rules
 */
export interface RouteAccessRule {
  routeType: string; // e.g., 'user', 'admin', 'company'
  allowedRoles: Array<string>; // e.g., ['user'], ['admin'], ['company']
}

/**
 * Validates if a user has access to a route based on their role and defined access rules
 * @param userRole - The user's role
 * @param routeRules - Array of route access rules defining which roles can access which route types
 * @param routeTypes - Array of route types that the current route belongs to
 * @returns boolean indicating if the user has access
 */
export const validateRoleAccess = (
  userRole: string,
  routeRules: Array<RouteAccessRule>,
  routeTypes: Array<string>,
): boolean => {
  // If no route types are specified, allow access
  if (routeTypes.length === 0) return true;

  // Find all rules that apply to the current route types
  const applicableRules = routeRules.filter((rule) =>
    routeTypes.includes(rule.routeType),
  );

  // If no rules are found for the route types, deny access
  if (applicableRules.length === 0) return false;

  // Check if the user's role is allowed by any of the applicable rules
  return applicableRules.some((rule) => rule.allowedRoles.includes(userRole));
};

/**
 * Handles role-based redirects for protected routes
 * @param userRole - The user's role
 * @param routeRules - Array of route access rules
 * @param routeTypes - Array of route types that the current route belongs to
 * @param req - The NextRequest object
 * @param redirectRoute - The route to redirect to if access is denied
 * @returns NextResponse with redirect or null if access is allowed
 */
export const handleRoleBasedRedirect = (
  userRole: string,
  routeRules: Array<RouteAccessRule>,
  routeTypes: Array<string>,
  req: NextRequest,
  redirectRoute: string,
): NextResponse | null => {
  if (!validateRoleAccess(userRole, routeRules, routeTypes)) {
    return NextResponse.redirect(new URL(redirectRoute, req.url));
  }
  return null;
};
