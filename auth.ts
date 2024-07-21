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
                return false;
            }

            const existingUser: any = await getUserById(user.id);

            // Prevent sign in without verification
            if (!existingUser?.emailVerified) {
                console.error(`User with id ${user.id} has not verified their email.`);
                return false;
            }
            return true;
        },
        async session({ session, token }) {
            if (!token.sub) return session;

            const existingUser = await db.user.findUnique({
                where: { id: token.sub },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    image: true,
                    isAdmin: true,
                    gender: true,
                    address: true,
                    city: true,
                    state: true,
                    phoneNo: true,
                    postalCode: true,
                    favorite: true,
                    likes: true,
                    reviews: true,
                    emailVerified: true
                }
            });

            if (existingUser) {
                session.user = {
                    id: existingUser.id,
                    name: existingUser.name ?? '',
                    email: existingUser.email ?? '',
                    image: existingUser.image ?? null,
                    isAdmin: existingUser.isAdmin,
                    gender: existingUser.gender ?? null,
                    address: existingUser.address ?? null,
                    city: existingUser.city ?? null,
                    state: existingUser.state ?? null,
                    phoneNo: existingUser.phoneNo ?? null,
                    postalCode: existingUser.postalCode ?? null,
                    favorite: existingUser.favorite ?? null,
                    likes: existingUser.likes ?? null,
                    reviews: existingUser.reviews ?? null,
                    emailVerified: existingUser.emailVerified ?? null
                };
            }

            return session;
        },
        async jwt({ token }) {
            if (!token.sub) return token;

            const existingUser: any = await getUserById(token.sub);

            if (existingUser) {
                token.isAdmin = existingUser.isAdmin;
            }

            return token;
        }
    },
    adapter: PrismaAdapter(db),
    session: { strategy: 'jwt' },
    ...authConfig,
});
