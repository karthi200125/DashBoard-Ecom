import { TbBrandSlack } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaAward } from "react-icons/fa";
import { CiGrid31 } from "react-icons/ci";
import { MdOutlinePersonOutline } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineHome } from "react-icons/hi2";
import { LiaProductHunt } from "react-icons/lia";
import { TbLogout } from "react-icons/tb";

const isAdmin = false;
const user = true;

export const mainproductsdata = [
    {
        id: 1,
        proName: "Denim Shirt for Bisexual",
        proDesc: "This is a versatile denim shirt suitable for both men and women. dhdh dhd dhdhd dhdh dhdd dhd",
        proPrice: "1000",
        proImage: "",
        proRating: 4.8,
    },
    {
        id: 2,
        proName: "Unisex Hoodie",
        proDesc: "A comfortable and stylish hoodie perfect for everyone.",
        proPrice: "1200",
        proImage: "",
        proRating: 1,
    },
    {
        id: 3,
        proName: "Leather Jacket",
        proDesc: "A classic leather jacket that adds an edge to any outfit.",
        proPrice: "3500",
        proImage: "",
        proRating: 4.7,
    },
    {
        id: 4,
        proName: "Casual Sneakers",
        proDesc: "Stylish and comfortable sneakers for everyday wear.",
        proPrice: "800",
        proImage: "",
        proRating: 2.2,
    },
    {
        id: 5,
        proName: "Elegant Watch",
        proDesc: "A sleek and elegant watch to complete your look.",
        proPrice: "1500",
        proImage: "",
        proRating: 3.5,
    }
];


export const cities = [
    "Ariyalur",
    "Chengalpattu",
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kallakurichi",
    "Kanchipuram",
    "Kanyakumari",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Ranipet",
    "Salem",
    "Sivaganga",
    "Tenkasi",
    "Thanjavur",
    "Theni",
    "Thoothukudi",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tirupathur",
    "Tiruppur",
    "Tiruvallur",
    "Tiruvannamalai",
    "Tiruvarur",
    "Vellore",
    "Viluppuram",
    "Virudhunagar"
];

export const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
];


export const colors = [
    'red',
    'yellow',
    'blue',
    'green',
    'magneta',
    'orange',
    'cyan',
    'purple',
    'pink',
    'skyblue',
];

export const Aboutus = [
    {
        id: 1,
        title: "Contact us",
        href: "",
    },
    {
        id: 2,
        title: "About us",
        href: "",
    },
    {
        id: 3,
        title: "Corporate information",
        href: "",
    },
    {
        id: 4,
        title: "Return",
        href: "",
    },
]

export const Help = [
    {
        id: 1,
        title: "Account",
        href: "",
    },
    {
        id: 2,
        title: "Order Status",
        href: "",
    },
    {
        id: 3,
        title: "Postage and Delivery",
        href: "",
    },
    {
        id: 4,
        title: "Payments",
        href: "",
    },
    {
        id: 5,
        title: "Shipping",
        href: "",
    },
    {
        id: 6,
        title: "FAQ",
        href: "",
    },
]

export const OnlineShpping = [
    {
        id: 1,
        title: "Men",
        href: "",
    },
    {
        id: 2,
        title: "Women",
        href: "",
    },
    {
        id: 3,
        title: "Kids",
        href: "",
    },
    {
        id: 4,
        title: "Varaities",
        href: "",
    },
]

export const sizes = [
    'XS', // Extra Small
    'S',  // Small
    'M',  // Medium
    'L',  // Large
    'XL', // Extra Large
    'XXL' // Double Extra Large
];

export const mainCategories = [
    "mens", "womens", "kids"
]

export const mensubcategory = [
    "shirts",
    "pants",
    "denim",
    "trousers",
    "kurtas",
    "t-shirts",
    "blazers",
    "suits",
    "sherwanis",
    "shorts"
];

export const womensubcategory = [
    "sarees",
    "blouses",
    "salwar kameez",
    "lehenga cholis",
    "skirts",
    "tops",
    "tunics",
    "dresses",
    "leggings",
    "jeans"
];

export const kidsubcategory = [
    "t-shirts",
    "shorts",
    "dresses",
    "skirts",
    "shirts",
    "pants",
    "denim",
    "rompers",
    "sweaters",
    "jackets"
];


