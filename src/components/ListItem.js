import './css/listitem.css'
export default function ListItem({ title }) {
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
        },
        {
            src: require('./image/5.png'),
            store: 'Cơm Tấm Quận 1',
            name: 'Bún thang lươn',
            newcost: '128.000đ',
            oldcost: '128.000đ'
        },
        {
            src: require('./image/6.png'),
            store: 'Cơm Tấm Quận 1',
            name: 'Bún thang lươn',
            newcost: '128.000đ',
            oldcost: '128.000đ'
        },
        {
            src: require('./image/7.jpg'),
            store: 'Cơm Tấm Quận 1',
            name: 'Bún thang lươn',
            newcost: '128.000đ',
            oldcost: '128.000đ'
        },
        {
            src: require('./image/8.png'),
            store: 'Cơm Tấm Quận 1',
            name: 'Bún thang lươn',
            newcost: '128.000đ',
            oldcost: '128.000đ'
        },
        {
            src: require('./image/9.png'),
            store: 'Cơm Tấm Quận 1',
            name: 'Bún thang lươn',
            newcost: '128.000đ',
            oldcost: '128.000đ'
        },
        {
            src: require('./image/10.png'),
            store: 'Cơm Tấm Quận 1',
            name: 'Bún thang lươn',
            newcost: '128.000đ',
            oldcost: '128.000đ'
        },
        {
            src: require('./image/11.png'),
            store: 'Cơm Tấm Quận 1',
            name: 'Bún thang lươn',
            newcost: '128.000đ',
            oldcost: '128.000đ'
        },
        {
            src: require('./image/12.png'),
            store: 'Cơm Tấm Quận 1',
            name: 'Bún thang lươn',
            newcost: '128.000đ',
            oldcost: '128.000đ'
        },
        {
            src: require('./image/13.png'),
            store: 'Cơm Tấm Quận 1',
            name: 'Bún thang lươn',
            newcost: '128.000đ',
            oldcost: '128.000đ'
        },
        {
            src: require('./image/14.png'),
            store: 'Cơm Tấm Quận 1',
            name: 'Bún thang lươn',
            newcost: '128.000đ',
            oldcost: '128.000đ'
        },
        {
            src: require('./image/15.png'),
            store: 'Cơm Tấm Quận 1',
            name: 'Bún thang lươn',
            newcost: '128.000đ',
            oldcost: '128.000đ'
        },
        {
            src: require('./image/16.jpg'),
            store: 'Cơm Tấm Quận 1',
            name: 'Bún thang lươn',
            newcost: '128.000đ',
            oldcost: '128.000đ'
        },
        {
            src: require('./image/17.png'),
            store: 'Cơm Tấm Quận 1',
            name: 'Bún thang lươn',
            newcost: '128.000đ',
            oldcost: '128.000đ'
        },
        {
            src: require('./image/18.png'),
            store: 'Cơm Tấm Quận 1',
            name: 'Bún thang lươn',
            newcost: '128.000đ',
            oldcost: '128.000đ'
        },
        {
            src: require('./image/19.jpg'),
            store: 'Cơm Tấm Quận 1',
            name: 'Bún thang lươn',
            newcost: '128.000đ',
            oldcost: '128.000đ'
        }
    ]
    return (
        <div className="main--item">
            <h2>{title}</h2>
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
        </div>
    )
}