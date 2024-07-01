import NextAuth from "next-auth";
import authConfig from "./auth.config";

import { DEFAULT_REDIRECT, apiAuthPrefix, publicRoutes } from './routes';

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

    if (isApiAuthRoute) {
        return undefined;
    }

    if (isLoggedIn) {
        return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));
    }

    if (!isLoggedIn && !isPublicRoute) {
        return Response.redirect(new URL('/', nextUrl));
    }

    return undefined;
});


export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
