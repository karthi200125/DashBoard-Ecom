'use client'

import { CalendarDays, LogOut } from "lucide-react"
import noprofile from '../assets/noprofile.webp'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Skeleton } from "@/components/ui/skeleton"
import { signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { z } from "zod"
import { UserSchema } from "../../../schemas"
import { formatDate } from "../hooks/MomentDate"
import { useCurrentUser } from "../hooks/useCurrentUser"

interface UserProfileProps {
    profileCls?: string,
    proSrc?: string,
    proAlt?: string,
    tooltip?: string,
    type?: string,
    user?: z.infer<typeof UserSchema>
}

const UserProfile = ({ profileCls, proSrc, proAlt, tooltip, user, type }: UserProfileProps) => {

    const router = useRouter()
    const CurrentUser = useCurrentUser()
    const handleLogout = () => {
        router.push('/')
        signOut()
        router.refresh()
        localStorage.removeItem('addimages')
        localStorage.removeItem('filterValues')
    }

    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <Avatar className={`${profileCls} cursor-pointer`} onClick={() => router.push(`/profile/${user?.id}`)}>
                    <AvatarImage src={proSrc || noprofile.src} alt={proAlt} />
                    <AvatarFallback>
                        <Skeleton className={`${profileCls}  bg-neutral-200 rounded-full`} />
                    </AvatarFallback>
                </Avatar>
            </HoverCardTrigger>
            <HoverCardContent className="w-150 rounded-[20px] bg-white z-10 p-3">

                <div className="flex justify-between flex-row items-start gap-5">
                    <Avatar className="w-12 h-12">
                        <AvatarImage src={user?.image || noprofile.src} />                        
                        <AvatarFallback>
                            <Skeleton className={`w-10 h-10 bg-neutral-200 rounded-full`} />
                        </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold line-clamp-1">{user?.name}</h4>
                        <p className="line-clamp-1">{user?.email}</p>
                        <div className="flex items-center pt-2 gap-3">
                            <CalendarDays size={15} />{" "}
                            <p className="text-muted-foreground mb-2">
                                Joined {formatDate(user?.createdAt)}
                            </p>
                        </div>
                        {user?.id === CurrentUser?.id && type === "nav" &&
                            < div className="border-t py-1">
                                <div className="flex flex-row items-center gap-3 hover:bg-neutral-100 cursor-pointer rounded-[5px] w-full h-[40px] px-2" onClick={handleLogout}>
                                    <LogOut size={18} />
                                    <p className="text-muted-foreground">Logout</p>
                                </div>
                            </div>
                        }
                    </div>
                </div>

            </HoverCardContent>
        </HoverCard >
    )
}

export default UserProfile