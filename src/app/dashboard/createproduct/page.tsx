'use client';

import CustomBtn from "@/app/_components/CustomBtn";
const ProductImageUpload = dynamic(() => import("./ProductImageUpload"));
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import CustomInput from "@/app/_components/Input";
import CustomSelect from "@/app/_components/CustomSelect";
import dynamic from "next/dynamic";
import { ProductSchema } from "../../../../schemas";


const CreateProduct = () => {

    const product = {}

    const methods = useForm<z.infer<typeof ProductSchema>>({
        resolver: zodResolver(ProductSchema),
        defaultValues: {
            id: "",
            proName: "",
            proDesc: "",
            proImage: "",
            proPrice: "",
            proCategory: "",
            proColors: "",
            proSizes: "",

        }
    });

    const handleSubmit = (values: z.infer<typeof ProductSchema>) => {
        if (product) {
            console.log(values, "edit product");
        } else {
            console.log(values, "create product");
        }
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleSubmit)}>

                <div className="w-full min-h-screen flex flex-col gap-3">

                    {/* create product top */}
                    <div className="flex flex-row items-center justify-between bg-white border rounded-full px-3 py-2">
                        <h1 className="font-bold text-xl ml-5">Create New Product</h1>
                        <CustomBtn arrow isLoading={false} onClick={methods.handleSubmit(handleSubmit)}>Create Product</CustomBtn>
                    </div>

                    {/* create product 3 row */}
                    <div className="flex flex-row min-h-[100px] justify-between items-center gap-3 mb-5">

                        {/* Product Name and Description */}
                        <div className="bg-white border rounded-[20px] p-5 h-full flex-1 flex flex-col justify-center gap-2 w-full">
                            <CustomInput name="proName" label="Product Name" inputCls="w-full" value={ } />
                            <CustomInput name="proDesc" label="Product Description" textarea inputCls="w-full" />
                            <CustomInput name="proPrice" type="number" label="Product Price" inputCls="w-full" />
                        </div>

                        <div className="bg-white border rounded-[20px] p-5 h-full flex-1 flex flex-col gap-3">
                            <CustomSelect
                                name="proCategory"
                                control={methods.control}
                                defaultValue="Category"
                                options={['Electronics', 'Apparel', 'Books']}
                                label="Select Category"
                                selectCls="w-full"
                            />
                            <CustomSelect
                                name="proColors"
                                control={methods.control}
                                defaultValue="color category"
                                options={['black', 'red', 'orange']}
                                label="Select colors"
                                selectCls="w-full"
                            />
                            <CustomSelect
                                name="Product available"
                                control={methods.control}
                                defaultValue="Select product available"
                                options={['Yes', 'No']}
                                label="Select Product available"
                                selectCls="w-full"
                            />
                        </div>

                    </div>

                    {/* Product image Uplaod */}
                    <div className="flex flex-row min-h-[300px] justify-between items-center gap-3">
                        <ProductImageUpload />
                    </div>

                </div>

            </form>
        </FormProvider>
    )
}

export default CreateProduct;
