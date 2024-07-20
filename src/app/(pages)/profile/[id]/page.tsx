'use client';

import CustomBtn from '@/app/_components/CustomBtn';
import EditProfileModel from '@/app/_components/Modal/EditProfileModel';
import { ProfilePageSkeleton } from '@/app/_components/Skeletons/ProfilePageSkeleton';
import UserProfile from '@/app/_components/UserProfile';
import { useCurrentUser } from '@/app/hooks/useCurrentUser';
import useEditProfileModal from '@/app/hooks/useEditProfileModel';
import Image from '@/components/ui/CustomImage';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { getFavProducts } from '../../../../../actions/product';
import { getSingleUser } from '../../../../../actions/users';
import UserOrders from '../UserOrders';

const Profile = () => {
    const editProfileModel = useEditProfileModal();
    const Currentuser = useCurrentUser()
    const router = useRouter();
    const params = useParams();
    const id: any = params.id

    const { isLoading: profileLoading, data: userdada } = useQuery({
        queryKey: ['profileuser', id],
        queryFn: async () => await getSingleUser(id),
    });

    const { isLoading: favProLoading, data } = useQuery({
        queryKey: ['favproducts', id],
        queryFn: async () => await getFavProducts(id, '1'),
    });


    const profileUser: any = userdada
    const profileUserFav: any = data

    const favoriteItems = useMemo(() => (
        <div className={`p-2 flex flex-row items-center gap-2 ${profileUserFav?.data?.length >= 4 ? "justify-between" : ""}`}>
            {profileUserFav && profileUserFav.data?.length > 0 ? (
                profileUserFav.data.slice(0, 5).map((fav: any) => (
                    <Image key={fav.id} src={fav.proImage[0]} imgclass='w-[80px] md:w-[100px] h-[80px] md:h-[100px] rounded-[10px] bg-neutral-200' alt='Favourite Image' />
                ))
            ) : (
                <p>No favourites yet</p>
            )}
        </div>
    ), [profileUserFav]);



    if (profileLoading) {
        return <ProfilePageSkeleton />;
    }

    const iam = profileUser?.id === Currentuser?.id

    return (
        <div className='w-full p-2 md:p-0 py-5 min-h-screen flex flex-col gap-5'>
            <EditProfileModel />
            {/* Profile top */}
            <div className='py-5 border-b'>
                <h1 className='line-clamp-1 mb-3'>{profileUser?.name}</h1>
                <div className='flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <div className='flex flex-row items-start md:items-center gap-3'>
                        <UserProfile proSrc={profileUser?.image || ""} proAlt='' profileCls='w-[60px] h-[60px]' />
                        <div>
                            <h5>{profileUser?.email}</h5>
                            <p>{profileUser?.phoneNo || "Add your phone number"}</p>
                        </div>
                    </div>
                    {iam &&
                        <CustomBtn arrow btnCls='w-full md:w-[200px] border px-3 md:px-5 mt-3 md:mt-0' onClick={() => editProfileModel.onOpen()}>Edit profile</CustomBtn>
                    }
                </div>
            </div>

            {/* Profile favourite and address */}
            <div className='flex flex-col md:flex-row items-start justify-between gap-5'>
                {/* Favourites */}
                <div className='w-full  md:flex-1 p-2 md:p-5 border rounded-[10px] flex flex-col gap-3 max-h-max'>
                    <div className='flex flex-row items-center justify-between'>
                        <div className='flex flex-row gap-2 items-center font-bold'>
                            <IoMdHeartEmpty size={20} />
                            <h5>{iam ? "Favourites" : `${profileUser?.name} Favourites`}</h5>
                        </div>
                        {iam &&
                            <CustomBtn btnCls='border h-[30px] md:h-[40px] px-3 md:px-5 bg-blue-400 text-white text-[12px]' onClick={() => router.push('/favourite')}>View all</CustomBtn>
                        }
                    </div>
                    {favoriteItems}
                </div>

                {/* Address details */}
                {iam &&
                    <div className='w-full  md:flex-1 p-2 md:p-5 border rounded-[10px] flex flex-col gap-3 max-h-max justify-start'>
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
                }
            </div>

            {/* My order details */}
            {iam &&
                <div className='flex flex-col gap-5'>
                    {/* Order top heading */}
                    <div>
                        <h4> {iam ? "My Orders" : `${profileUser?.name} Orders`}</h4>
                        <h5>Customer orders</h5>
                    </div>
                    <UserOrders user={profileUser} />
                </div>
            }
        </div>
    );
};

export default Profile;
