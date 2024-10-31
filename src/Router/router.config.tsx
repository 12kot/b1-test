import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

import { HomeLazy } from "pages";

export enum EPermissions {
  AUTH_NOT_REQUIRED = "no_auth",
}

export enum APP_ROUTES {
  HOME = "/",
  NOT_FOUND = "/404",
  ALL = "*",
}

export interface IRoute {
  element: ReactElement;
  permissions: EPermissions[];
}

export interface INestedRoute {
  element: ReactElement;
}

export type TRoutes = Record<string, IRoute>;

export const routes: TRoutes = {
  [APP_ROUTES.HOME]: {
    element: <HomeLazy />,
    permissions: [EPermissions.AUTH_NOT_REQUIRED],
  },

  [APP_ROUTES.NOT_FOUND]: {
    element: <></>,
    permissions: [EPermissions.AUTH_NOT_REQUIRED],
  },

  [APP_ROUTES.ALL]: {
    element: <Navigate to={APP_ROUTES.NOT_FOUND} />,
    permissions: [EPermissions.AUTH_NOT_REQUIRED],
  },
};
