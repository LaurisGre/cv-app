import Select from '../Select';
import './index.css';

function Navigation() {
    const selectors = [{
        value: "en",
        children: "english",
    },
    {
        value: "lt",
        children: "lietuviškai",
    }];


    return <nav>
        <Select>{selectors}</Select>
    </nav>
}

export default Navigation;