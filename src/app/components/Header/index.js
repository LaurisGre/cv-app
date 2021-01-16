import Hero from '../Hero';
import Navigation from '../Navigation';

function Header({content, onChange}) {
    return <header>
        <Navigation
            content={content.navigation}
            onChange={onChange}
        />
        <Hero
            content={content.hero}
        />
    </header>
};

export default Header;