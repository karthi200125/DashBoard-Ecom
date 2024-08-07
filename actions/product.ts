'use server';

import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { getUserById } from './users';
import { subDays, subMonths } from 'date-fns';


//search query get products
export const getProducts = async (q: string) => {
    try {
        const allProducts = await db.product.findMany({
            where: {
                proName: {
                    contains: q,
                    mode: 'insensitive',
                },
            },
            take: 8,
        });
        return { success: "get query products success", data: allProducts };
    } catch (error) {
        return { error: "get query products failed" };
    }
};


export const getAllProducts = async () => {
    try {
        const count = await db.product.count({
            orderBy: {
                createdAt: 'desc'
            }
        });
        const allProducts = await db.product.findMany({
            take: 8,
            orderBy: {
                createdAt: 'desc'
            }
        });
        return { success: "get all products success", data: allProducts, count };
    } catch (error) {
        return { error: "get all products failed" };
    }
}

// delete product
export const deletProduct = async (id: string) => {
    try {
        await db.product.delete({
            where: {
                id: id
            }
        })
        revalidatePath('/dashboard/products')
        return { success: "product has deleted" }
    } catch (error) {
        return { error: "product delete failed" }
    }
}

// get fav products
export const getFavProducts = async (userId: string, page?: string) => {
    const ITEM_PER_PAGE = 8;
    try {
        const user: any = await getUserById(userId);
        if (!user) {
            return { error: "User not found" };
        }
        const count = await db.product.count({
            where: {
                id: {
                    in: user.favorite
                }
            },
        });

        const currentPage = page ? parseInt(page) : 1;

        const favProducts = await db.product.findMany({
            where: {
                id: {
                    in: user.favorite
                }
            },
            take: ITEM_PER_PAGE,
            skip: (ITEM_PER_PAGE * (currentPage - 1)),
        });

        return { success: "Successfully retrieved favorite products", data: favProducts, count };
    } catch (error) {
        return { error: "Failed to retrieve favorite products" };
    }
};

// get order products
export const getOrderProducts = async (productIds: string[]) => {
    try {
        const products = await db.product.findMany({
            where: {
                id: {
                    in: productIds,
                },
            },
        });
        return { success: 'Products fetched successfully', data: products };
    } catch (error) {
        console.error('Failed to fetch products:', error);
        return { error: 'Failed to fetch products' };
    }
};

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

// related products
export const relatedProducts = async (product: any) => {
    try {
        const { id, proCategory, proSubCategory } = product;

        // Fetch related products based on subcategory first
        let relatedProducts = await db.product.findMany({
            where: {
                proSubCategory,
                id: {
                    not: id,
                },
            },
            take: 8,
        });

        if (relatedProducts.length === 0) {
            relatedProducts = await db.product.findMany({
                where: {
                    proCategory,
                    id: {
                        not: id,
                    },
                },
                take: 8,
            });
        }

        return { success: "Get related products success", data: relatedProducts };
    } catch (error) {
        return { error: "Get related products failed" };
    }
};

// create product
export const CreateProductAction = async (values: any) => {
    const { proName, proDesc, proImage, proPrice, proOffer, proColors, proSizes, proCategory, proSubCategory, isProAvailable } = values;
    try {
        await db.product.create({
            data: {
                proName,
                proDesc,
                proImage,
                proPrice,
                proOffer,
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
    const { category, subcategory, price, color, size, page, time } = values;

    const ITEM_PER_PAGE = 8;
    try {
        const filters: any = {};
        let filterProducts;
        let count;

        if (category) {
            filters.proCategory = category;

            if (subcategory) {
                filters.proSubCategory = subcategory;
            }
        }

        if (price) {
            const [min, max] = price.split('-').map(Number);

            if (!isNaN(min) && !isNaN(max)) {
                filters.proPrice = {
                    gte: String(Math.min(min, max)),
                    lte: String(Math.max(min, max)),
                };
            }
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

        const orderBy: any = {};

        if (time) {
            switch (time) {
                case 'asc':
                    orderBy.createdAt = 'asc';
                    break;
                case 'dsc':
                    orderBy.createdAt = 'desc';
                    break;
                case 'last-week':
                    filters.createdAt = {
                        gte: subDays(new Date(), 7).toISOString(),
                    };
                    orderBy.createdAt = 'desc';
                    break;
                case 'last-month':
                    filters.createdAt = {
                        gte: subMonths(new Date(), 1).toISOString(),
                    };
                    orderBy.createdAt = 'desc';
                    break;
                default:
                    orderBy.createdAt = 'desc';
            }
        } else {
            orderBy.createdAt = 'desc';
        }

        if (Object.keys(filters).length > 0) {
            filterProducts = await db.product.findMany({
                where: filters,
                take: ITEM_PER_PAGE,
                skip: (ITEM_PER_PAGE * (parseInt(page) - 1)),
                orderBy: orderBy
            });
            count = await db.product.count({
                where: filters,
            });
        } else {
            filterProducts = await db.product.findMany({
                take: ITEM_PER_PAGE,
                skip: (ITEM_PER_PAGE * (parseInt(page) - 1)),
                orderBy: orderBy
            });
            count = await db.product.count();
        }

        return { success: "Filtered products retrieved successfully", data: filterProducts, count };
    } catch (error) {
        return { error: "Failed to retrieve filtered products" };
    }
};