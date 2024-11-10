// import {userLogOut} from "./script.js"

let loggedInHtml = `
<button type="button"
                            class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <span class="sr-only">Open user menu</span>
                            <img class="w-8 h-8 rounded-full" src="https://avatars.githubusercontent.com/u/103895201?v=4" alt="user photo">
                        </button>
                        <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                            id="user-dropdown">
                            <div class="px-4 py-3">
                                <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                                <span class="block text-sm text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                            </div>
                            <ul class="py-2" aria-labelledby="user-menu-button">
                                <li>
                                    <a href="#"
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                                </li>
                                <li>
                                    <a id="" href="#"
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign
                                        out</a>
                                </li>
                            </ul>
                        </div>
                        <!-- Sign Up and Login Buttons -->
                        <div id="signupLoginButtons">
                        
                            <button onclick="userLogOut()" type="button" id="logoutButton" 
                                class="px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700">Logout</button>
                        
                        
                        </div>
`
let loggedOutHtml = `
<button type="button"
                            class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <span class="sr-only">Open user menu</span>
                            <img class="w-8 h-8 rounded-full" src="https://avatars.githubusercontent.com/u/103895201?v=4" alt="user photo">
                        </button>
                        <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                            id="user-dropdown">
                            <div class="px-4 py-3">
                                <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                                <span class="block text-sm text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                            </div>
                            <ul class="py-2" aria-labelledby="user-menu-button">
                                <li>
                                    <a href="#"
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign
                                        out</a>
                                </li>
                            </ul>
                        </div>
                        <!-- Sign Up and Login Buttons -->
                        <div id="signupLoginButtons">
                        
                            <a href="/signup.html"
                                class="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-blue-700 rounded-lg hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:text-white dark:border-blue-600 dark:hover:bg-blue-700">Sign
                                Up</a>
                            <a href="/login.html"
                                class="px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700">Login</a>
                        
                        
                        </div>
`
let products = [
    {
        "title": "Classic Men's Chronograph Watch",
        "description": "A stylish chronograph watch with durable stainless steel.",
        "features": ["Chronograph functionality", "Water-resistant up to 50 meters", "Adjustable stainless steel strap", "Date display"],
        "image": "https://m.media-amazon.com/images/I/71QoSMBhfVL._AC_SX679_.jpg",
        "price": 129.99,
        "review": 152,
        "rating": 4.5,
        "isAvilable": true,
        "categories": "men"
    },
    {
        "title": "Luxury Women's Gold Plated Watch",
        "description": "Elegant gold-plated watch perfect for evening wear.",
        "features": ["Gold-plated case", "Quartz movement", "Scratch-resistant glass", "Slim, stylish design"],
        "image": "https://m.media-amazon.com/images/I/712fJMj79IL._AC_SY741_.jpg",
        "price": 159.99,
        "review": 89,
        "rating": 4.8,
        "isAvilable": true,
        "categories": "women"
    },
    {
        "title": "Kids' Colorful Analog Watch",
        "description": "Fun and colorful watch for kids with easy-to-read numbers.",
        "features": ["Soft silicone strap", "Bright, easy-to-read dial", "Durable plastic case", "Water-resistant"],
        "image": "https://m.media-amazon.com/images/I/51Wm+8L4c1L._AC_SY675_.jpg",
        "price": 25.99,
        "review": 45,
        "rating": 4.7,
        "isAvilable": true,
        "categories": "kids"
    },
    {
        "title": "Men's Sport Digital Watch",
        "description": "Rugged digital watch designed for outdoor activities.",
        "features": ["Backlight for night visibility", "Stopwatch and alarm", "Shock-resistant", "Water-resistant up to 100 meters"],
        "image": "https://m.media-amazon.com/images/I/61nHUVwR65L._AC_SY695_.jpg",
        "price": 59.99,
        "review": 102,
        "rating": 4.2,
        "isAvilable": true,
        "categories": "men"
    },
    {
        "title": "Women's Elegant Rose Gold Watch",
        "description": "Beautiful rose gold watch that complements any outfit.",
        "features": ["Rose gold finish", "Sleek, modern design", "Water-resistant", "Leather strap"],
        "image": "https://m.media-amazon.com/images/I/81PrmvhOIVL._AC_SY741_.jpg",
        "price": 98.99,
        "review": 134,
        "rating": 4.6,
        "isAvilable": true,
        "categories": "women"
    },
    {
        "title": "Kids' Waterproof Digital Watch",
        "description": "Digital watch for kids, great for everyday wear.",
        "features": ["Waterproof design", "LED backlight", "Durable rubber strap", "Alarm and stopwatch functions"],
        "image": "https://m.media-amazon.com/images/I/81DFC4koIoL._AC_SX466_.jpg",
        "price": 29.99,
        "review": 50,
        "rating": 4.3,
        "isAvilable": true,
        "categories": "kids"
    },
    {
        "title": "Men's Leather Strap Analog Watch",
        "description": "Classic leather strap watch with a minimalist design.",
        "features": ["Genuine leather strap", "Scratch-resistant glass", "Quartz movement", "Water-resistant"],
        "image": "https://m.media-amazon.com/images/I/71MP77GpVPL._AC_SY535_.jpg",
        "price": 79.99,
        "review": 95,
        "rating": 4.4,
        "isAvilable": true,
        "categories": "men"
    },
    {
        "title": "Women's Silver Mesh Strap Watch",
        "description": "Stylish silver mesh watch for a sleek and modern look.",
        "features": ["Stainless steel mesh strap", "Scratch-resistant glass", "Quartz movement", "Water-resistant"],
        "image": "https://m.media-amazon.com/images/I/81TNLTdDuCL._AC_SX569_.jpg",
        "price": 85.99,
        "review": 78,
        "rating": 4.5,
        "isAvilable": true,
        "categories": "women"
    },
    {
        "title": "Kids' Cartoon Character Watch",
        "description": "Fun watch with favorite cartoon characters for kids.",
        "features": ["Colorful cartoon design", "Soft, adjustable strap", "Water-resistant", "Easy-to-read numbers"],
        "image": "https://m.media-amazon.com/images/I/716bRoScZyL._AC_SX679_.jpg",
        "price": 19.99,
        "review": 67,
        "rating": 4.2,
        "isAvilable": true,
        "categories": "kids"
    },
    {
        "title": "Men's Automatic Mechanical Watch",
        "description": "Luxury mechanical watch for men with classic appeal.",
        "features": ["Automatic movement", "See-through case back", "Genuine leather strap", "Water-resistant"],
        "image": "https://m.media-amazon.com/images/I/81ur-SttvPL._AC_SY675_.jpg",
        "price": 249.99,
        "review": 70,
        "rating": 4.6,
        "isAvilable": true,
        "categories": "men"
    },
    {
        "title": "Women's Diamond-Accented Watch",
        "description": "Elegant watch with diamond accents for added sparkle.",
        "features": ["Diamond accents", "Gold-tone stainless steel", "Water-resistant", "Quartz movement"],
        "image": "https://m.media-amazon.com/images/I/715pJ80qlNL._AC_SX679_.jpg",
        "price": 199.99,
        "review": 110,
        "rating": 4.8,
        "isAvilable": true,
        "categories": "women"
    },
    {
        "title": "Kids' Digital Camouflage Watch",
        "description": "Trendy camouflage watch for kids who love adventure.",
        "features": ["Camouflage design", "Digital display", "Shock-resistant", "Water-resistant"],
        "image": "https://m.media-amazon.com/images/I/81eBExHODxL._AC_SY675_.jpg",
        "price": 34.99,
        "review": 55,
        "rating": 4.4,
        "isAvilable": true,
        "categories": "kids"
    }
]

