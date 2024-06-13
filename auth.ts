import { db } from '@/lib/db'
import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth from 'next-auth'
import { getUserById } from './actions/users'
import authConfig from './auth.config'



export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({
    callbacks: {
        // async signIn({ user }) {
        //     const existuser = await getUserById(user.id)
        //     if (!existuser || !existuser.emailVerified) {
        //         return false
        //     }
        //     return true;
        // },
        async session({ token, session }) {

            if (token.sub && session.user) {
                session.user.id = token.sub
            }

            if (token.isAdmin && session.user) {
                session.user.isAdmin = token.isAdmin as true | false
            }
            return session
        },
        async jwt({ token }) {
            if (!token.sub) return token;

            const existingUser = await getUserById(token.sub);

            if (!existingUser) return token;

            token.isAdmin = existingUser.isAdmin;
            return token
        }
    },
    adapter: PrismaAdapter(db),
    session: { strategy: 'jwt' },
    ...authConfig,
})