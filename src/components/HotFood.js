import './css/food.css';
export default function Food({ id }) {
    const imgs = [require('./image/image1.jpg'), require('./image/image2.png'), require('./image/image3.png'), require('./image/image4.png')]
    const array = [
        {
            src: require('./image/1.jpg'),
            store: 'Cơm Tấm Quận 1',
            name: 'Bún thang lươn',
            newcost: '128.000đ',
            oldcost: '128.000đ'
        },
        {
            src: require('./image/2.jpg'),
            store: 'Cơm Tấm Quận 1',
            name: 'Bún thang lươn',
            newcost: '128.000đ',
            oldcost: '128.000đ'
        },
        {
            src: require('./image/3.png'),
            store: 'Cơm Tấm Quận 1',
            name: 'Bún thang lươn',
            newcost: '128.000đ',
            oldcost: '128.000đ'
        },
        {
            src: require('./image/4.png'),
            store: 'Cơm Tấm Quận 1',
            name: 'Bún thang lươn',
            newcost: '128.000đ',
            oldcost: '128.000đ'
        }]

    return (
        <div className='box--item'>
            <div className='banner'>
                <img src={imgs[id]} alt="fooddđ" />
            </div>
            <div className="list--item">
                {
                    array.map((course) => (
                        <div className="infor--item" key={course.src}>
                            <img src={course.src} alt={course.name} />
                            <span>{course.store}</span>
                            <h4>{course.name}</h4>
                            <p>{course.newcost}<span>{course.oldcost}</span></p>
                            <button>Đặt món</button>
                        </div>
                    ))
                }
            </div>
            <button>Đặt món ngay</button>
        </div>
    )
}