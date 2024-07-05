'use client';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { likeAction } from '../../../../actions/like';
import './Heart.scss';
import { useCurrentUser } from '@/app/hooks/useCurrentUser';
import { useRouter } from 'next/navigation';
import useLoginModal from '@/app/hooks/useLoginModel';
import { toast } from 'sonner';


const Heart = ({ product }: any) => {
    const [isAnimated, setIsAnimated] = useState(false);
    const user: any = useCurrentUser();
    const router = useRouter();
    const loginModal = useLoginModal();

    const isLiked = useMemo(() => {
        const list = user?.favorite || [];
        return list.includes(product?.id);
    }, [user, product]);

    const isProHasUserId = useMemo(() => {
        const list = product?.likes || [];
        return list.includes(user?.id);
    }, [user, product]);

    useEffect(() => {
        setIsAnimated(isLiked && isProHasUserId);
    }, [isLiked, isProHasUserId]);

    const handleLike = useCallback(async (e: any) => {
        e.stopPropagation();
        if (!user) {
            loginModal.onOpen();
            return;
        }

        const userId = user?.id;
        if (!userId) return;

        likeAction(product?.id, userId)
            .then((data) => {
                if (data.success) {
                    router.refresh();
                    toast.success(data.success);
                } else if (data.error) {
                    toast.error(data.error);
                }
            });
    }, [user, product, router, loginModal]);

    return (
        <>
            <div
                className={`HeartAnimation ${isAnimated ? 'animate' : ''}`}
                onClick={handleLike}
            >
            </div>
        </>
    );
};

export default memo(Heart);
