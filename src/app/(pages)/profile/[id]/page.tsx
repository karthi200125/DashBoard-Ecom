'use client';
import CustomBtn from '@/app/_components/CustomBtn';
import UserProfile from '@/app/_components/UserProfile';
import Image from '@/components/ui/CustomImage';
import dynamic from 'next/dynamic';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { getSingleUser } from '../../../../../actions/users';
const Modal = dynamic(() => import('@/app/_components/Modal/Modal'));
const EditProfile = dynamic(() => import('../EditProfile'));

const Profile =  () => {
    const address = false;
    const fav: string[] = [];
    const orders: string[] = [];

    const router = useRouter();
    const [editModalOpen, seteditModalOpen] = useState(false)

    const { id } = useParams()

    const [profileUser, setprofileUser] = useState(null)

    useEffect(() => {
        const fetchProfileUser = async () => {
            if (id) {
                const user = await getSingleUser(id);
                setprofileUser(user)
                console.log(user);
            }
        };

        fetchProfileUser();
    }, [id]);

    return (
        <div className='w-full py-5 min-h-screen flex flex-col gap-5'>
            <Modal closeBtn='' isOpen={editModalOpen} toggleOpen={() => seteditModalOpen(false)} modalBody={<EditProfile />} modalCls='' />
            {/* profile top */}
            <div className='py-5 border-b'>
                <h1 className='text-4xl md:text-5xl xl:text-[120px] line-clamp-1 mb-3'>{profileUser?.name}</h1>
                <div className='flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <div className='flex flex-col md:flex-row items-start md:items-center gap-3'>
                        <UserProfile proSrc={profileUser?.image || ""} proAlt='' profileCls='w-[60px] h-[60px]' />
                        <div>
                            <h2 className='text-sm md:text-md font-bold'>{profileUser?.email}</h2>
                            <h2 className='text-sm md:text-md font-bold'>{profileUser?.phoneNo || "add your phone number"}</h2>
                        </div>
                    </div>
                    <CustomBtn arrow btnCls='border px-3 md:px-5 mt-3 md:mt-0' onClick={() => seteditModalOpen(true)}>Edit profile</CustomBtn>
                </div>
            </div>

            {/* profile favourite and address */}
            <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-5'>

                {/* favourites  */}
                <div className='flex-1 p-5 border rounded-[10px] flex flex-col gap-3 h-[200px]'>
                    <div className='flex flex-row items-center justify-between'>
                        <div className='flex flex-row gap-2 items-center font-bold'>
                            <IoMdHeartEmpty size={20} />
                            <h1 className='text-sm md:text-xl'>favourites</h1>
                        </div>
                        <CustomBtn btnCls='border h-[30px] md:h-[40px] px-3 md:px-5 bg-blue-400 text-white' onClick={() => router.push('/favourite')}>view all</CustomBtn>
                    </div>
                    {fav.length > 0 ?
                        fav.slice(0, 5).map((fav) => (
                            <div className='p-2 flex flex-row items-center justify-between' key={fav}>
                                <Image src="" imgclass='w-[50px] md:w-[100px] h-[50px] md:h-[100px] rounded-[10px] bg-neutral-200' alt='profile Image' />
                            </div>
                        ))
                        :
                        <div className='text-md md:text-xl text-neutral-400'>
                            No favourite yet
                        </div>
                    }
                </div>

                {/* address details */}
                <div className='flex-1 p-5 border rounded-[10px] flex flex-col gap-3 h-[200px] justify-start'>
                    <div className='flex flex-row items-center gap-2 font-bold'>
                        <IoLocationOutline size={20} />
                        <h1 className='text-sm md:text-xl'>Address</h1>
                    </div>
                    <div className='p-2'>
                        {address ?
                            <div>
                                <h2 className='text-sm md:text-md'>{profileUser?.address}</h2>
                                <h2 className='text-sm md:text-md'>{profileUser?.city} - {profileUser?.postalCode}</h2>
                                <h2 className='text-sm md:text-md'>{profileUser?.state}</h2>
                                <h2 className='text-sm md:text-md'>India</h2>
                            </div>
                            :
                            <div className='text-md md:text-xl text-neutral-400'>
                                + Add your address details
                            </div>
                        }
                    </div>
                </div>

            </div>

            {/* my order details */}
            <div className='flex flex-col gap-5'>
                {/* order top heading */}
                <div>
                    <h1 className='text-2xl md:text-5xl font-bold'>My Orders</h1>
                    <h2 className='text-sm md:text-lg text-neutral-400 mt-3'>Customer orders</h2>
                </div>

                {/* orders  */}
                <div className='flex flex-col gap-2'>
                    {orders.length > 0 ?

                        <div className='border rounded-[10px] p-5 h-[200px]'>
                            <div className='flex flex-row items-center justify-between'>
                                <h1 className='text-lg md:text-2xl font-bold'>Order ID: 16236565365365</h1>
                                <h2 className='text-lg md:text-xl font-bold'>$10000</h2>
                            </div>
                            <div className='flex flex-col md:flex-row items-start md:items-center mt-3 gap-3 md:gap-10'>
                                <div className='flex-1'>
                                    <h2 className='text-sm font-semibold'>Collected: <span className='text-sm text-neutral-400'>12/03/2024</span></h2>
                                    <div className='flex flex-row items-center gap-5'>
                                        <CustomBtn btnCls='border-blue-500 bg-blue-200 px-3 md:px-5'>Add to cart again</CustomBtn>
                                        <CustomBtn btnCls='border-blue-500 bg-blue-200 px-3 md:px-5'>View details</CustomBtn>
                                    </div>
                                </div>
                                {orders.slice(0, 5).map((order) => (
                                    <div className='flex-1 overflow-hidden flex flex-row gap-5 justify-end' key={order}>
                                        <Image src="" imgclass='w-[50px] md:w-[100px] h-[50px] md:h-[100px] rounded-[10px] bg-neutral-200' alt='order image' />
                                    </div>
                                ))}
                            </div>
                        </div>
                        :
                        <div className='text-md md:text-xl text-neutral-400'>
                            No orders yet made
                        </div>
                    }
                </div>
            </div>

        </div>
    );
}

export default Profile;
