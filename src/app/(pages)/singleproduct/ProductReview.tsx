import StarRating from '@/app/_components/Cards/StarRating';
import CustomBtn from '@/app/_components/CustomBtn';
import ReviewModel from '@/app/_components/Modal/ReviewModel';
import { useCurrentUser } from '@/app/hooks/useCurrentUser';
import useLoginModal from '@/app/hooks/useLoginModel';
import useReviewModal from '@/app/hooks/useReviewModel';
import { useQuery } from '@tanstack/react-query';
import { memo, useMemo } from 'react';
import { GetReviewByProduct } from '../../../../actions/review';
import Review from './Review';


interface ProductReviewProps {
  product: any
}

const ProductReview = ({ product }: ProductReviewProps) => {

  const user = useCurrentUser()
  const reviewModel = useReviewModal();
  const loginModel = useLoginModal();

  const { isPending, data } = useQuery({
    queryKey: ['getReviews'],
    queryFn: async () => await GetReviewByProduct(product?.id)
  });

  const reviews = data?.data || [];

  const totalRating = useMemo(() => {
    return reviews.length > 0 ? reviews.reduce((sum, review) => sum + parseFloat(review?.revRating || '0'), 0) : 0;
  }, [reviews]);

  const averageRating = useMemo(() => {
    return reviews.length > 0 ? totalRating / reviews.length : 0;
  }, [reviews, totalRating]);

  // Ensure createdAt is converted to string format
  const formattedReviews = reviews.map((rev) => ({
    ...rev,
    createdAt: rev.createdAt.toISOString()
  }));

  const handleReviewModelOpen = () => {
    if (!user) {
      loginModel.onOpen()
    } else {
      reviewModel.onOpen()
    }
  }

  return (
    <div className='w-full flex flex-col lg:flex-row gap-10 relative justify-between'>
      <ReviewModel product={product} />
      {/* review top */}
      <div className='flex flex-col md:flex-row lg:flex-col w-full lg:w-[30%] h-full items-start justify-between lg:sticky top-[100px] gap-3'>
        <CustomBtn arrow onClick={handleReviewModelOpen} btnCls='border w-full'>Add your review</CustomBtn>

        <div className='w-full flex flex-col gap-3 rounded-[20px] p-5 bg-white border'>
          <h4>Total reviews</h4>
          <h2>{reviews.length || 0}</h2>
          <p>Growth this year</p>
        </div>

        <div className='w-full flex flex-col gap-3 rounded-[20px] p-5 bg-white border'>
          <h4 >Average Rating</h4>
          <StarRating size='' rating={averageRating} />
          <p>Average rating this year</p>
        </div>
      </div>

      {/* reviews */}
      <div className='flex flex-col rounded-[30px] md:border md:p-5 gap-3 h-full w-full'>
        {reviews.length > 0 ? (
          formattedReviews.map((rev) => (
            <Review key={rev.id} review={rev} />
          ))
        ) : (
          <h5 className='w-full text-center '>No reviews yet, be the first reviewer of this product</h5>
        )}
      </div>
    </div>
  );
};

export default memo(ProductReview);
