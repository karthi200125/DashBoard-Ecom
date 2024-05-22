import CustomBtn from './CustomBtn'
import Icon from './Icon'
import UserProfile from './UserProfile'
import { MdOutlinePerson } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { GiWorld } from "react-icons/gi";
import { CiCalendarDate } from "react-icons/ci";

const User = ({ user }: any) => {

    return (
        <div className='w-full h-full bg-white flex flex-col gap-5 items-center mt-10'>
            <UserProfile proSrc={user?.profilepic} proAlt={user?.name} profileCls='w-[150px] h-[150px]' />
            <h1 className='font-bold capitalize'>{user?.name}</h1>
            <h5 className='text-neutral-400'>{user?.email}</h5>

            <div className=' flex flex-row items-center gap-5'>
                <CustomBtn arrow>
                    Delete User
                </CustomBtn>
                <CustomBtn arrow>
                    Edit User
                </CustomBtn>
            </div>

            <div className="flex flex-wrap items-center justify-center">

                <div className='w-[150px] flex flex-row items-center gap-2 m-2'>
                    <Icon icon={<MdOutlinePerson size={25} />} tooltip={"Gender"} />
                    <span>{user?.gender}</span>
                </div>
                <div className='w-[150px] flex flex-row items-center gap-2 m-2'>
                    <Icon icon={<MdOutlinePhoneInTalk size={25} />} tooltip={"Phone"} />
                    <span>{user?.phone}</span>
                </div>
                <div className='w-[150px] flex flex-row items-center gap-2 m-2'>
                    <Icon icon={<GiWorld size={25} />} tooltip={"Country"} />
                    <span>{user?.country}</span>
                </div>
                <div className='w-[150px] flex flex-row items-center gap-2 m-2'>
                    <Icon icon={<CiCalendarDate size={25} />} tooltip={"CreateAt"} />
                    <span>{user?.createdAt}</span>
                </div>
            </div>

            <div className="recentbut border-t-[1px] border-solid border-neutral-200 w-full h-full">
                recent buys
            </div>

        </div>
    )
}

export default User