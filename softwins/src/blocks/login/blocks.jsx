/* blocks.jsx */
"use client";
import { useSearchParams, useRouter } from "next/navigation";
import styles from "./styles/loginform.module.css";
import { FLSB, showFilds } from "./artery";
import { useEffect, useState } from "react";

// FLSB => Functionality of the Login and Sign-up Buttons
function BlockLoginForm() {
    const params = useSearchParams();
    let type = params.get("type");
    const ur = useRouter()
    function changeTypeOfForm(type){
        ur.push(`/login?type=${type}`)
    }

    const [fildNumber,setFildNumber] = useState(1)

    if(type === `login`|| type===null){ 
        return (

            <div key={type} className={styles.blockLoginForm}>
                <form onSubmit={(event) => FLSB(event, "login")}>
                    <p>login</p>
                    <input
                        type="text"
                        name="usernameOrEmail"
                        placeholder="Username or email"
                        required
                    /><br/>

                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        required
                    /><br/>

                    <button type="submit">login</button><br/>
                </form>
                <div className={styles.links}>
                    <p>Don't have an account?</p>
                    <button onClick={()=>changeTypeOfForm("signup")}>sign up</button>
                </div>
            </div>

        );
    }
    else if(type === `signup`){ 
        return (
            <div key={type} className={styles.blockLoginForm}>
                <form className={styles.signupForm} onSubmit={(event) => FLSB(event, type)}>
                    <p>sign up</p>
                    <div className={styles.inputDiv}>
                        <div className={`${styles.inputn1} ${fildNumber !== 1 ? styles.hidden : ""}`}>
                            <p>
                                what is your first name?
                            </p>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="Username or email"
                                required
                            />
                            <p>
                                what is your last name?
                            </p>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Username or email"
                                required
                            />
                        </div>
                        <div className={`${styles.inputn2} ${fildNumber !== 2 ? styles.hidden : ""}`}>
                            <p>
                                what is your email address?
                            </p>
                            <input
                                type="text"
                                name="email"
                                placeholder="Username or email"
                                required
                            />
                        </div>
                        <div className={`${styles.inputn3} ${fildNumber !== 3 ? styles.hidden : ""}`}>
                            <p>
                                enter your password
                            </p>
                            <input
                                type="text"
                                name="password"
                                placeholder="Username or email"
                                required
                            />
                        </div>
                        <div className={`${styles.inputn4} ${fildNumber !== 4 ? styles.hidden : ""}`}>
                            <p>
                                what is your username?
                            </p>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username or email"
                                required
                            />
                            <p>
                                what is your phone address?
                            </p>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Username or email"
                                required
                            />
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <button type="button" onClick={()=>nextFildButton("before",setFildNumber,fildNumber)} className={`${styles.inputn2} ${fildNumber === 1 ? styles.hidden : ""}`}>before</button>
                        <button type="button" onClick={()=>nextFildButton("after",setFildNumber,fildNumber)} className={`${styles.inputn2} ${fildNumber === 4 ? styles.hidden : ""}`}>next</button>
                        <button type="submit" className={`${styles.inputn2} ${fildNumber !== 4 ? styles.hidden : ""}`}>sign up</button>
                    </div>
                </form>
                <div className={styles.links}>
                    <p>Do you already have an account?</p>
                    <button onClick={()=>changeTypeOfForm("login")}>login</button>
                </div>
            </div>
        );
    }
}

function nextFildButton(type,setFildNumber,fildNumber){
    if(type === "after"){
        setFildNumber(fildNumber+1)
    }
    else if(type === "before"){
        setFildNumber(fildNumber-1)
    }
}


export {
    BlockLoginForm,

}