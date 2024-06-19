'use server';

import { AdminVerify } from './AdminVerify';
import { db } from '@/lib/db';
import { Prisma } from '@prisma/client';
import { getUserById } from './users';


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

// get fav products
export const getFavProducts = async (userId: string) => {
    try {
        const user = await getUserById(userId);                
        const favProductIds = user.favorite;        
        const favProducts = await db.product.findMany({
            where: {
                id: {
                    in: favProductIds 
                }
            },
            take: 8 
        });        
        return { success: "Successfully retrieved favorite products", data: favProducts };
    } catch (error) {        
        return { error: "Failed to retrieve favorite products" };
    }
};
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
    const { category, price, color, size } = values;
    try {
        const filters: any = {};
        let filterProducts;

        if (category) {
            filters.proCategory = category;
        }

        if (price && price[0] !== undefined && price[1] !== undefined) {
            filters.proPrice = {
                gte: String(Math.min(price[0])),
                lte: String(Math.max(price[1])),
            };
        }

        if (color) {
            filters.proColors = {
                hasSome: [color]
            };
        }

        if (size) {
            filters.proSizes = {
                hasSome: [size]
            };
        }

        if (Object.keys(filters).length > 0) {
            filterProducts = await db.product.findMany({
                where: filters,
                take: 8,
                orderBy: {
                    createdAt: 'desc'
                }
            });
        } else {
            filterProducts = await db.product.findMany({
                take: 8,
                orderBy: {
                    createdAt: 'desc'
                }
            });
        }

        return { success: "Filtered products retrieved successfully", data: filterProducts };
    } catch (error) {
        console.error("Error fetching filtered products:", error);
        return { error: "Failed to retrieve filtered products" };
    }
};
