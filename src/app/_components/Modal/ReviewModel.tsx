'use client'

import React, { useTransition } from 'react'
import Modal from './Modal'
import useReviewModal from '@/app/hooks/useReviewModel'
import CustomImage from '@/components/ui/CustomImage'
import CustomInput from '../Input'
import CustomBtn from '../CustomBtn'
import { FormProvider, useForm } from 'react-hook-form'
import { ReviewSchema } from '../../../../schemas'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateReview } from '../../../../actions/review'
import { toast } from 'sonner'
import { useCurrentUser } from '@/app/hooks/useCurrentUser'

const ReviewBody = ({ product }: string[]) => {
    const user = useCurrentUser()
    const [isLoading, startTransition] = useTransition();
    const reviewmodel = useReviewModal()
    const methods = useForm<z.infer<typeof ReviewSchema>>({
        resolver: zodResolver(ReviewSchema),
        defaultValues: {
            revRating: "",
            revTitle: '',
            revDesc: ''
        }
    });

    const handleSubmit = (formData: any) => {
        startTransition(() => {            
            const data = {
                ...formData,
                userId: user?.id,
                productId: product?.id
            }
            console.log(data)
            CreateReview(data)
                .then((data) => {
                    if (data.success) {
                        toast.success(data.success);
                        reviewmodel.onClose()
                    }
                    if (data.error) {
                        toast.error(data.error);
                    }
                });
        });
    };

    return (
        <div className='max-h-max w-full p-5 flex flex-col gap-3'>
            <div className='flex flex-col gap-1 border-b w-full py-2 '>
                <h2>Product Review</h2>
                <p>Review this product</p>
            </div>
            <div className="flex flex-row items-center gap-10 justify-between">
                <div className='w-[200px] flex flex-col gap-3'>
                    <CustomImage src={product?.proImage[0] || ""} imgclass='bg-neutral-200 w-[200px] h-[200px]' />
                    <h2 className='text-center capitalize'>{product?.proName}</h2>
                </div>

                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(handleSubmit)} className="w-full flex flex-col gap-3">
                        <CustomInput inputCls='w-full' name='revRating' label="Rate this Product (out of 5)" type='float' isLoading={isLoading} />
                        <CustomInput inputCls='w-full' name='revTitle' label="Give Your Honest review" isLoading={isLoading} />
                        <CustomInput inputCls='w-full' textarea name='revDesc' label='write what you feel about this product' isLoading={isLoading} />
                        <CustomBtn isLoading={isLoading} btnCls='border w-full flex items-center justify-center bg-black text-white' >Upload review</CustomBtn>
                    </form>
                </FormProvider>

            </div>
        </div>
    )
}


const ReviewModel = ({ product }: string[]) => {
    const reviewmodel = useReviewModal()
    return (
        <Modal
            isOpen={reviewmodel.isOpen}
            toggleOpen={reviewmodel.onClose}
            modalBody={< ReviewBody product={product} />}
            modalCls='w-[900px]'
        />
    )
}

export default ReviewModel