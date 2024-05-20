'use client'

import Icon from '@/app/_components/Icon'
import Search from '@/app/_components/Search'
import UserProfile from '@/app/_components/UserProfile'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Skeleton } from '@/components/ui/skeleton'
import { IoIosMore } from "react-icons/io";

const UserTable = () => {

  const userdata = [
    {
      id: 1,
      name: "sample",
      email: "sample.@gamil.com",
      gender: "male",
      phone: "1234567890",
      profilepic: "",
      country: "india",
      createdAt: "jun-2020"
    }, {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      gender: "female",
      phone: "0987654321",
      profilepic: "https://example.com/profiles/janesmith.jpg",
      country: "UK",
      createdAt: "feb-2021"
    },
    {
      id: 3,
      name: "Carlos Mendez",
      email: "carlos.mendez@example.com",
      gender: "male",
      phone: "1122334455",
      profilepic: "https://example.com/profiles/carlosmendez.jpg",
      country: "Mexico",
      createdAt: "mar-2021"
    },
    {
      id: 4,
      name: "Maria Garcia",
      email: "maria.garcia@example.com",
      gender: "female",
      phone: "2233445566",
      profilepic: "https://example.com/profiles/mariagarcia.jpg",
      country: "Spain",
      createdAt: "apr-2021"
    },
    {
      id: 5,
      name: "Liam Brown",
      email: "liam.brown@example.com",
      gender: "male",
      phone: "3344556677",
      profilepic: "https://example.com/profiles/liambrown.jpg",
      country: "Canada",
      createdAt: "may-2021"
    },
    {
      id: 6,
      name: "Emma Wilson",
      email: "emma.wilson@example.com",
      gender: "female",
      phone: "4455667788",
      profilepic: "https://example.com/profiles/emmawilson.jpg",
      country: "Australia",
      createdAt: "jun-2021"
    },
    {
      id: 7,
      name: "Noah Davis",
      email: "noah.davis@example.com",
      gender: "male",
      phone: "5566778899",
      profilepic: "https://example.com/profiles/noahdavis.jpg",
      country: "New Zealand",
      createdAt: "jul-2021"
    },
    {
      id: 8,
      name: "Olivia Martinez",
      email: "olivia.martinez@example.com",
      gender: "female",
      phone: "6677889900",
      profilepic: "https://example.com/profiles/oliviamartinez.jpg",
      country: "Argentina",
      createdAt: "aug-2021"
    },
    {
      id: 9,
      name: "Lucas Johnson",
      email: "lucas.johnson@example.com",
      gender: "male",
      phone: "7788990011",
      profilepic: "https://example.com/profiles/lucasjohnson.jpg",
      country: "South Africa",
      createdAt: "sep-2021"
    },
    {
      id: 10,
      name: "Ava Lee",
      email: "ava.lee@example.com",
      gender: "female",
      phone: "8899001122",
      profilepic: "https://example.com/profiles/avalee.jpg",
      country: "South Korea",
      createdAt: "oct-2021"
    }
  ]

  const HandleEdit = () => {

  }

  const isLoading = false

  return (
    <div className={`w-full ${isLoading ? "h-[800px]" : "min-h-[300px]"}  border bg-white rounded-[20px] p-5 flex flex-col`}>

      {/* table top */}
      <div className="flex flex-row items-center justify-between">
        <h1 className='font-bold'>Users</h1>
        <Search />
        <div>

          <div className='flex flex-row items-center gap-3'>
            <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select> */}
          </div>

        </div>
      </div>

      {/* tbale */}
      <table className='min-w-full divide-y divide-gray-200 mt-5 relative'>
        <thead className="bg-black text-white">
          <tr >
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">Id</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">UserName</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">Email</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">Gender</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">Phone</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">Country</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">CreatedAt</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">More</th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">

          {isLoading ?
            <div className='w-full absolute flex flex-col gap-1 mt-2'>
              {[...Array(10)].map((_, index) => (
                <Skeleton key={index} className='w-full bg-neutral-200 h-[60px]' />
              ))}
            </div>
            :
            userdata?.length > 0 ?
              userdata?.map((user) => (
                <tr key={user?.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{user?.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap flex flex-row items-center gap-2">
                    <UserProfile profileCls='w-10 h-10' proSrc={user?.profilepic} proAlt={user?.name} tooltip={user?.name} />
                    <span>{user?.name}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{user?.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user?.gender}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user?.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user?.country}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user?.createdAt}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Icon icon={<IoIosMore size={25} />} tooltip='More' onClick={HandleEdit} />
                  </td>
                </tr>
              ))
              :
              <div className='w-full h-full bg-red-400'>No User</div>
          }

        </tbody>

      </table>

      {/* Table bottom */}
      <div className='flex flex-row w-full justify-between items-center'>
        <h1 className='font-bold'>total users : 10</h1>
        
      </div>

    </div>
  )
}

export default UserTable