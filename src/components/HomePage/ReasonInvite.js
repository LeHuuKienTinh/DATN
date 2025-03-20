
import './ReasonInvite.scss'
const ReasonInvite = () => {

    const content = [
        {
            header: 'Thưởng thức trên TV của bạn',
            body: 'Xem trên TV thông minh, Playstation, Xbox, Chromecast, Apple TV, đầu phát Blu-ray và nhiều thiết bị khác.'
        },
        {
            header: 'Tải xuống nội dung để xem ngoại tuyến',
            body: 'Lưu lại những nội dung yêu thích một cách dễ dàng và luôn có thứ để xem.'
        },
        {
            header: 'Xem ở mọi nơi',
            body: 'Phát trực tuyến không giới hạn phim và series trên điện thoại, máy tính bảng, máy tính xách tay và TV.'
        },
        {
            header: 'Tạo hồ sơ cho trẻ em',
            body: 'Đưa các em vào những cuộc phiêu lưu với nhân vật được yêu thích trong một không gian riêng. Tính năng này đi kèm miễn phí với tư cách thành viên của bạn.'
        }
    ]
    return (
        <>
            {content.map((item, index) => {
                return (
                    <div key={index} className="card-reason-invite">
                        <div className="bg">
                            <div className='card-header'>
                                {item.header}
                            </div>
                            <div className='card-content'>
                                {item.body}
                            </div>
                        </div>
                        <div className="blob"></div>
                    </div>
                )
            })}
        </>
    )
}

export default ReasonInvite;