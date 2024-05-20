import ToolTip from "./ToolTip";

interface IconProps {
    icon: any;
    tooltip?: string;
    onClick?: () => void;
}

const Icon = ({ icon, tooltip, onClick }: IconProps) => {
    return (
        <ToolTip tooltip={tooltip}>
            <div className="w-[40px] h-[40px] border hover:bg-black hover:text-white rounded-[10px] flex items-center justify-center transition duration-300 cursor-pointer " onClick={onClick}>
                {icon}
            </div>
        </ToolTip>
    )
}

export default Icon