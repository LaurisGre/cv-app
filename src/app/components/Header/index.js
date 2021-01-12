import Hero from '../Hero';
import Navigation from '../Navigation';
import './index.css';

function Header() {
    return <header>
        <Navigation></Navigation>
        <Hero></Hero>
    </header>
};

export default Header;