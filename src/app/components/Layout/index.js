import './index.css';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

function Layout() {
    return <div className="wrapper">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </div>
};

export default Layout;