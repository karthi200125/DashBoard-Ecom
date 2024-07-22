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


// get monhty user data for user graph
export const getMonthlyUserCounts = async () => {
    try {
        const users = await db.user.findMany();

        // Initialize monthly data object with all months
        const monthlyData: { [key: string]: number } = {
            'Jan': 0, 'Feb': 0, 'Mar': 0, 'Apr': 0,
            'May': 0, 'Jun': 0, 'Jul': 0, 'Aug': 0,
            'Sep': 0, 'Oct': 0, 'Nov': 0, 'Dec': 0
        };

        // Aggregate users by month
        users.forEach(user => {
            const month = new Date(user.createdAt).toLocaleString('default', { month: 'short' });
            monthlyData[month]++;
        });

        // Convert to array of objects for charting
        const data = Object.keys(monthlyData).map(month => ({
            month,
            users: monthlyData[month],
        }));

        return { success: "Success", data };
    } catch (error) {
        console.error("Error fetching monthly user counts:", error);
        return { error: "Error fetching monthly user counts" };
    }
};


// get top order users
export const getTopOrderUsers = async () => {
    try {
        const topUsers = await db.order.groupBy({
            by: ['userId'],
            _sum: {
                total: true,
                quantity: true,
            },
            orderBy: [
                {
                    _sum: {
                        quantity: 'desc',
                    },
                },
                {
                    _sum: {
                        total: 'desc',
                    },
                },
            ],
            take: 10, // Adjust the number as needed
        });

        // Fetch user details for the top users
        const userIds = topUsers.map(user => user.userId);
        const users = await db.user.findMany({
            where: {
                id: {
                    in: userIds,
                },
            },
        });

        const result = topUsers.map(topUser => {
            const user = users.find(user => user.id === topUser.userId);
            return {
                user,
                totalOrderAmount: topUser._sum.total,
                totalQuantity: topUser._sum.quantity,
            };
        });

        return { success: 'Successfully retrieved the top order users', data: result };
    } catch (error) {
        return { error: 'Failed to get top order users data' };
    }
};
