import dynamic from 'next/dynamic'
import { headers } from 'next/headers'
const CustomNotFound = dynamic(() => import('./_components/CustomNotFound'))

export default async function NotFound() {

    return (
        <CustomNotFound />
    )
}