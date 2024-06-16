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
    proName: z.string().min(3, { message: "Product title must be at least 3 characters long" }),
    proDesc: z.string().min(30, { message: "Product description must be at least 30 characters long" }),
    proPrice: z.string().min(1, { message: "Product price is required" }),    
    proCategory: z.string().nonempty({ message: "Product category is required" }),
    proColors: z.array(z.string().nonempty({ message: "Color is required" })).min(1, { message: "At least one color is required" }),
    isProAvailable: z.array(z.string().nonempty({ message: "product availbility is required" })).min(1, { message: "select yes or no" }),
    proSizes: z.array(z.string().nonempty({ message: "Size is required" })).min(1, { message: "At least one size is required" }),
});


export const UserSchema = z.object({
    id: z.string(),
    name: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Enter a valid email"),
    image: z.string().email("image is rquired"),
    password: z.string().min(8, "Password must be at least 8 characters").max(12, "Password cannot exceed 12 characters"),
    phoneNo: z.string().regex(/^\d+$/, "Enter a valid phone number"),
    address: z.string().min(5, "Enter your address"),
    postalCode: z.string().regex(/^\d+$/, "Enter a valid postal code"),
    city: z.string().min(1, "Select a city"),
    state: z.string().min(1, "Select a state"),
});



