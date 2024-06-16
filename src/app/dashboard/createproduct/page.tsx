'use client';

import CustomBtn from "@/app/_components/CustomBtn";
import CustomSelect from "@/app/_components/CustomSelect";
import CustomInput from "@/app/_components/Input";
import { colors, mainCategories, sizes } from '@/app/_components/dummydata';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useTransition } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as z from 'zod';

// Form schema definition using zod
export const productSchema = z.object({
    id: z.string().optional(),
    proName: z.string().min(3, { message: "Product title must be at least 3 characters long" }),
    proDesc: z.string().min(30, { message: "Product description must be at least 30 characters long" }),
    proPrice: z.string().min(1, { message: "Product price is required" }),
    proCategory: z.string().nonempty({ message: "Product category is required" }),
    isProAvailable: z.string().nonempty({ message: "Product availability is required" }),
});

const CreateProduct = () => {
    const [isLoading, startTransition] = useTransition();
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
    const [colorErr, setColorErr] = useState<string | undefined>(); // Ensure type safety for error state
    const [sizeErr, setSizeErr] = useState<string | undefined>(); // Ensure type safety for error state

    const methods = useForm({
        resolver: zodResolver(productSchema),
        defaultValues: {
            proName: "",
            proDesc: "",
            proPrice: "",
            proCategory: "",
            isProAvailable: "",
        }
    });

    const { handleSubmit, control } = methods;

    const toggleColorSelection = (color: string) => {
        setSelectedColors(prevColors => {
            if (prevColors.includes(color)) {
                return prevColors.filter(c => c !== color);
            } else {
                return [...prevColors, color];
            }
        });
        // Clear colorErr when a color is selected
        if (colorErr && selectedColors.length === 0) {
            setColorErr(undefined);
        }
    };

    const toggleSizeSelection = (size: string) => {
        setSelectedSizes(prevSizes => {
            if (prevSizes.includes(size)) {
                return prevSizes.filter(s => s !== size);
            } else {
                return [...prevSizes, size];
            }
        });
        // Clear sizeErr when a size is selected
        if (sizeErr && selectedSizes.length === 0) {
            setSizeErr(undefined);
        }
    };

    const onSubmit = (formData: z.infer<typeof productSchema>) => {
        startTransition(() => {
            if (selectedColors.length === 0) {
                setColorErr("You must select at least one color");
                return;
            }
            if (selectedSizes.length === 0) {
                setSizeErr("You must select at least one size");
                return;
            }
            console.log({
                ...formData,
                proColors: selectedColors,
                proSizes: selectedSizes
            });
            // Additional logic for form submission can be added here
        });
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full min-h-screen flex flex-col gap-3">
                    <div className="flex flex-row items-center justify-between bg-white border rounded-full px-3 py-2">
                        <h1 className="font-bold text-xl ml-5">Create New Product</h1>
                        <CustomBtn arrow isLoading={isLoading} type="submit">
                            Create Product
                        </CustomBtn>
                    </div>

                    <div className="flex flex-row min-h-[100px] justify-between items-start gap-3 mb-5">
                        <div className="bg-white border rounded-[20px] p-5 h-full flex-1 flex flex-col justify-center gap-2 w-full">
                            <CustomInput name="proName" label="Product Name" inputCls="w-full" />
                            <CustomInput name="proDesc" label="Product Description" textarea inputCls="w-full" />
                            <CustomInput name="proPrice" type="number" label="Product Price" inputCls="w-full" />
                            <CustomSelect
                                name="proCategory"
                                control={control}
                                options={mainCategories}
                                label="Select Category"
                                selectCls="w-full"
                            />
                        </div>

                        <div className="bg-white border rounded-[20px] p-5 h-full flex-1 flex flex-col gap-3">
                            <CustomSelect
                                name="isProAvailable"
                                control={control}
                                options={["Yes", "No"]}
                                label="Select Product Availability"
                                selectCls="w-full"
                            />

                            {/* Product colors selection */}
                            <div className="flex flex-wrap items-center gap-3">
                                {colors.map((color, index) => (
                                    <div
                                        key={index}
                                        className={`w-[30px] h-[30px] rounded-full border cursor-pointer flex items-center justify-center
                                            ${selectedColors.includes(color) ? 'border text-white' : 'bg-white'}`}
                                        onClick={() => toggleColorSelection(color)}
                                        style={{ border: selectedColors.includes(color) ? '1px solid black' : '1px solid white' }}
                                    >
                                        <div className="w-[20px] h-[20px] rounded-full" style={{ background: color }}></div>
                                    </div>
                                ))}
                                {colorErr &&
                                    <div>{colorErr}</div>
                                }
                            </div>

                            {/* Product sizes selection */}
                            <div className="flex flex-wrap items-center gap-3">
                                {sizes.map((size, index) => (
                                    <div
                                        key={index}
                                        className={`px-4 w-[50px] py-2 rounded-[10px] border cursor-pointer 
                                            ${selectedSizes.includes(size) ? 'bg-black text-white' : 'bg-white'}`}
                                        onClick={() => toggleSizeSelection(size)}
                                    >
                                        {size}
                                    </div>
                                ))}
                                {sizeErr &&
                                    <div>{sizeErr}</div>
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </FormProvider>
    );
};

export default CreateProduct;
