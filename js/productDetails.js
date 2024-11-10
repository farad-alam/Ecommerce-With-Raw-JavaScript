

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



document.addEventListener("DOMContentLoaded", displayProductWithDetails)

function displayProductWithDetails(){
    let urlSearchParm = new URLSearchParams(window.location.search);
    console.log(urlSearchParm)
    let productIndex = urlSearchParm.get("productIndex");
    let product = products[productIndex]
    let productDetailsWithHTML = `
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 shadow-md rounded-md p-5">
            <!-- Product Image -->
            <div class="flex justify-center">
                <img src="${product.image}" alt="Product Image" class="h-80 rounded-lg">
            </div>

            <!-- Product Information -->
            <div class="flex flex-col space-y-4 shadow-lg p-3">
                <h1 class="text-3xl font-bold text-gray-800">${product.title}</h1>

                <p class="text-xl text-gray-600">$${product.price}</p>

                <div class="flex items-center space-x-2">
                    <span class="text-yellow-400">
                        <!-- Star icons from Flowbite -->
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </span>
                    <span class="text-gray-500">(${product.review} reviews)</span>
                </div>

                <p class="text-gray-600 leading-relaxed">
                    ${product.description}
                </p>

                <!-- Quantity and Add to Cart Button -->
                <div class="flex items-center space-x-4">
                    <input type="number" min="1" value="1" class="border border-gray-300 p-2 rounded w-16 text-center">
                    <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">
                        Add to Cart
                    </button>
                </div>

                <!-- Additional Information -->
                <div class="space-y-2">
                    <h2 class="text-xl font-semibold text-gray-700">Product Details</h2>
                    <ul class="list-disc list-inside text-gray-600">
                        ${product.features.map((item) =>{
                            return `<li>${item}</li>`
                        }).join("")
                        } 
                    </ul>
                </div>
            </div>
        </div>
    `
    let displayProductDetailsSection = document.getElementById("dispalyProductDetails")
    // displayProductDetailsSection.innerHTML = "";
    displayProductDetailsSection.insertAdjacentHTML("beforeend", productDetailsWithHTML)
}