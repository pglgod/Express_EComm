
import { MdHome, MdOutlineExplore, MdOutlinePerson } from "react-icons/md"
import { TbCategoryPlus } from "react-icons/tb"


export const nav_links = [
    {
        key: "home",
        Lable: "Home",
        path: "/",
    },
    {
        key: "contact",
        Lable: "Contact",
        path: "/contact",
    },
    {
        key: "about",
        Lable: "About",
        path: "/about",

    },
    {
        key: "login",
        Lable: "LogIn",
        path: "/login",

    }
]


export const bottom_nav = [
    {
        key: "home",
        Lable: "Home",
        path: "/",
        icon: <MdHome/>
    },
    {
        key: "explore",
        Lable: "Explore",
        path: "/explore",
        icon: <MdOutlineExplore/>
    },
    {
        key: "category",
        Lable: "Category",
        path: "/category",
        icon: <TbCategoryPlus/>
    },
    {
        key: "profile",
        Lable: "Profile",
        path: "/profile",
        icon: <MdOutlinePerson/>
    }
]

export const home_links = [
    {
        key: "women",
        Lable: "Women's Faishon",
        path: "/women_fashion",
    },
    {
        key: "men",
        Lable: "Men's Faishon",
        path: "/men_fashion",
    },
    {
        key: "kids",
        Lable: "Kids Faishon",
        path: "/kids_fashion",
    },
    {
        key: "electronics",
        Lable: "Electronics",
        path: "/electronics",
    },
    {
        key: "home&lifestyle",
        Lable: "Home & Lifestyle",
        path: "/home_lifestyle",
    },
    {
        key: "sports",
        Lable: "Sports",
        path: "/sports",
    },
    {
        key: "helth&beauty",
        Lable: "Health & Beauty",
        path: "/health_beauty",
    },
    {
        key: "medicine",
        Lable: "Medicine",
        path: "/medicine",
    },
    {
        key: "grocery",
        Lable: "Grocery & Pet's",
        path: "/grocery",
    }

]