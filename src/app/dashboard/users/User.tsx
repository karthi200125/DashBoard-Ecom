import CustomBtn from '../../_components/CustomBtn'
import Icon from '../../_components/Icon'
import UserProfile from '../../_components/UserProfile'
import { MdOutlinePerson } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { GiWorld } from "react-icons/gi";
import { CiCalendarDate } from "react-icons/ci";
import { monthsAgo } from '@/app/hooks/MomentDate';
import useDeleteUserModal from '@/app/hooks/useDeleteUserModal';
import DeleteuserModal from '@/app/_components/Modal/DeleteUserModel';

const User = ({ user }: any) => {

    const deleteuserModal = useDeleteUserModal();

    return (
        <div className='w-full h-full bg-white flex flex-col gap-5 items-center mt-10'>
            <DeleteuserModal user={user} />
            <UserProfile proSrc={user?.image} proAlt={user?.name} profileCls='w-[150px] h-[150px]' />
            <h4 className='capitalize'>{user?.name}</h4>
            <p>{user?.email}</p>

            <div className=' flex flex-row items-center gap-5'>
                <CustomBtn arrow btnCls='text-[12px] border' onClick={deleteuserModal.onOpen}>
                    Delete User
                </CustomBtn>
                <CustomBtn arrow btnCls='text-[12px] border'>
                    Edit User
                </CustomBtn>
            </div>

            <div className="flex flex-wrap items-center justify-center">

                <div className='w-[150px] flex flex-row items-center gap-2 m-2'>
                    <Icon icon={<MdOutlinePerson size={25} />} tooltip={"Gender"} />
                    <span>{user?.gender || '-'}</span>
                </div>
                <div className='w-[150px] flex flex-row items-center gap-2 m-2'>
                    <Icon icon={<MdOutlinePhoneInTalk size={25} />} tooltip={"Phone"} />
                    <span>{user?.phone || '-'}</span>
                </div>
                <div className='w-[150px] flex flex-row items-center gap-2 m-2'>
                    <Icon icon={<GiWorld size={25} />} tooltip={"Country"} />
                    <h6>{user?.country || 'India'}</h6>
                </div>
                <div className='w-[150px] flex flex-row items-center gap-2 m-2'>
                    <Icon icon={<CiCalendarDate size={25} />} tooltip={"CreateAt"} />
                    <h6>{monthsAgo(user?.createdAt)}</h6>
                </div>
            </div>

            <div className="recentbut border-t-[1px] border-solid border-neutral-200 w-full h-full">

            </div>

        </div>
    )
}

export default User