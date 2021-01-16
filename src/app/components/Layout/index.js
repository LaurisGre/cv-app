import './index.css';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

function Layout({ content, onChange }) {
    return <div className="wrapper">
        <Header
            content={content.header}
            onChange={onChange}
        />
        <Main
            content={content.main}
        />
        <Footer
            content={content.footer}
        />
    </div>
};

export default Layout;