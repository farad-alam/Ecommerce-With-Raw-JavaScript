import {checkAuthentication, 
    userLogOut, userLogin, insertNavBar,
    isAuthenticated, showNotification,
    getUserDetails, 
    handleSignUpSubmit,
    } from "./main.js"

document.addEventListener("DOMContentLoaded", insertNavBar)

document.addEventListener("DOMContentLoaded", checkAuthentication)


window.userLogOut = userLogOut;
window.userLogin = userLogin;
window.isAuthenticated = isAuthenticated;
window.getUserDetails = getUserDetails;
window.handleSignUpSubmit = handleSignUpSubmit;
window.showNotification = showNotification;

