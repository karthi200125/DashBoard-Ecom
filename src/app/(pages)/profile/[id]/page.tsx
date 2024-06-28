'use client';

import CustomBtn from '@/app/_components/CustomBtn';
import EditProfileModel from '@/app/_components/Modal/EditProfileModel';
import { ProfilePageSkeleton } from '@/app/_components/Skeletons/ProfilePageSkeleton';
import UserProfile from '@/app/_components/UserProfile';
import useEditProfileModal from '@/app/hooks/useEditProfileModel';
import Image from '@/components/ui/CustomImage';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { getFavProducts } from '../../../../../actions/product';
import { getSingleUser } from '../../../../../actions/users';

const Profile = () => {
    const orders: string[] = [];
    const editProfileModel = useEditProfileModal();

    const router = useRouter();
    const { id } = useParams();

    const { isLoading: profileLoading, data: profileUser } = useQuery({
        queryKey: ['profileuser', id],
        queryFn: async () => await getSingleUser(id),        
    });

    const { isLoading: favProLoading, data: profileUserFav } = useQuery({
        queryKey: ['favproducts', id],
        queryFn: async () => await getFavProducts(id, 1),
    });

    const favoriteItems = useMemo(() => (
        profileUserFav?.data?.length > 0
            ? profileUserFav.data.slice(0, 5).map(fav => (
                <div className='p-2 flex flex-row items-center justify-between' key={fav.id}>
                    <Image src={fav.proImage[0]} imgclass='w-[50px] md:w-[100px] h-[50px] md:h-[100px] rounded-[10px] bg-neutral-200' alt='Favourite Image' />
                </div>
            ))
            : <p>No favourites yet</p>
    ), [profileUserFav]);

    if (profileLoading) {
        return <ProfilePageSkeleton />;
    }

    return (
        <div className='w-full py-5 min-h-screen flex flex-col gap-5'>
            <EditProfileModel />
            {/* Profile top */}
            <div className='py-5 border-b'>
                <h1 className='text-4xl md:text-5xl xl:text-[120px] line-clamp-1 mb-3'>{profileUser?.name}</h1>
                <div className='flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <div className='flex flex-col md:flex-row items-start md:items-center gap-3'>
                        <UserProfile proSrc={profileUser?.image || ""} proAlt='' profileCls='w-[60px] h-[60px]' />
                        <div>
                            <h4>{profileUser?.email}</h4>
                            <p>{profileUser?.phoneNo || "Add your phone number"}</p>
                        </div>
                    </div>
                    <CustomBtn arrow btnCls='border px-3 md:px-5 mt-3 md:mt-0' onClick={() => editProfileModel.onOpen()}>Edit profile</CustomBtn>
                </div>
            </div>

            {/* Profile favourite and address */}
            <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-5'>
                {/* Favourites */}
                <div className='flex-1 p-5 border rounded-[10px] flex flex-col gap-3 h-[200px]'>
                    <div className='flex flex-row items-center justify-between'>
                        <div className='flex flex-row gap-2 items-center font-bold'>
                            <IoMdHeartEmpty size={20} />
                            <h5>Favourites</h5>
                        </div>
                        <CustomBtn btnCls='border h-[30px] md:h-[40px] px-3 md:px-5 bg-blue-400 text-white text-[12px]' onClick={() => router.push('/favourite')}>View all</CustomBtn>
                    </div>
                    {favoriteItems}
                </div>

                {/* Address details */}
                <div className='flex-1 p-5 border rounded-[10px] flex flex-col gap-3 h-[200px] justify-start'>
                    <div className='flex flex-row items-center gap-2 font-bold'>
                        <IoLocationOutline size={20} />
                        <h5>Address</h5>
                    </div>
                    <div className='p-2'>
                        {profileUser?.address ? (
                            <div>
                                <p className='text-muted-foreground'>{profileUser?.address}</p>
                                <p className='text-muted-foreground'>{profileUser?.city} - {profileUser?.postalCode}</p>
                                <p className='text-muted-foreground'>{profileUser?.state}</p>
                                <p className='text-muted-foreground'>India</p>
                            </div>
                        ) : (
                            <p>+ Add your address details</p>
                        )}
                    </div>
                </div>
            </div>

            {/* My order details */}
            <div className='flex flex-col gap-5'>
                {/* Order top heading */}
                <div>
                    <h4>My Orders</h4>
                    <h5>Customer orders</h5>
                </div>

                {/* Orders */}
                <div className='flex flex-col gap-2'>
                    {orders.length > 0 ? (
                        <div className='border rounded-[10px] p-5 h-[200px]'>
                            <div className='flex flex-row items-center justify-between'>
                                <h4>Order ID: 16236565365365</h4>
                                <h5>$10000</h5>
                            </div>
                            <div className='flex flex-col md:flex-row items-start md:items-center mt-3 gap-3 md:gap-10'>
                                <div className='flex-1'>
                                    <h4>Collected: <span className='text-sm text-neutral-400'>12/03/2024</span></h4>
                                    <div className='flex flex-row items-center gap-5'>
                                        <CustomBtn btnCls='border-blue-500 bg-blue-200 px-3 md:px-5'>Add to cart again</CustomBtn>
                                        <CustomBtn btnCls='border-blue-500 bg-blue-200 px-3 md:px-5'>View details</CustomBtn>
                                    </div>
                                </div>
                                {orders.slice(0, 5).map(order => (
                                    <div className='flex-1 overflow-hidden flex flex-row gap-5 justify-end' key={order}>
                                        <Image src="" imgclass='w-[50px] md:w-[100px] h-[50px] md:h-[100px] rounded-[10px] bg-neutral-200' alt='Order Image' />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className='text-md md:text-xl text-neutral-400'>
                            No orders yet made
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
