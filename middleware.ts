import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const protectedRoutes = createRouteMatcher([
	'/',
	'/personal-room',
	'/previous',
	'/recordings',
	'/upcoming',
	'/meeting(.*)',
]);

export default clerkMiddleware((auth, req) => {
	if (protectedRoutes(req)) auth().protect();
});

export const config = {
	matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
