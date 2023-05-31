import { type RouteProps } from 'react-router-dom';
import { About } from 'pages/about';
import { Home } from 'pages/home';
import { NotFound } from 'pages/not-found';

export enum AppRoutes {
	HOME = 'main',
	ABOUT = 'about',
	NOT_FOUNT = 'not-found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.ABOUT]: `/${AppRoutes.ABOUT}`,
    [AppRoutes.NOT_FOUNT]: '*',
};
export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath[AppRoutes.HOME],
        element: <Home />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath[AppRoutes.ABOUT],
        element: <About />,
    },
    [AppRoutes.NOT_FOUNT]: {
        path: RoutePath[AppRoutes.NOT_FOUNT],
        element: <NotFound />,
    },
};
