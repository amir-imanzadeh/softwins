/* server_component.jsx */
'use server'
import {cookies} from "next/headers"

async function loginAction(userInfo){
    let message = await loginCheck(userInfo);
    if(message.result){
        try{
            const cookieKey = process.env.COOKIE_KEY;
            const cookieStore = await cookies();
            cookieStore.set(cookieKey, message.data.Id, {
                httpOnly:true,
                secure:true,
                sameSite:"lax",
                maxAge:60*60*24,
                path:"/"
            })
            return {
                result:true,
                info:{
                    message : message.data
                }
            };
        }
        catch{
            alert("not ok in cookie");
            return {
                result:false,
                info:{
                    reason : "cookie error",
                    message: "Could not set authentication cookie"
                }
            };

        }
    }

    return message;
}

async function loginCheck(data) {
    try {
        const response = await fetch("http://star_dust_backend:4000/database", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            return {
                result: false,
                info: {
                    reason: "http_error",
                    status: response.status,
                    message: `Server returned HTTP ${response.status}`
                }
            };
        }

        // بررسی نوع محتوای پاسخ
        const contentType = response.headers.get("content-type");

        if (!contentType || !contentType.includes("application/json")) {
            return {
                result: false,
                info: {
                    reason: "invalid_response",
                    message: "The server did not return a JSON response."
                }
            };
        }

        // تبدیل پاسخ JSON به یک شیء جاوااسکریپت
        const result = await response.json();

        // بررسی معتبر بودن ساختار پاسخ
        if (
            result === null ||
            typeof result !== "object" ||
            typeof result.result !== "boolean"
        ) {
            return {
                result: false,
                info: {
                    reason: "invalid_response",
                    message: "The server returned an invalid response structure."
                }
            };
        }

        return result;
    }
    catch (error) {
        return {
            result: false,
            info: {
                reason: "connection_error",
                message: "The request failed because of a network error or an invalid response.",
            }
        };
    }
}

export {
    loginAction,
    loginCheck
}