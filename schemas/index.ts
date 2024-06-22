import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password should be mini 6 char").min(3, "Enter your password"),
});

export const RegisterSchema = z.object({
    name: z.string().min(3, "username is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password should be mini 6 char")
});

export const ResetSchema = z.object({
    email: z.string().email("Invalid email address"),
});

export const NewPasswordSchema = z.object({
    password: z.string().min(6, "Password should be mini 6 char"),
});

export const ProductSchema = z.object({
    id: z.string().optional(),
    proName: z.string().min(3, { message: "Product title must be at least 3 characters long" }),
    proDesc: z.string().min(30, { message: "Product description must be at least 30 characters long" }),
    proPrice: z.string().min(1, { message: "Product price is required" }),
    proCategory: z.string().nonempty({ message: "Product category is required" }),
    proSubCategory: z.string().nonempty({ message: "Product sub category is required" }),
    isProAvailable: z.string().nonempty({ message: "Product availability is required" }),
});

export const ReviewSchema = z.object({
    revTitle: z.string().min(4, "rewview title should min 4 char"),
    revRating: z.string().min(1, "cant be empty"),
    revDesc: z.string().min(10, "review description should be mini 10 char")
});

export const UserSchema = z.object({
    name: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Enter a valid email"),
    // image: z.string().url("Enter a valid URL").optional(),
    phoneNo: z.string().regex(/^\d+$/, "Enter a valid phone number").optional(),
    address: z.string().min(5, "Enter your address").optional(),
    postalCode: z.string().regex(/^\d+$/, "Enter a valid postal code").optional(),
    city: z.string().min(1, "Select a city").optional(),
    state: z.string().min(1, "Select a state").optional(),
});


export const CartItemSchema = z.object({
    id: z.string(),
    proName: z.string(),
    proDesc: z.string(),
    proPrice: z.number(),
    proQuantity: z.number(),
    proImage: z.array(z.string()),
    proColors: z.array(z.string()),
    proSizes: z.array(z.string())
});

export const AddressSchema = z.object({
    name: z.string().min(3, "Enter your username"),
    address: z.string().min(3, "Enter your address (door no, street name, city/village)"),
    postalCode: z.string().min(6, "Enter your postal code").max(6),
    city: z.string().min(3, "Select your city"),
    state: z.string().min(3, "Select your state"),
    phoneNo: z.string().min(10, "Enter your phone number").max(10),
});