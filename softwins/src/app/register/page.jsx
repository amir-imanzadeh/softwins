
"use client";

import { useState } from "react";
import "./styles.css";

export default function register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const username = form.get("username");
    const email = form.get("email");
    const password = form.get("password");
    const confirmPassword = form.get("confirmPassword");

    if (password !== confirmPassword) {
      setError("رمز عبور و تکرار آن یکسان نیستند.");
      return;
    }

    if (!terms) {
      setError("ابتدا باید قوانین را بپذیرید.");
      return;
    }

    setError("");

    const data = {
      username,
      email,
      password
    };

    console.log(data);

    // اتصال به API ثبت‌نام در این قسمت
  }

  return (
    <main className="register-page" dir="rtl">

      <form className="register-card" onSubmit={handleSubmit}>

        <header className="register-brand">
          <div className="register-logo">S</div>
          <h1>Softwins</h1>
          <p>Build. Connect. Create.</p>
        </header>

        <div className="register-heading">
          <h2>ایجاد حساب کاربری</h2>
          <p>به جامعه توسعه‌دهندگان Softwins بپیوندید.</p>
        </div>

        <div className="register-fields">

          <div className="register-field">
            <input
              type="text"
              name="username"
              placeholder=" "
              autoComplete="username"
              required
              minLength={3}
            />
            <label>نام کاربری</label>
            <span>♙</span>
          </div>

          <div className="register-field">
            <input
              type="email"
              name="email"
              placeholder=" "
              autoComplete="email"
              required
            />
            <label>آدرس ایمیل</label>
            <span>✉</span>
          </div>

          <div className="register-field">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder=" "
              autoComplete="new-password"
              required
              minLength={8}
            />
            <label>رمز عبور</label>

            <button
              type="button"
              className="register-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "◉" : "◎"}
            </button>
          </div>

          <div className="register-field">
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              placeholder=" "
              autoComplete="new-password"
              required
            />
            <label>تکرار رمز عبور</label>

            <button
              type="button"
              className="register-toggle"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? "◉" : "◎"}
            </button>
          </div>

        </div>

        <label className="register-terms">
          <input
            type="checkbox"
            checked={terms}
            onChange={(event) => setTerms(event.target.checked)}
          />

          <span>
            با <a href="/terms">قوانین و شرایط</a> موافقم.
          </span>
        </label>

        {error && (
          <p className="register-error">{error}</p>
        )}

        <button className="register-submit" type="submit">
          ایجاد حساب کاربری
        </button>

        <div className="register-login">
          <span>قبلاً حساب ساخته‌اید؟</span>
          <a href="/login">وارد شوید</a>
        </div>

        <footer className="register-footer">
          SOFTWINS · YOUR DEVELOPER SPACE
        </footer>

      </form>

    </main>
  );
}
