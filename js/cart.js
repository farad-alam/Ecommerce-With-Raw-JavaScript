import {addToCart, isAuthenticated, getUserDetails, products} from "./main.js"


window.addToCart = addToCart;

let cartProductHtml = `
                <div class="flex items-center space-x-6 border-b pb-6">
                    <!-- Product Image -->
                    <img src="https://via.placeholder.com/100" alt="Product Image" class="w-20 h-20 rounded object-cover">
    
                    <!-- Product Details -->
                    <div class="flex-grow">
                        <h2 class="text-lg font-semibold text-gray-800">Product Name</h2>
                        <p class="text-gray-600">Product description goes here.</p>
                    </div>
    
                    <!-- Quantity Control & Price -->
                    <div class="flex items-center space-x-4">
                        <button onclick="increaseQuantity('quantity-1')" class="text-gray-600 hover:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                            </svg>
                        </button>
                        <p id="quantity-1" class="text-gray-900 font-medium">1</p>
                        <button onclick="increaseQuantity('quantity-1')" class="text-gray-600 hover:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16" />
                            </svg>
                        </button>
                    </div>
    
                    <!-- Product Price -->
                    <p class="text-gray-900 font-semibold">$25.00</p>
    
                    <!-- Remove Button -->
                    <button onclick="removeCartItem(id)" class="text-red-500 hover:text-red-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
`
document.addEventListener("DOMContentLoaded", displayCart)

function displayCart(){

    let cartItemsIndexes = isAvilableCartItem()
    let productHtml;
    if (cartItemsIndexes) {
        productHtml = genarateProductHTMLForCart(cartItemsIndexes)
    } else {
        productHtml ="No product to show"
    }

    const displayProductSection = document.getElementById("cart-items")

    displayProductSection.insertAdjacentHTML("beforeend", productHtml)


}

function isAvilableCartItem(){
    if (isAuthenticated) {
        let userObject = getUserDetails()
        if (userObject.cartItems) {
            return userObject.cartItems
        } else {
            return false
        }
        
    } else {
        console.log("You need to login to see cart item")
    
    }
}


function genarateProductHTMLForCart(cartItemsIndexes){
     let displayProductsWithHTML = ''
    cartItemsIndexes.forEach((id, index) =>{
        let product = products[id]
        displayProductsWithHTML += `<div class="flex items-center space-x-6 border-b pb-6">
                                                <!-- Product Image -->
                                                <img src="${product.image}" alt="Product Image" class="w-20 h-20 rounded object-cover">
                                
                                                <!-- Product Details -->
                                                <div class="flex-grow">
                                                    <h2 class="text-lg font-semibold text-gray-800">"${product.title}"</h2>
                                                    <p class="text-gray-600">"${product.description}"</p>
                                                </div>
                                
                                                <!-- Quantity Control & Price -->
                                                <div class="flex items-center space-x-4">
                                                    <button onclick="increaseQuantity('quantity-1')" class="text-gray-600 hover:text-gray-800">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                                                        </svg>
                                                    </button>
                                                    <p id="quantity-1" class="text-gray-900 font-medium">1</p>
                                                    <button onclick="increaseQuantity('quantity-1')" class="text-gray-600 hover:text-gray-800">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                            class="w-6 h-6">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16" />
                                                        </svg>
                                                    </button>
                                                </div>
                                
                                                <!-- Product Price -->
                                                <p class="text-gray-900 font-semibold">$"${product.price}"</p>
                                
                                                <!-- Remove Button -->
                                                <button onclick="removeCartItem("${product.index}")" class="text-red-500 hover:text-red-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                        class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div> `

    })

    return displayProductsWithHTML



}

function removeCartItem(id){

}
