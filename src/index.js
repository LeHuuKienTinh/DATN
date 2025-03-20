import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Auth/Login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import Register from './components/Auth/Register/Register';
import BothAuth from './components/Auth/BothAuth';
import UserHome from './components/UserHome/UserHome';
// import { jwtDecode } from 'jwt-decode';

// Hàm kiểm tra xem người dùng đã đăng nhập hay chưa
// const isAuthenticated = () => {
//   const token = localStorage.getItem('authToken');
//   if (!token) {
//     return false; // Không có token, người dùng chưa đăng nhập
//   }

//   try {
//     // Giải mã token và kiểm tra thời gian hết hạn
//     const decoded = jwtDecode(token);
//     const currentTime = Date.now() / 1000; // Thời gian hiện tại tính bằng giây
//     if (decoded.exp < currentTime) {
//       return false; // Token đã hết hạn
//     }
//     return true; // Token hợp lệ
//   } catch (error) {
//     console.error("Token không hợp lệ", error);
//     return false; // Token không hợp lệ
//   }
// };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <BrowserRouter>
      <Routes>
        {/* Route cho trang chủ, tất cả người dùng đều có thể truy cập */}
        <Route path="/" element={<HomePage />} />

        {/* Route cho trang đăng nhập và đăng ký */}
        <Route element={<BothAuth />}>
          <Route index path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* Route bảo vệ cho trang UserHome */}
        <Route
          path="/userhome" element={<UserHome />} />
        {/* element={isAuthenticated() ? <UserHome /> : <Login />} // Chỉ cho phép truy cập nếu đã đăng nhập */}

      </Routes>
    </BrowserRouter>
    {/* </React.StrictMode> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
