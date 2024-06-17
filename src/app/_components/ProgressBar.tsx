'use client'

import ProgressBar from "@ramonak/react-progress-bar";

interface ProgressProps {
    per: number; 
}

const ProgressBarCon = ({ per }: ProgressProps) => {
    return (
        <div className="flex flex-col gap-2">
            <ProgressBar completed={per} /> 
            <p className={`${per === 100 ? "text-green-400 font-bold" : "text-neutral-400"}`}>
                {per === 100 ? "Upload Completed" : "Uploading ..."} 
            </p>
        </div>
    );
};

export default ProgressBarCon;
