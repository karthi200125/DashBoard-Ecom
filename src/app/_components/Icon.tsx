import ToolTip from "./ToolTip";

interface IconProps {
    icon: any;
    tooltip?: string;
}

const Icon = ({ icon, tooltip }: IconProps) => {
    return (
        <ToolTip tooltip={tooltip}>
            <div className="w-[40px] h-[40px] border hover:bg-black hover:text-white rounded-[10px] flex items-center justify-center transition duration-300 cursor-pointer ">
                {icon}
            </div>
        </ToolTip>
    )
}

export default Icon