// Check User isAuthenticated
document.addEventListener("DOMContentLoaded", checkAuthentication)

function checkAuthentication(){

    let signUpUserHtml = document.getElementsByClassName("profileWithLogout");
    let userDetails = JSON.parse(localStorage.getItem("userDetails"))

    if (userDetails && userDetails.isLoggedIn) {      
        signUpUserHtml[0].insertAdjacentHTML("beforeend", loggedInHtml)
    } else {
        signUpUserHtml[0].insertAdjacentHTML("beforeend", loggedOutHtml)
    }
}



function userLogin(event){
    event.preventDefault()
    const loginForm = document.getElementById("login-form")
    const userDetails = JSON.parse(localStorage.getItem("userDetails"))
    console.log(loginForm.username)
    console.log(userDetails)

    if (userDetails && userDetails.userName){
        if (userDetails.userName === loginForm.username.value && userDetails.password === loginForm.password.value) {
            userDetails.isLoggedIn = true
            localStorage.setItem("userDetails", JSON.stringify(userDetails))
            window.location.href = "/"

            console.log("user successfully logged in")
    
        }
    } else {
        console.log("User with these username did not exist")
    }
}

function userLogOut(){
    let userDetails = JSON.parse(localStorage.getItem("userDetails"))
    console.log(userDetails)
    if (userDetails && userDetails.userName) {
        userDetails.isLoggedIn = false
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
        console.log("User successfully Logout")
        // window.location.href = "/login.html";
        window.location.href = "/login.html"
        
    } else {
        console.log("Can not proces Logout")
    }
}


document.addEventListener("DOMContentLoaded", showCategoriesProduct)

function showCategoriesProduct(){
    let urlsearchParm = new URLSearchParams(window.location.search)
    const categoriesName = urlsearchParm.get("category")
    insetCategoriTitle(categoriesName)
    // console.log(categoriesName)
    let filteredProducts = filterProductsBasedOnCategories(products, categoriesName)
    // console.log(filteredProducts)
    let productHtml = genarateProductHTMLFromProductList(filteredProducts)

    const displayProductSection = document.getElementById("displayProduct")

    displayProductSection.insertAdjacentHTML("beforeend", productHtml)


}


function insetCategoriTitle(categoriesName){
    document.getElementById("displayCategoryTitle").innerHTML = `Products For ${categoriesName}`
}



function genarateProductHTMLFromProductList(productList){

    let displayProductsWithHTML = ''
    productList.forEach((product, index) => {
            displayProductsWithHTML += `
            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="/productDetails.html?productIndex=${index}">
                            <img class="p-8 h-64 mx-auto rounded-t-lg" src="${product.image}"
                                alt="product image" />
                        </a>
                        <div class="px-5 pb-5">
                            <a  href="/productDetails.html?productIndex=${index}">
                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${product.title}</h5>
                            </a>
                            <div class="flex items-center mt-2.5 mb-5">
                                <div class="flex items-center space-x-1 rtl:space-x-reverse">
                                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor" viewBox="0 0 22 20">
                                        <path
                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor" viewBox="0 0 22 20">
                                        <path
                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor" viewBox="0 0 22 20">
                                        <path
                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor" viewBox="0 0 22 20">
                                        <path
                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path
                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>
                                <span
                                    class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">${product.rating}</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-3xl font-bold text-gray-900 dark:text-white">$${product.price}</span>
                                <a href="#"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                                    to cart</a>
                            </div>
                        </div>
                    </div>
            `
         
    })
    return displayProductsWithHTML
   

}

function filterProductsBasedOnCategories(products, categories){
    let productsl = products.filter(product =>{
        
       return product.categories === categories
    })
    console.log(productsl)
    return productsl
}