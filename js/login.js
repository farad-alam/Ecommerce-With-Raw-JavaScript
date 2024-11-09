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