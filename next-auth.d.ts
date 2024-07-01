import NextAuth, { DefaultSession } from 'next-auth'

export type extendedUser = DefaultSession['user'] & {
    isAdmin: boolean,
    gender: string | null,
    address: string | null,
    city: string | null,
    state: string | null,
    phoneNo: string | null,
    postalCode: string | null,
    favorite: string[] | null,
    likes: string[] | null,
    reviews: Review[] | null,
    emailVerified?: Date | null 
}


declare module 'next-auth' {
    interface Session {
        user: extendedUser
    }
}

import { jwt } from '@auth/core/jwt'

declare module "@auth/core/jwt" {
    interface jwt {
        isAdmin?: boolean,
        gender: string | null,
        address: string | null,
        city: string | null,
        state: string | null,
        phoneNo: string | null,
        postalCode: string | null,
        favorite: string[] | null,
        likes: string[] | null,
        reviews: Review[] | null 
    }
}
