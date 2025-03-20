import React, { useState } from "react";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import "./HomePage.scss";
import CardFilm from "./CardFilm";
import ReasonInvite from "./ReasonInvite";
import FAQ from "./FAQ";
import FooterHomePage from "./FooterHomePage";
import { NavLink } from 'react-router-dom';

const HomePage = () => {
    const [language, setLanguage] = useState("Tiếng Việt")

    const handleChangeLanguage = (eventKey) => {
        setLanguage(eventKey === "VI" ? "Tiếng Việt" : "English")
    }
    return (
        <>
            <div className="background-container">
                <Navbar expand="lg" className="navbar">
                    <Container>
                        <Navbar.Brand href="/">DTube</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Dropdown onSelect={handleChangeLanguage}>
                                    <Dropdown.Toggle  >
                                        {language}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1" eventKey="VI">Tiếng Việt</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" eventKey="ENG">English</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <NavLink to="/login" className='nav-link'>Đăng nhập</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className="middle-content md-auto">
                    <div className="middle-title-top">
                        <p>Phim, series không giới hạn và nhiều nội dung khác</p>
                    </div>
                    <div className="middle-title-mid">
                        <p>Giá từ 70.000 ₫. Hủy bất kỳ lúc nào.</p>
                    </div>
                    <div className="middle-title-bot">
                        <p>Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của bạn.</p>
                    </div>
                    <div className="search-box">
                        <input placeholder="Địa chỉ email" className="search-input" name="text" type="text" />
                        <button className="btn-start">
                            <span className="text-start">Bắt đầu</span>
                            <svg className="arrow-start" viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="treding-movie-container">
                <div className="container">
                    <div className="title">
                        Hiện đang thịnh hành
                    </div>
                    <div className="card-films">
                        <CardFilm />
                    </div>
                </div>
            </div>
            <div className="reason-invite">
                <div className="container">
                    <div className="title">
                        Thêm lý do để tham gia
                    </div>
                    <div className="card-films">
                        <ReasonInvite />
                    </div>
                </div>
            </div>
            <div className="faq-content">
                <div className="container">
                    <div className="title">
                        Câu hỏi thường gặp
                    </div>
                    <div className="faq">
                        <FAQ />
                    </div>
                </div>
            </div>
            <div className="input-email">
                <div className="title">
                    Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của bạn.
                </div>
                <div className="search-box">
                    <input placeholder="Địa chỉ email" className="search-input" name="text" type="text" />
                    <button className="btn-start">
                        <span className="text-start">Bắt đầu</span>
                        <svg className="arrow-start" viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
                    </button>
                </div>
            </div>
            <div className="footer-homepage">
                <FooterHomePage />
            </div>
        </>

    );
};

export default HomePage;
