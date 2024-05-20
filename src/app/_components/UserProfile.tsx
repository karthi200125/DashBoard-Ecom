import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import ToolTip from "./ToolTip"

const UserProfile = () => {
    return (
        <ToolTip tooltip="Admin">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>
                    <Skeleton className="h-12 w-12 rounded-full bg-neutral-200" />
                </AvatarFallback>
            </Avatar>
        </ToolTip>
    )
}

export default UserProfile