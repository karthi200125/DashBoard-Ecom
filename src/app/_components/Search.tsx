import { CiSearch } from "react-icons/ci";

const Search = () => {
    return (
        <div className="min-w-[400px] rounded-[8px] bg-neutral-100 flex flex-row items-center px-2">
            <CiSearch size={25}/>
            <input type="text" className="w-full rounded-[8px] p-[10px] bg-neutral-100 placeholder:text-sm" placeholder="Search users" />
        </div>
    )
}

export default Search