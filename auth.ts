import { db } from '@/lib/db';
import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import { getUserById } from './actions/users';
import authConfig from './auth.config';

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({
    events: {
        async linkAccount({ user }) {
            await db.user.update({
                where: { id: user.id },
                data: { emailVerified: new Date() }
            });
        }
    },
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider !== 'credentials') return true;

            if (!user.id) {
                console.error('User id is missing in signIn callback.');
                return false; // Handle the error case where user id is missing
            }

            const existingUser = await getUserById(user.id);

            // Prevent sign in without verification
            if (!existingUser?.emailVerified) {
                console.error(`User with id ${user.id} has not verified their email.`);
                return false;
            }

            // Add 2FA check if necessary

            return true;
        },
        async session({ token, session }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }

            if (token.isAdmin && session.user) {
                session.user.isAdmin = token.isAdmin as true | false;
            }
            return session;
        },
        async jwt({ token }) {
            if (!token.sub) return token;

            const existingUser = await getUserById(token.sub);

            if (!existingUser) return token;

            token.isAdmin = existingUser.isAdmin;
            return token;
        }
    },
    adapter: PrismaAdapter(db),
    session: { strategy: 'jwt' },
    ...authConfig,
});
