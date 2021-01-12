import './index.css';

function Select({ children }) {
    return <select>
        {children.map(option => <option value={option.valau}>{option.children}</option>)}
    </select>
};

export default Select;