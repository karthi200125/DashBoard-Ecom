'use client'

import CustomPagination from '@/app/_components/CustomPagination';
import DashSearch from '@/app/_components/DashSearch';
import Icon from '@/app/_components/Icon';
import UserProfile from '@/app/_components/UserProfile';
import { formatDate } from '@/app/hooks/MomentDate';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Skeleton } from '@/components/ui/skeleton';
import dynamic from 'next/dynamic';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaUsers } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import { getAllUsersByFilter } from '../../../../actions/dashboard/dashUser';

const User = dynamic(() => import('@/app/dashboard/users/User'));

const UserTable = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [users, setUsers] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const pageFromParams = parseInt(searchParams.get('page') || '1', 10);
    setPage(pageFromParams);
  }, [searchParams]);

  useEffect(() => {
    const searchQueryFromParams = searchParams.get('q') || '';
    setSearchQuery(searchQueryFromParams);
  }, [searchParams]);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    updateUrlParams({ q: value, page: '1' });
  };

  const updateUrlParams = (params: { q?: string; page?: string }) => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (params.q) {
      newParams.set('q', params.q);
    } else {
      newParams.delete('q');
    }
    if (params.page) {
      newParams.set('page', params.page);
    } else {
      newParams.delete('page');
    }
    router.replace(`${pathname}?${newParams.toString()}`);
  };

  const values = { q: searchQuery, page }

  useEffect(() => {
    const getusers = async () => {
      const data = await getAllUsersByFilter(values)
      setUsers(data)
    }
    getusers()
  }, [searchQuery, page])


  const allUsers: any = users?.data || [];
  const count: any = users?.count || 0;

  const is = false

  return (
    <div className={`w-full ${is ? "h-[800px]" : "min-h-[300px]"} border bg-white rounded-[20px] p-5 flex flex-col`}>

      <div className="flex flex-row items-center justify-between">
        <h5 className='flex flex-row items-center gap-2 '>
          <FaUsers size={25} />
          <h5>Users</h5>
          <span>{`(${count || 0})`}</span>
        </h5>
        <DashSearch placeholder="Search Users" onChange={handleSearch} />
        <div>
          <div className='flex flex-row items-center gap-3'>
            {/* Add other controls as needed */}
          </div>
        </div>
      </div>

      <table className='min-w-full divide-y divide-gray-200 mt-5 relative'>
        <thead className="bg-[var(--gray)] text-black">
          <tr>
            <th scope="col" className="px-2 py-3 text-left text-xs font-bold uppercase tracking-wider">Id</th>
            <th scope="col" className="px-2 py-3 text-left text-xs font-bold uppercase tracking-wider">UserName</th>
            <th scope="col" className="px-2 py-3 text-left text-xs font-bold uppercase tracking-wider">Email</th>
            <th scope="col" className="px-2 py-3 text-left text-xs font-bold uppercase tracking-wider">Gender</th>
            <th scope="col" className="px-2 py-3 text-left text-xs font-bold uppercase tracking-wider">Phone</th>
            <th scope="col" className="px-2 py-3 text-left text-xs font-bold uppercase tracking-wider">Country</th>
            <th scope="col" className="px-2 py-3 text-left text-xs font-bold uppercase tracking-wider">CreatedAt</th>
            <th scope="col" className="px-2 py-3 text-left text-xs font-bold uppercase tracking-wider">More</th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {is ?
            <div className='w-full absolute flex flex-col gap-1 mt-2'>
              {[...Array(10)].map((_, index) => (
                <Skeleton key={index} className='w-full bg-neutral-200 h-[60px]' />
              ))}
            </div>
            :
            allUsers?.length > 0 ?
              allUsers?.map((user: any) => (
                <tr key={user?.id}>
                  <td className="px-2 py-4 text-[12px] whitespace-nowrap">{user?.id}</td>
                  <td className="px-2 py-4 text-[12px] whitespace-nowrap flex flex-row items-center gap-2">
                    <UserProfile profileCls='w-10 h-10' proSrc={user?.image} proAlt={user?.name} tooltip={user?.name} user={user}/>
                    <span>{user?.name}</span>
                  </td>
                  <td className="px-2 py-4 text-[12px] whitespace-nowrap">{user?.email}</td>
                  <td className="px-2 py-4 text-[12px] whitespace-nowrap">{user?.gender}</td>
                  <td className="px-2 py-4 text-[12px] whitespace-nowrap">{user?.phoneNo}</td>
                  <td className="px- py-4 text-[12px] whitespace-nowrap">{user?.country}</td>
                  <td className="px-2 py-4 text-[12px] whitespace-nowrap">{formatDate(user?.createdAt)}</td>
                  <td className="px-2 py-4 text-[12px] whitespace-nowrap">
                    <Sheet>
                      <SheetTrigger>
                        <Icon icon={<IoIosMore size={20} />} tooltip='More' />
                      </SheetTrigger>
                      <SheetContent className='bg-white'>
                        <User user={user} />
                      </SheetContent>
                    </Sheet>
                  </td>
                </tr>
              ))
              :
              <tr>
                <td colSpan={8} className='px-6 py-4 text-sm whitespace-nowrap text-center'>No User</td>
              </tr>
          }
        </tbody>
      </table>

      <div className='flex flex-row w-full justify-end border-t-[1px] border-solid border-neutral-200 py-3'>
        <CustomPagination count={count} />
      </div>

    </div>
  );
};

export default UserTable;
