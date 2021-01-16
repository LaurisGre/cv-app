import Select from '../Select';
import './index.css';

function Navigation({ content, onChange }) {
    return <nav>
        {<Select onChange={onChange}>{content.selectors}</Select>}
    </nav>
}

export default Navigation;