import { Container, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import FooterHomePage from "../HomePage/FooterHomePage";

const BothAuth = () => {
    return (
        <>
            <div className="background-container">
                <Navbar expand="lg" className="navbar">
                    <Container>
                        <Navbar.Brand href="/">DTube</Navbar.Brand>
                    </Container>
                </Navbar>
                <>
                    <Outlet />
                </>
            </div>
            <div className='footer'>
                <FooterHomePage />
            </div>
        </>
    )
}

export default BothAuth;