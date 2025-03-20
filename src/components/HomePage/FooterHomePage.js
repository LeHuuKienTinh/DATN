import './FooterHomePage.scss'
const FooterHomePage = () => {
    const footerLinks = [
        ["Câu hỏi thường gặp", "Quan hệ với nhà đầu tư", "Quyền riêng tư", "Kiểm tra tốc độ"],
        ["Trung tâm trợ giúp", "Việc làm", "Tùy chọn cookie", "Thông báo pháp lý"],
        ["Tài khoản", "Các cách xem", "Thông tin doanh nghiệp", "Chỉ có trên Netflix"],
        ["Trung tâm đa phương tiện", "Điều khoản sử dụng", "Liên hệ với chúng tôi"],
    ];

    // const linkIndex = [];

    return (
        <footer className="footer">
            <div className='question-yourself'>
                <a href='facebook.com'>Bạn có câu hỏi? Liên hệ với chúng tôi!</a>
            </div>
            <div className="footer-container">
                {footerLinks.map((column, colIndex) => (
                    <div className="footer-column" key={colIndex}>
                        {column.map((link, linkIndex) => (
                            <a href="facebook.com" key={linkIndex}>{link}</a>
                        ))}
                    </div>
                ))}
            </div>
        </footer>
    );
}

export default FooterHomePage;