import './css/voucher.css'
export default function Voucher() {
    return (
        <div className="voucher">
            <div className="infor">
                <h3>Thích món này thèm món kia?</h3>
                <p>Chọn nhiều món từ nhiều thương hiệu với 1 lượt đặt!</p>
                <button>Đặt món ngay</button>
            </div>
            <img src={require('./image/vch.png')} alt="helooo" />
        </div>
    )
}