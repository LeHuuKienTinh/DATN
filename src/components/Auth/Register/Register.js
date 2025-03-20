import React, { useState } from "react";
import "./Register.scss"; // Import SCSS file
import { NavLink } from "react-router-dom";

const Register = () => {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.password !== form.confirmPassword) {
            alert("Mật khẩu không khớp!");
            return;
        }
        console.log("Đăng ký thành công:", form);
    };

    return (
        <>
            <div className="register">
                <div className="register-container">
                    <form className="form" onSubmit={handleSubmit}>
                        <h2 className="title">Đăng ký</h2>
                        <div class="input-group">
                            <label>Email</label>
                            <input name="email" type="email" placeholder="Nhập email của bạn..." value={form.email} onChange={handleChange} />
                        </div>
                        <div class="input-group">
                            <label>Tên người dùng</label>
                            <input type="text" placeholder="Nhập tên người dùng..." value={form.username} onChange={handleChange} />
                        </div>
                        <div class="input-group">
                            <label>Mật khẩu</label>
                            <input type="password" placeholder="Nhập mật khẩu..." value={form.password} onChange={handleChange} />
                        </div>
                        <div class="input-group">
                            <label>Xác nhận mật khẩu</label>
                            <input type="password" placeholder="Nhập lại mật khẩu" value={form.confirmPassword} onChange={handleChange} />
                        </div>

                        <button className="submit-button" type="submit">Đăng ký</button>
                        <p className="login-text">
                            Đã có tài khoản? <NavLink to="/login">Đăng nhập ngay!</NavLink>
                        </p>
                    </form>
                </div>

            </div>
        </>
    );
};

export default Register;
