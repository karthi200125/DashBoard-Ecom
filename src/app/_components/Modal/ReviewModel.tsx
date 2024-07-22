'use client'

import React, { memo, useCallback, useTransition } from 'react'
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
import { useQueryClient } from '@tanstack/react-query'

interface ReviewBodyProps {
    product: any;
}

const ReviewBody = ({ product }: ReviewBodyProps) => {
    const user = useCurrentUser()
    const [isLoading, startTransition] = useTransition()
    const reviewmodel = useReviewModal()
    const queryClient = useQueryClient()
    const methods = useForm<z.infer<typeof ReviewSchema>>({
        resolver: zodResolver(ReviewSchema),
        defaultValues: {
            revRating: "",
            revTitle: '',
            revDesc: ''
        }
    })

    const handleSubmit = useCallback((formData: any) => {
        if (formData?.revRating > 5) {
            toast.error("enter rating upto 5")
        }
        startTransition(() => {
            const data = {
                ...formData,
                userId: user?.id,
                productId: product?.id
            }
            CreateReview(data)
                .then((data) => {
                    if (data.success) {
                        toast.success(data.success)
                        reviewmodel.onClose()
                        queryClient.invalidateQueries({ queryKey: ['getReviews'] });
                        queryClient.invalidateQueries({ queryKey: ['fetchProduct', product?.id] });
                    }
                    if (data.error) {
                        toast.error(data.error)
                    }
                })
        })
    }, [user?.id, product?.id, reviewmodel, startTransition])

    return (
        <div className='max-h-max w-full p-5 flex flex-col gap-3 justify-center'>
            <div className='flex flex-col gap-1 border-b w-full py-2 '>
                <h4>Product Review</h4>
                <p>Review this product</p>
            </div>
            <div className="flex flex-col  md:flex-row items-center gap-3 md:gap-10 justify-between">
                <div className='w-[200px] flex flex-col gap-3'>
                    <CustomImage src={product?.proImage[0] || ""} imgclass='bg-neutral-200 w-[200px] h-full rounded-[10px]' />
                    <h6 className='text-center capitalize'>{product?.proName}</h6>
                </div>

                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(handleSubmit)} className="w-full flex flex-col gap-3">
                        <CustomInput inputCls='w-full' name='revRating' label="Rate this Product (out of 5)" type='number' isLoading={isLoading} />
                        <CustomInput inputCls='w-full' name='revTitle' label="Give Your Honest review" isLoading={isLoading} />
                        <CustomInput inputCls='w-full' textarea name='revDesc' label='write what you feel about this product' isLoading={isLoading} />
                        <CustomBtn isLoading={isLoading} btnCls='border w-full flex items-center justify-center bg-black text-white'>Upload review</CustomBtn>
                    </form>
                </FormProvider>

            </div>
        </div>
    )
}

const ReviewModel = ({ product }: any) => {
    const reviewmodel = useReviewModal()
    return (
        <Modal
            isOpen={reviewmodel.isOpen}
            toggleOpen={reviewmodel.onClose}
            modalBody={<ReviewBody product={product} />}
            modalCls='w-[98%] md:w-[900px]'
        />
    )
}

export default memo(ReviewModel)
