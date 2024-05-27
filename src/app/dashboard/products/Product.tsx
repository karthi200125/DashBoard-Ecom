import CustomBtn from '@/app/_components/CustomBtn'
import Icon from '@/app/_components/Icon'
import { CiCalendarDate } from 'react-icons/ci'
import { IoPricetagsOutline } from "react-icons/io5";

const Product = ({ product }: any) => {
    return (
        <div className='flex flex-col gap-3 '>
            <div className='flex items-center justify-center gap-3 flex-col border-b-[1px] pb-3 mt-5'>
                <img src={product?.proImage} alt="" className='w-full h-[200px]' />
                {/* <Skeleton className='w-full h-[200px] bg-neutral-200'/> */}
                <h1 className='font-bold text-2xl capitalize text-center'>{product?.proName}</h1>
                <p className='text-sm text-neutral-400 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, laboriosam.</p>
            </div>

            <div className='w-full flex flex-row items-center gap-5 border-b-[1px] py-5 justify-center'>
                <CustomBtn arrow>
                    Delete 
                </CustomBtn>
                <CustomBtn arrow>
                    Edit 
                </CustomBtn>
            </div>

            <div className="flex flex-wrap items-center justify-center">

                <div className='w-[150px] flex flex-row items-center gap-2 m-2'>
                    <Icon icon={<IoPricetagsOutline size={25} />} tooltip={"Gender"} />
                    <span>₹ {product?.proPrice}</span>
                </div>
                <div className='w-[150px] flex flex-row items-center gap-2 m-2'>
                    <Icon icon={<CiCalendarDate size={25} />} tooltip={"Phone"} />
                    <span>{product?.createdAt}</span>
                </div>
            </div>


        </div>
    )
}

export default Product