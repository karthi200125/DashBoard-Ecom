'use server'

import { db } from "@/lib/db";


interface FormattedGenderCounts {
    [key: string]: number;
}

// gender counts
export const genderCount = async () => {

    try {
        const genderCounts = await db.user.groupBy({
            by: ['gender'],
            _count: {
                gender: true,
            },
        });

        const allUsers = await db.user.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });

        const formattedGenderCounts: FormattedGenderCounts = genderCounts.reduce<FormattedGenderCounts>((acc, item) => {
            const genderKey = item.gender !== null ? item.gender : 'unknown';
            acc[genderKey] = item._count.gender;
            return acc;
        }, {});

        return {
            success: "get all users success",
            data: allUsers,
            genderCounts: formattedGenderCounts
        };
    } catch (error) {
        return { error: "get all users failed" };
    }
}


// get all users
export const getAllUsersByFilter = async (values: any) => {
    const { q, page } = values;
    const ITEM_PER_PAGE = 8;
    console.log(values)

    try {
        let filterUsers;
        let count;

        if (q) {
            filterUsers = await db.user.findMany({
                where: {
                    name: {
                        contains: q,
                        mode: 'insensitive',
                    }
                },
                take: ITEM_PER_PAGE,
                skip: ITEM_PER_PAGE * (parseInt(page) - 1),
                orderBy: {
                    createdAt: 'desc'
                }
            });

            count = await db.user.count({
                where: {
                    name: {
                        contains: q,
                        mode: 'insensitive',
                    }
                }
            });
        } else {
            filterUsers = await db.user.findMany({
                take: ITEM_PER_PAGE,
                skip: ITEM_PER_PAGE * (parseInt(page) - 1),
                orderBy: {
                    createdAt: 'desc'
                }
            });

            count = await db.user.count();
        }
        console.log(filterUsers)
        return { success: "Filtered users retrieved successfully", data: filterUsers, count };
    } catch (error) {
        console.error('Error retrieving filtered users:', error);
        return { error: "Failed to retrieve filtered users" };
    }
};
