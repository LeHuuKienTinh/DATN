import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaSearch, FaBell } from "react-icons/fa";
import "./NavBarUserHome.scss";

const NavBarUserHome = () => {
    return (
        <>
            <Navbar expand="lg" className="userhome-navbar">
                <Container>
                    <Navbar.Brand href="/">
                        DTube
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="1">Trang chủ</Nav.Link>
                        <Nav.Link href="2">Series</Nav.Link>
                        <Nav.Link href="3">Phim</Nav.Link>
                        <Nav.Link href="4">Mới & Phổ biến</Nav.Link>
                        <Nav.Link href="5">Danh sách của tôi</Nav.Link>
                        <Nav.Link href="6">Duyệt tìm theo ngôn ngữ</Nav.Link>
                    </Nav>
                    <div className="nav-icons">
                        <FaSearch className="icon" />
                        <FaBell className="icon" />
                        <div className="profile-icon">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Profile" />
                        </div>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBarUserHome;
