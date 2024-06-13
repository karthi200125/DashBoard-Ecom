import NextAuth, { DefaultSession } from 'next-auth'

export type extendedUser = DefaultSession['user'] & {
    isAdmin: true | false
}

declare module 'next-auth' {
    interface Session {
        user: extendedUser
    }
}

import { jwt } from '@auth/core/jwt'

declare module "@auth/core/jwt" {
    interface jwt {
        isAdmin?: true | false
    }
}
