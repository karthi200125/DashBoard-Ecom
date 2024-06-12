'use client'

import Link from "next/link";
import ToolTip from "./ToolTip";

interface IconProps {
    icon: React.ReactNode;
    tooltip?: string;
    onClick?: () => void;
    count?: any;
    iconCls?: string;
    href?: string
}

const Icon = ({ icon, tooltip, onClick, count, iconCls, href }: IconProps) => {
    return (
        <ToolTip tooltip={tooltip}>
            <Link
                href={href || ""}
                className={`w-[40px] h-[40px] border bg-white rounded-[10px] flex items-center justify-center transition duration-300 cursor-pointer relative ${iconCls}`}
                onClick={onClick}
                prefetch={false}
            >
                {icon}
                {count > 0 && (
                    <div className="absolute top-[-5px] right-[-5px] bg-red-400 w-[12px] h-[12px] flex items-center justify-center rounded-full border-[2px] border-solid border-white">
                        {/* <span className="text-white text-[8px] font-semibold">{count}</span> */}
                    </div>
                )}
            </Link>
        </ToolTip>
    );
};

export default Icon;