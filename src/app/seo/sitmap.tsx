

export default async function Sitemap() {

    const baseURL = "http://localhost:3000/"

    // get all products 
    // const allproducts = await getallproducts()
    const response: string[] = []

    const products = response?.map((pro: any) => {
        return {
            url: `${baseURL}/product/${pro?.slug}`,
            lastmodified: pro?.createdAt
        }
    })

    return [{
        url: baseURL,
        lastModified: new Date()
    },
    ...products,
    ]
}