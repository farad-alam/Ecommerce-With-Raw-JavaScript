import {isAuthenticated, getUserDetails} from "./main.js"



function addToCart(id){
    console.log("add to cart called")
    if (isAuthenticated()) {
        console.log("Can add product to the cart")
    } else {
        console.log("Can Not Add product to the cart")
    }

}

window.addToCart = addToCart;


