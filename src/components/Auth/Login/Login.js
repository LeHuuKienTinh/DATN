
import './Login.scss'
import { NavLink } from 'react-router-dom';
const Login = () => {
    return (
        <>
            <div className='login'>
                <div class="login-container">
                    <div class="login-box">
                        <h2 class="title">Đăng nhập</h2>
                        <form>
                            <div class="input-group">
                                <label>Email hoặc số điện thoại di động</label>
                                <input type="email" placeholder="Nhập email hoặc số điện thoại" />
                            </div>
                            <div class="input-group">
                                <label>Mật khẩu</label>
                                <input type="password" placeholder="Nhập mật khẩu" />
                            </div>
                            <button class="login-btn">Đăng nhập</button>
                            <div class="divider">HOẶC</div>
                            <button class="code-login-btn">Sử dụng mã đăng nhập</button>
                            <a href="facebook.com" class="forgot-password">Bạn quên mật khẩu?</a>
                            <div class="remember-me">
                                <input type="checkbox" id="remember" />
                                <label for="remember">Ghi nhớ tôi</label>
                            </div>
                            <p class="register">Bạn mới sử dụng Netflix? <NavLink to="/register"><a href="register">Đăng ký ngay.</a></NavLink></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;