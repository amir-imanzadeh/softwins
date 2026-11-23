
"use client";

import { useState } from "react";
import "./styles.css";

export default function login() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
      remember
    };

    console.log(data);

    // اتصال به API ورود را اینجا انجام می‌دهیم.
  }

  return (
    <main className="login-page" dir="rtl">
      <form className="login-card" onSubmit={handleSubmit}>

        <div className="login-brand">
          <div className="brand-icon">S</div>
          <h1>Softwins</h1>
          <p>Welcome back to your workspace</p>
        </div>

        <div className="login-heading">
          <h2>ورود به حساب کاربری</h2>
          <p>برای ادامه، اطلاعات حساب خود را وارد کنید.</p>
        </div>

        <div className="login-fields">

          <div className="login-field">
            <input
              type="text"
              name="email"
              placeholder=" "
              autoComplete="username"
              required
            />
            <label>ایمیل یا نام کاربری</label>
            <span className="field-icon">✉</span>
          </div>

          <div className="login-field">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder=" "
              autoComplete="current-password"
              required
            />
            <label>رمز عبور</label>

            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={
                showPassword ? "مخفی کردن رمز" : "نمایش رمز"
              }
            >
              {showPassword ? "◉" : "◎"}
            </button>
          </div>

        </div>

        <div className="login-options">
          <label className="remember-option">
            <input
              type="checkbox"
              checked={remember}
              onChange={(event) => setRemember(event.target.checked)}
            />
            <span>مرا به خاطر بسپار</span>
          </label>

          <a href="/forgot-password">
            فراموشی رمز عبور؟
          </a>
        </div>

        <button type="submit" className="login-submit">
          ورود به حساب
        </button>

        <div className="login-register">
          <span>حساب کاربری ندارید؟</span>
          <a href="/register">ثبت‌نام کنید</a>
        </div>

        <footer className="login-footer">
          SOFTWINS · YOUR DEVELOPER SPACE
        </footer>

      </form>
    </main>
  );
}
