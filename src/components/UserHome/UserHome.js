import NavBarUserHome from "./NavBarUserHome";
import FooterHomePage from "../HomePage/FooterHomePage"
import MainContent from "./MainContent/MainContent";
import './UserHome'
const UserHome = () => {
    return (
        <>
            <div className="navbar-userhome">
                <NavBarUserHome />
            </div>
            <div className="main-content" style={{ height: '100%', backgroundColor: 'black', marginTop: '72px' }}>
                <MainContent />
            </div>
            <div className="footer-userhome">
                <FooterHomePage />
            </div>
        </>
    )
}

export default UserHome;