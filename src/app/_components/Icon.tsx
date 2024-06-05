import ToolTip from "./ToolTip";

interface IconProps {
    icon: React.ReactNode;
    tooltip?: string;
    onClick?: () => void;
    count?: any;
}

const Icon = ({ icon, tooltip, onClick, count }: IconProps) => {
    return (
        <ToolTip tooltip={tooltip}>
            <div
                className={`w-[40px] h-[40px] border hover:bg-black bg-white hover:text-white rounded-[10px] flex items-center justify-center transition duration-300 cursor-pointer hover:border-none relative`}
                onClick={onClick}
            >
                {icon}
                {count > 0 && (
                    <div className="absolute top-[-5px] right-[-5px] bg-red-400 w-[12px] h-[12px] flex items-center justify-center rounded-full border-[2px] border-solid border-white">
                        {/* <span className="text-white text-[8px] font-semibold">{count}</span> */}
                    </div>
                )}
            </div>
        </ToolTip>
    );
};

export default Icon;