'use client'

import ProgressBar from "@ramonak/react-progress-bar";

interface ProgressProps {
    per?: any
}

const ProgressBarCon = ({ per }: ProgressProps) => {
    return (
        <div className="flex flex-col gap-2">
            <ProgressBar completed={per} />
            <h1 className={`${per === 100 ? "text-green-400 font-bold" : "text-neutral-400"}`}>{per === 100 ? "Upload Completed" : "Uploading ..."}</h1>
        </div>
    )
}

export default ProgressBarCon