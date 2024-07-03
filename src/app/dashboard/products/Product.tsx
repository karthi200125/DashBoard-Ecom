import CustomBtn from '@/app/_components/CustomBtn'
import Icon from '@/app/_components/Icon'
import DeleteProductModel from '@/app/_components/Modal/DeleteProductModel';
import { formatDate } from '@/app/hooks/MomentDate';
import useDeleteProductModal from '@/app/hooks/useDeleteProductModel';
import CustomImage from '@/components/ui/CustomImage';
import { CiCalendarDate } from 'react-icons/ci'
import { IoPricetagsOutline } from "react-icons/io5";

const Product = ({ product }: any) => {
    const deletproductmodel = useDeleteProductModal();

    return (
        <div className='flex flex-col gap-3'>
            <DeleteProductModel product={product} />
            <div className='flex items-center justify-center gap-3 flex-col border-b-[1px] pb-3 mt-5'>
                <CustomImage src={product?.proImage[0]} alt="" imgclass='w-full h-[250px] object-contain bg-neutral-200' />
                <h4 className='capitalize text-center line-clamp-2'>{product?.proName}</h4>
                <p className='text-center line-clamp-3'>{product?.proDesc}</p>
            </div>

            <div className='w-full flex flex-row items-center gap-5 border-b-[1px] py-5 justify-center'>
                <CustomBtn arrow btnCls='border pl-5' onClick={deletproductmodel.onOpen}>
                    Delete
                </CustomBtn>
                <CustomBtn arrow btnCls='border pl-5'>
                    Edit
                </CustomBtn>
            </div>

            <div className="flex flex-wrap items-center justify-center">

                <div className='w-[150px] flex flex-row items-center gap-2 m-2'>
                    <Icon icon={<IoPricetagsOutline size={25} />} tooltip={"Product price"} />
                    <h6>₹ {product?.proPrice}</h6>
                </div>
                <div className='w-[150px] flex flex-row items-center gap-2 m-2'>
                    <Icon icon={<CiCalendarDate size={25} />} tooltip={"Product Created At"} />
                    <h6>{formatDate(product?.createdAt)}</h6>
                </div>
            </div>


        </div>
    )
}

export default Product