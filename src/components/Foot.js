import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './css/foot.css';

export default function Foot() {
    return (
        <div className="footer">
            <div className="contact">
                <div className="network">
                    <div className='logoooo'>
                        <img src={require('./image/logo.png')} alt='logo' />
                    </div>
                    <p>Chuỗi nhà hàng số đầu tiên tại Việt Nam phục vụ món giao đi tiêu chuẩn cao</p>
                    <div className="icons">
                        <FacebookIcon sx={{ padding: 0 }} />
                        <InstagramIcon sx={{ padding: 0 }} />
                        <YouTubeIcon sx={{ padding: 0 }} />
                        <LinkedInIcon sx={{ padding: 0 }} />
                    </div>
                </div>
                <div className='app'>
                    <h5>Luôn sẵn sàng giao tận nơi</h5>
                    <ul className='app--icon'>
                        <li><img src={require('./image/logo1.png')} alt="1" />AirKitchen</li>
                        <li><img src={require('./image/logo2.png')} alt="2" />ShopeeFood</li>
                        <li><img src={require('./image/logo3.png')} alt="3" />GrabFood</li>
                        <li><img src={require('./image/logo4.png')} alt="4" />Baemin</li>
                        <li><img src={require('./image/logo5.png')} alt="5" />Gojek</li>
                    </ul>
                    <div className='raw'>
                        <li>Hợp tác</li>
                        <li>Mua nhượng quyền</li>
                        <li>Cấp nhượng quyền</li>
                    </div>
                    <div className='raw'>
                        <li>Hỗ trợ</li>
                        <li>Chính sách</li>
                        <li>Điều khoản</li>
                    </div>
                </div>
            </div>
            <div className="trademark">
                <p>Copyright © 2022 AirKitchen</p>
                <div>
                    <img src={require('./image/dk.png')} alt="6" />
                    <img src={require('./image/tem.png')} alt="7" />
                </div>
            </div>
        </div>
    )
}