import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./generated/routeTree.gen";

export function createAppRouter() {
  return createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultPendingElement: <div>Loading...</div>,
  });
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createAppRouter>;
  }
}
