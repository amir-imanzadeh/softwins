import {NextResponse} from "next/server"

export function proxy(request) {
    const { pathname } = request.nextUrl;

    let loginConditions = false;
    // return NextResponse.redirect(new URL("/amir",request.url))

    if (loginConditions){
        if (pathname==="/login" || pathname==="/register") return NextResponse.redirect(new URL("/dashboard",request.url));
    }
    else{
        if (pathname==="/dashboard") return NextResponse.redirect(new URL("/login",request.url));
    }
}