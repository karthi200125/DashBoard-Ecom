'use server';

import { AdminVerify } from './AdminVerify';
import { db } from '@/lib/db';
import { Prisma } from '@prisma/client';


// get products
export const getProducts = async (q: string, limit?: number) => {
    try {
        const allProducts = await db.product.findMany({
            where: {
                proName: {
                    contains: q,
                    mode: 'insensitive',
                },
            },
            take: 10,
        });
        return { success: "get query products success", data: allProducts };
    } catch (error) {
        return { error: "get query products failed" };
    }
};

export const getAllProducts = async () => {
    try {
        const allProducts = await db.product.findMany({
            take: 8,
            orderBy: {
                createdAt: 'desc'
            }
        });
        return { success: "get all products success", data: allProducts };
    } catch (error) {
        return { error: "get all products failed" };
    }
}

// get proucts by time zone
// export const getProductsbytime = async (query: string) => {
//     try {
//         const allproducts = await db.product.find({            
//         })
//         return allproducts;
//     } catch (error) {
//         return (error: "get all products failed")
//     }
// }

// get single product
export const getSingleProduct = async (id: string) => {
    try {
        const getProduct = await db.product.findUnique({
            where: {
                id: id
            }
        })
        return getProduct
    } catch (error) {
        return { error: "get that single product failed" }
    }
}


// create product
export const CreateProductAction = async (values: any) => {
    const { adminId, proName, proDesc, proImage, proPrice, proColors, proSizes, proCategory, proSubCategory, isProAvailable } = values;
    try {
        const isAdmin = await AdminVerify(adminId);
        if (!isAdmin) return { error: "Only admin can create product" };

        const existingProduct = await db.product.findUnique({ where: { proName } });
        if (existingProduct) return { error: "This product name is already taken" };

        const newProduct = await db.product.create({
            data: {
                proName,
                proDesc,
                proImage,
                proPrice,
                proColors,
                proSizes,
                proCategory,
                proSubCategory,
                isProAvailable,
            }
        });

        return { success: "New product has been created" };
    } catch (error) {
        console.log(error);
        return { error: "Failed to create new product" };
    }
}

// filter products

export const getAllProductByFilter = async (values: any) => {
    const { proCategory, minPrice, maxPrice, proColors, proSizes } = values;

    try {
        const filter: Prisma.ProductWhereInput = {};

        if (proCategory) {
            filter.proCategory = proCategory;
        }

        if (minPrice !== undefined && maxPrice !== undefined) {
            filter.proPrice = {
                gte: minPrice,
                lte: maxPrice,
            };
        } else if (minPrice !== undefined) {
            filter.proPrice = {
                gte: minPrice,
            };
        } else if (maxPrice !== undefined) {
            filter.proPrice = {
                lte: maxPrice,
            };
        }

        if (proColors) {
            filter.proColors = {
                some: {
                    color: {
                        equals: proColors,
                    },
                },
            };
        }

        if (proSizes) {
            filter.proSizes = {
                some: {
                    size: {
                        equals: proSizes,
                    },
                },
            };
        }

        const filterOptions: Prisma.ProductFindManyArgs = {
            where: filter,
            orderBy: {
                createdAt: 'desc',
            },
            take: 8, 
        };

        const filterProducts = await db.product.findMany(filterOptions);

        return { success: "Filtered products retrieved successfully", data: filterProducts };
    } catch (error) {
        console.error("Error fetching filtered products:", error);
        return { error: "Failed to retrieve filtered products" };
    }
};
