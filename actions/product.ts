'use server';

import { AdminVerify } from './AdminVerify';
import { db } from '@/lib/db';


// get products
export const getProducts = async () => {
    try {
        const allproducts = await db.product.find()
        return allproducts;
    } catch (error) {
        return (error: "get all products failed")
    }
}

// get proucts by time zone
export const getProductsbytime = async (query: string) => {
    try {
        const allproducts = await db.product.find({            
        })
        return allproducts;
    } catch (error) {
        return (error: "get all products failed")
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

