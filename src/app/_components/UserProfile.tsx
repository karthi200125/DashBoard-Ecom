import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import ToolTip from "./ToolTip"

interface UserProfileProps {
    profileCls?: string,
    proSrc?: string,
    proAlt?: string,
    tooltip?: string
}

const UserProfile = ({ profileCls, proSrc, proAlt , tooltip }: UserProfileProps) => {
    return (        
        <ToolTip tooltip={tooltip}>
            <Avatar className={`${profileCls}`}>
                <AvatarImage src={proSrc} alt={proAlt} />
                <AvatarFallback>
                    <Skeleton className={`${profileCls}  bg-neutral-200 rounded-full`} />
                </AvatarFallback>
            </Avatar>
        </ToolTip>
    )
}

export default UserProfile