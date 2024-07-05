'use client';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { likeAction } from '../../../../actions/like';
import './Heart.scss';
import { useCurrentUser } from '@/app/hooks/useCurrentUser';
import { useRouter } from 'next/navigation';
import useLoginModal from '@/app/hooks/useLoginModel';
import { toast } from 'sonner';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getSingleProduct } from '../../../../actions/product';
import Spinners from '../Spinners';

const Heart = ({ product }: any) => {
    const [isAnimated, setIsAnimated] = useState(false);
    const user: any = useCurrentUser();
    const router = useRouter();
    const loginModal = useLoginModal();
    const queryClient = useQueryClient();

    // get product
    const { isPending, data } = useQuery({
        queryKey: ['fetchProduct', product?.id],
        queryFn: async () => await getSingleProduct(product?.id),
    });

    const getPro: any = data;

    const isProHasUserId = useMemo(() => {
        const list = getPro?.likes || [];
        return list.includes(user?.id);
    }, [getPro, user]);

    useEffect(() => {
        setIsAnimated(isProHasUserId);
    }, [isProHasUserId]);

    const handleLike = useCallback(
        async (e: any) => {
            e.stopPropagation();
            if (!user) {
                loginModal.onOpen();
                return;
            }

            const userId = user?.id;
            if (!userId) return;

            setIsAnimated(!isAnimated);

            likeAction(product?.id, userId)
                .then((data) => {
                    if (data.success) {
                        toast.success(data.success);
                        queryClient.invalidateQueries({ queryKey: ['fetchProduct', product?.id] })
                        queryClient.invalidateQueries({ queryKey: ['navprofileuser', user?.id] })
                        queryClient.invalidateQueries({ queryKey: ['favproducts'] })
                    } else if (data.error) {
                        setIsAnimated(isProHasUserId);
                        toast.error(data.error);
                    }
                });
        },
        [user, product?.id, isAnimated, isProHasUserId, loginModal, queryClient]
    );

    return (
        <>
            {isPending ? (
                <Spinners />
            ) : (
                <div
                    className={`HeartAnimation ${isAnimated ? 'animate' : ''}`}
                    onClick={handleLike}
                ></div>
            )}
        </>
    );
};

export default memo(Heart);
