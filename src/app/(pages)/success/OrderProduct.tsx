// src/app/(pages)/success/OrdersProduct.tsx

import { useQuery } from "@tanstack/react-query";
import { getSingleProduct } from "../../../../actions/product";
import CustomImage from "@/components/ui/CustomImage";

export const OrdersProduct = ({ product }: any) => {
    const id = product?.product?.id;

    const { isPending, error, data } = useQuery({
        queryKey: ['fetchProduct', id],
        queryFn: async () => await getSingleProduct(id),
    });
    
    const orderproduct: any = data;

    return (
        <div className='flex flex-col md:flex-row items-start gap-5 justify-between max-h-max md:h-[120px] rounded-[10px] border md:rounded-[20px] p-3 overflow-hidden'>
            {/* Item left side image and data */}
            <div className="flex flex-row items-start gap-3">
                <CustomImage
                    src={orderproduct?.proImage[0]}
                    alt={orderproduct?.proName}
                    imgclass='w-[100px] h-[100px] rounded-xl bg-neutral-200 object-contain'
                />
                <div className='flex flex-col space-y-1 justify-between'>
                    <h6 className='line-clamp-1'>{orderproduct?.proName}</h6>
                    <h6 className="flex flex-row items-center gap-3">
                        Size: <p>{product?.product?.productSelectSize}</p>
                    </h6>
                    <h6 className="flex flex-row items-center gap-3">
                        Color: <p>{product?.product?.productSelectColor}</p>
                    </h6>
                    <h6 className="flex flex-row items-center gap-3">
                        Discount: <p>{orderproduct?.proOffer} %</p>
                    </h6>
                </div>
            </div>
            {/* Item right */}
            <div className="flex flex-row md:flex-col gap-3">
                <div className='text-[12px] border rounded-xl px-3 h-[40px] flex items-center justify-center'>
                    {product?.product?.ProductQuantity} x ₹ {orderproduct?.proPrice}
                </div>
                <div className='text-[12px] border rounded-xl px-3 h-[40px] flex items-center justify-center bg-black text-white'>
                    ₹ {product?.product?.ProductQuantity * orderproduct?.proPrice}
                </div>
            </div>
        </div>
    );
};
