import { Accordion } from "react-bootstrap";
import './FAQ.scss'
const FAQ = () => {
    return (
        <>
            <Accordion defaultActiveKey="">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Netflix là gì?</Accordion.Header>
                    <Accordion.Body>
                        Netflix là dịch vụ phát trực tuyến mang đến đa dạng các loại series, phim, anime, phim tài liệu đoạt giải thưởng và nhiều nội dung khác trên hàng nghìn thiết bị có kết nối Internet.

                        Bạn có thể xem bao nhiêu tùy thích, bất cứ lúc nào bạn muốn mà không gặp phải một quảng cáo nào – tất cả chỉ với một mức giá thấp hàng tháng. Luôn có những nội dung mới để bạn khám phá và những series, phim mới được bổ sung mỗi tuần!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Tôi phải trả bao nhiêu tiền để xem Netflix?</Accordion.Header>
                    <Accordion.Body>
                        Xem Netflix trên điện thoại thông minh, máy tính bảng, TV thông minh, máy tính xách tay hoặc thiết bị phát trực tuyến, chỉ với một khoản phí cố định hàng tháng. Các gói dịch vụ với mức giá từ 70.000 ₫ đến 260.000 ₫ mỗi tháng. Không phụ phí, không hợp đồng.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default FAQ;