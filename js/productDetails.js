import {addToCart, products} from "./main.js"

window.addToCart = addToCart;


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
                    <button onclick="addToCart(${productIndex})" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">
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