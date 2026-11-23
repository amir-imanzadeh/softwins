/* client_component.jsx */
"use client";

import { loginAction } from "./artery";
import { redirect } from "next/navigation";

// FLSB => Functionality of the Login and Sign-up Buttons
async function FLSB(event, type) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)

    function validate(text) {
        return /^[a-zA-Z0-9@._-]+$/.test(text);
    }

    if(type==="login"||type===null){
        const usernameOrEmail = formData.get("usernameOrEmail");
        const password = formData.get("password");

        if(!validate(usernameOrEmail)){
            alert("username is not ok")
            return("error")
        }
        
        const userInfo = {
            usernameOrEmail,
            password,
            type: "login"
        };
        const response = await loginAction(userInfo);
        console.log(response.info.message)
        if (response?.result) {
            redirect("/dashboard");
        }
    }
    else if(type==="signup"){

        
        const userInfo = {
            firstName : formData.get("firstName"),
            lastName : formData.get("lastName"),
            username : formData.get("username"),
            email : formData.get("email"),
            password : formData.get("password"),
            phone : formData.get("phone"),
            type: type
        };
        const response = await loginAction(userInfo);
        alert(response.info.message)
        if (response?.result) {
            redirect("/dashboard");
        }
    }
}

export {
    FLSB,
}