import React from 'react'

interface CurveProps {
    curveCls?: string
}

const Curves = ({ curveCls }: CurveProps) => {
    return (
        <div className={`curves ${curveCls}`}></div>
    )
}

export default Curves