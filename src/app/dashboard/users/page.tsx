import dynamic from "next/dynamic"
import { FaUsers } from "react-icons/fa"
import { userdata } from "../users/UserTable"
const UserTable = dynamic(() => import("../users/UserTable"))
const TopList = dynamic(() => import("@/app/_components/TopList"))
const Image = dynamic(() => import("@/components/ui/CustomImage"))
const NewUsers = dynamic(() => import("./NewUsers"))
const TotalUser = dynamic(() => import("./TotalUser"))
const UserGraph = dynamic(() => import("./UserGraph"))

const Users = () => {
  return (
    <div className="h-full w-full flex flex-col gap-3">

      <div className="flex flex-row items-start justify-between ">
        <div className="flex flex-col gap-3 h-full w-[76%]">
          {/* users top row */}
          <div className="flex flex-row justify-between items-center h-[300px] gap-3">
            <div className="h-full flex-1 flex flex-col justify-between">
              <h1>Overview</h1>
              <h3>Welcome to users dashbaord</h3>
              <Image src={""} imgclass="border rounded-[20px] h-[170px]" alt=""/>
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
          <TopList title="Top users" icon={<FaUsers size={20} />} data={userdata} />
        </div>
      </div>

      <UserTable />

    </div>
  )
}

export default Users
