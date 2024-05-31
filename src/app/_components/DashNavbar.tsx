'use client'

import Link from "next/link"
import Icon from "./Icon"
import Logo from "./Logo"
import UserProfile from "./UserProfile"
import { Settings } from "lucide-react"
import { usePathname } from "next/navigation"

const DashNavbar = () => {

    const routes = [
        {
            id: 1,
            name: "Users",
            href: "/dashboard/users"
        },
        {
            id: 2,
            name: "Products",
            href: "/dashboard/products"
        },
        {
            id: 3,
            name: "Orders",
            href: "/dashboard/orders"
        },
        {
            id: 4,
            name: "Payments",
            href: "/dashboard/payments"
        },
        {
            id: 5,
            name: "CreateProduct",
            href: "/dashboard/createproduct"
        },
    ]

    const pathname = usePathname()    

    return (
        <div className="w-full flex items-center sticky flex-row justify-between my-3 h-[80px] rounded-[8px] px-5 bg-white ">
            <Logo />
            <div className="flex flex-row gap-3 items-center">
                {routes?.map((route) => (
                    <Link href={route?.href} key={route.id} className={`${pathname === route?.href ? "text-black bg-white shadow-xl border" : " bg-neutral-100 shadow-xl"} cursor-pointer text-sm font-semibold hover:opacity-50 p-3 rounded-full px-6`}>
                        {route.name}
                    </Link>
                ))}
            </div>
            <div className="flex gap-5 items-center">
                <Icon icon={<Settings size={20} />} tooltip="Setting" />
                <UserProfile proSrc="https://github.com/shadcn.png" proAlt="admin Profile" profileCls="w-12 h-12 shadow-xl" tooltip="Admin"/>
            </div>
        </div>
    )
}

export default DashNavbar