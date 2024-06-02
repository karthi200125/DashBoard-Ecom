'use client'

import CustomBtn from "@/app/_components/CustomBtn";
import ImageUpload from "./ImageUpload";
import Form from "@/components/ui/Form";

const CreateProduct = () => {

    const handleFormSubmit = (data: { firstName: string; lastName: string; email: string }) => {
        console.log(data);
    };

    return (
        <div className="w-full min-h-screen flex flex-col gap-3">

            {/* create product top */}
            <div className="flex flex-row items-center justify-between bg-white border rounded-full px-3 py-2">
                <h1 className="font-bold text-xl ml-5">Create New Product</h1>
                <CustomBtn arrow isLoading={true}>
                    Create Product
                </CustomBtn>
            </div>

            {/* create product 2 row */}
            <div className="flex flex-row h-[300px] justify-between items-center gap-3">

                {/* mage Uplaod */}
                <ImageUpload />

                {/* others like ProName , ProDesc , prodPrice */}
                <div className="bg-white border rounded-[20px] p-5 h-full flex-1 flex flex-col justify-between">
                    <div className="flex flex-col gap-2 ">
                        <label htmlFor="" className="text-xl  text-neutral-400">Enter Product Name</label>
                        <input type="text" className="border w-full p-3 rounded-[10px]" />
                    </div>
                    <div className="flex flex-col gap-2 ">
                        <label htmlFor="" className="text-xl  text-neutral-400">Enter Product Desc</label>
                        <textarea className="border w-full p-3 rounded-[10px] h-[100px]" />
                    </div>
                </div>

            </div>

            {/* create product 3 row */}
            <div className="flex flex-row h-[300px] justify-between items-center gap-3 mb-5">

                {/* mage Uplaod */}
                <div className="bg-white border rounded-[20px] p-5 h-full flex-1 flex flex-col justify-between">

                </div>

                {/* others like ProName , ProDesc , prodPrice */}
                <div className="bg-white border rounded-[20px] p-5 h-full flex-1 flex flex-col justify-between">

                </div>

            </div>

            <Form onSubmit={handleFormSubmit} />

        </div>
    )
}

export default CreateProduct