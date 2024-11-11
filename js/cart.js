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

    let cartItems = isAvilableCartItem()
    // console.log(cartItems)
    if (cartItems) {
        renderCartProducts(cartItems)
    } else {
        productHtml ="No product to show"
    }


}


// check the cart item is avilable or not and then return cart
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


function genarateProductHTMLForCart(cartItems){
     let displayProductsWithHTML = ''
     cartItems.forEach((item, index) =>{
        let product = products[item.productId]
        // console.log(product)
        displayProductsWithHTML += `<div class="flex items-center space-x-6 border-b pb-6">
                                                <!-- Product Image -->
                                                <img src="${product.image}" alt="Product Image" class="w-20 h-20 rounded object-cover">
                                
                                                <!-- Product Details -->
                                                <div class="flex-grow">
                                                    <h2 class="text-lg font-semibold text-gray-800">${product.title}</h2>
                                                    <p class="text-gray-600">${product.description}</p>
                                                </div>
                                
                                                <!-- Quantity Control & Price -->
                                                <div class="flex items-center space-x-4">
                                                    <button onclick="increaseQuantity(${index})" class="text-gray-600 hover:text-gray-800">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                                                        </svg>
                                                    </button>
                                                    <p id="quantity-1" class="text-gray-900 font-medium">${item.quantity}</p>
                                                    <button onclick="increaseQuantity(${index})" class="text-gray-600 hover:text-gray-800">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                            class="w-6 h-6">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16" />
                                                        </svg>
                                                    </button>
                                                </div>
                                
                                                <!-- Product Price -->
                                                <p class="text-gray-900 font-semibold">$${product.price}</p>
                                
                                                <!-- Remove Button -->
                                                <button onclick="removeCartItem(${index})" class="text-red-500 hover:text-red-700">
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
    if (isAuthenticated()) {
        let cartItems = isAvilableCartItem()
        cartItems.splice(id, 1)
        console.log("item remove successfully!")
        let userObject = getUserDetails()
        userObject.cartItems = cartItems;
        localStorage.setItem("userDetails", JSON.stringify(userObject))

        let productHtml = genarateProductHTMLForCart(cartItems)
        const displayProductSection = document.getElementById("cart-items")

        displayProductSection.innerHTML = productHtml

        // displayProductSection.insertAdjacentHTML("beforeend", productHtml)

    }
}



function renderCartProducts(cartItems){
    const displayProductSection = document.getElementById("cart-items")
    
    let productHtml = genarateProductHTMLForCart(cartItems)
    if (productHtml) {
        displayProductSection.innerHTML = productHtml
    } else{
        displayProductSection.innerHTML = noDataAvilableHTML()
    } 
}

function noDataAvilableHTML(){
    return `
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-50">
    <div class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
        <!-- Icon -->
        <div class="flex items-center justify-center w-16 h-16 rounded-full bg-red-100">
            <svg class="w-8 h-8 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-3-3v6m9-9a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>

        <!-- Message -->
        <h2 class="text-xl font-semibold text-gray-700">No Data Available</h2>
        <p class="text-gray-500 text-center">It seems there is no data to display here. Please check back later or reload the page.</p>

        <!-- Refresh Button -->
        <button onclick="location.reload()" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-150 shadow-md">
            Refresh
        </button>
    </div>
</div>

    `
}



function increaseQuantity(index){

    let cartItems = isAvilableCartItem()
    if (cartItems) {
        cartItems[index].quantity += 1
        renderCartProducts(cartItems)
    }

}


window.removeCartItem = removeCartItem;
window.increaseQuantity = increaseQuantity;