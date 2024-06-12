import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import Spinners from './Spinners'

interface BtnProps {
    children: React.ReactNode,
    arrow?: boolean,
    border?: boolean,
    btnbg?: string,
    btnCls?: string,
    arrowCls?: string,
    isLoading?: boolean,
    onClick?: () => void
}

const CustomBtn = ({ children, arrow, btnCls, isLoading, border, arrowCls, onClick }: BtnProps) => {
    return (
        <Button
            className={`group flex flexrow items-center gap-3 rounded-full h-[55px] ${border && "border"} hover:bg-blck hover:txt-white transition duration-300 hover:shadow-xl ${isLoading && "cursor-not-allowed"} ${btnCls}`}
            disabled={isLoading}
            onClick={onClick}
        >
            {isLoading ?
                <button disabled={true} className='flex flex-row items-center gap-2'>
                    <span>Loading...</span>
                    <Spinners />
                </button>
                :
                <>
                    {children}
                    {arrow &&
                        <div className={`w-[40px] h-[40px] flex items-center justify-center bg-neutral-200 rounded-full rotate-[-45deg] transition duration-500 group-hover:rotate-0 ${arrowCls}`}>
                            <ArrowRight />
                        </div>
                    }
                </>
            }
        </Button>
    )
}

export default CustomBtn