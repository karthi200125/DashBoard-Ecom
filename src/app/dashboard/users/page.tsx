import TopList from "@/app/_components/TopList"
import Image from "@/components/ui/Image"
import NewUsers from "./NewUsers"
import TotalUser from "./TotalUser"
import UserGraph from "./UserGraph"
import UserTable, { userdata } from "../users/UserTable"
import { FaUsers } from "react-icons/fa"

const Users = () => {
  return (
    <div className="h-full w-full flex flex-col gap-3">

      <div className="flex flex-row items-start justify-between ">
        <div className="flex flex-col gap-3 h-full w-[76%]">
          {/* users top row */}
          <div className="flex flex-row justify-between items-center h-[300px] gap-3">
            <div className="h-full flex-1 flex flex-col justify-between">
              <h1 className="text-4xl font-bold">Overview</h1>
              <h2 className="text-3xl">Welcome to users dashbaord</h2>
              <Image src={""} imgclass="border rounded-[20px] h-[170px]" />
            </div>
            <TotalUser />
            <NewUsers />
          </div>

          {/* users mide row */}
          <div className="mid">
            <UserGraph />
          </div>

        </div>

        <div className="bg-white border rounded-[20px] w-[23%] p-5 h-[660px] overflow-y-hidden">
          <TopList title="Top users" icon={<FaUsers size={20}/>} data={userdata} />
        </div>
      </div>

      <UserTable />

    </div>
  )
}

export default Users