export const LadingCategories = [
    {
        id: 1,
        image: "",
        cat: "Male - Fashion",
        price: "1000",
        href: "/shop?cat=mens",
        subCat: mensubcategory
    },
    {
        id: 2,
        image: "",
        cat: "Female - Fashion",
        price: "1000",
        href: "/shop?cat=womens",
        subCat: womensubcategory
    },
    {
        id: 3,
        image: "",
        cat: "Kid - Fashion",
        price: "1000",
        href: "/shop?cat=kids",
        subCat: kidsubcategory
    },
]

export const routes = [
    {
        id: 1,
        name: "Users",
        href: "/dashboard/users"
    },
    {
        id: 2,
        name: "Products",
        href: "/dashboard/products"
    },
    {
        id: 3,
        name: "Orders",
        href: "/dashboard/orders"
    },
]


// Menu Bar Main Contents
export const benefits = [
    {
        id: 1,
        title: "Best Quality",
        icon: <TbBrandSlack size={40} />,
        desc: "We provide you with modern and compact designs of the highest quality."
    },
    {
        id: 2,
        title: "Free Delivery",
        icon: <CiDeliveryTruck size={40} />,
        desc: "Enjoy fast and free delivery on all your orders, right to your doorstep."
    },
    {
        id: 3,
        title: "Warranty",
        icon: <FaAward size={40} />,
        desc: "Our products come with a warranty to ensure your complete satisfaction and peace of mind."
    }
];

// Menu Bar Mobile Items
export const mobilenavitems = [
    {
        id: 1,
        href: "/home",
        name: "Home",
        icon: <HiOutlineHome size={25} />,
        count: "",
        show: true,
    },
    {
        id: 2,
        href: "/profile",
        name: "Profile",
        icon: <MdOutlinePersonOutline size={25} />,
        count: "",
        show: true,
    },
    {
        id: 3,
        href: "/cart",
        name: "Cart",
        icon: <BsCart3 size={25} />,
        count: 2,
        show: true,
    },
    {
        id: 4,
        href: "/favourite",
        name: "Favourites",
        icon: <IoMdHeartEmpty size={25} />,
        count: 2,
        show: true,
    },
    {
        id: 5,
        href: "/shop",
        name: "Shop",
        icon: <LiaProductHunt size={25} />,
        count: "",
        show: true,
    },
    {
        id: 6,
        href: "/dashboard",
        name: "Dashboard",
        icon: <CiGrid31 size={25} />,
        count: "",
        show: isAdmin,
    },
    {
        id: 7,
        href: "/",
        name: "Logout",
        icon: <TbLogout size={25} />,
        count: "",
        show: user,
    },
];

// Categories
export const Mens = [
    "Casual shirts", "Denim shirts", "Jeans", "Jackets", "Innerwear", "Shorts", "Pants"
];

export const Womens = [
    "Sarees", "Tops/Shirts", "Jeans", "Leggings", "Skirts", "Innerwear", "T-shirts"
];

export const Kids = [
    "Kids shirts", "Pants", "Innerwear", "Trousers"
];


// testimonial
export const Testimonials = [
    {
        id: 1,
        name: "Jane Doe",
        pro: "Verified Buyer",
        feedback: "Amazing product! High quality and fast shipping. Will definitely buy again.",
        image: "/images/testimonials/jane.jpg",
        marginTop: false
    },
    {
        id: 2,
        name: "John Smith",
        pro: "Verified Buyer",
        feedback: "Great customer service and excellent value for money. Highly recommend.",
        image: "/images/testimonials/john.jpg",
        marginTop: true
    },
    {
        id: 3,
        name: "Emily Johnson",
        pro: "Verified Buyer",
        feedback: "The product exceeded my expectations. I am very satisfied with my purchase.",
        image: "/images/testimonials/emily.jpg",
        marginTop: false
    },
    {
        id: 4,
        name: "Michael Brown",
        pro: "Verified Buyer",
        feedback: "Fast delivery and fantastic quality. I'm a happy customer!",
        image: "/images/testimonials/michael.jpg",
        marginTop: true
    },
    {
        id: 5,
        name: "Sophia Davis",
        pro: "Verified Buyer",
        feedback: "Excellent product! I love it. The customer support was also very helpful.",
        image: "/images/testimonials/sophia.jpg",
        marginTop: false
    },
    {
        id: 6,
        name: "James Wilson",
        pro: "Verified Buyer",
        feedback: "Very pleased with my purchase. The product is top-notch and the service was great.",
        image: "/images/testimonials/james.jpg",
        marginTop: true
    }
];

