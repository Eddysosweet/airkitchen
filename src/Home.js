import Title from './components/Title';
import Tool from './components/Tool';
import ListMenu from './components/ListMenu';
import SlideShow from './components/SlideShow';
import ListItem from './components/ListItem';
import Voucher from './components/Voucher';
import Food from './components/HotFood';
import New from './components/News';
import Foot from './components/Foot';
import './components/css/header.css';
export default function Home() {
    return (
        <>
            <header className="app--header">
                <Title />
                <Tool />
                <ListMenu />
            </header>
            <nav>
                <SlideShow />
            </nav>
            <nav>
                <ListItem title={"! Deal hót hòn họt !"} />
            </nav>
            <nav>
                <ListItem title={"Top TEN bán chạy"} />
            </nav>
            <Voucher />
            <Food id="0" />
            <Food id="1" />
            <Food id="2" />
            <Food id="3" />
            <Food id="2" />
            <Food id="1" />
            <footer>
                <New />
                <Foot />
            </footer>
        </>
    )
}