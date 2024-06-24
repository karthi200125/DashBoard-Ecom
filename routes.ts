// 'use client'

// import { usePathname } from "next/navigation";

// export const test = () => {
//     return (
//         <div>
//             test
//         </div>
//     )
// }
// const pathname = usePathname()
/**
 * An array of routes that are accessible to the public.
 * These routes do not require authentication.
 * @type {string[]}
 */

export const publicRoutes = [
    '/',
    '/shop',
    '/cart',
    '/new-verification',
    '/reset',
    '/new-password'
];

/**
 * The prefix for API authentication routes.
 * Routes that start with this prefix are used for API authentication purposes.
 * @type {string}
 */

export const apiAuthPrefix = '/api/auth';

/**
 * Default redirect after login.
 * @type {string}
 */
// export const DEFAULT_REDIRECT = '/settings';
export const DEFAULT_REDIRECT = `/`;
