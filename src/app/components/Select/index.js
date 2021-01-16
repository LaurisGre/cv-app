import './index.css';

function Select({ children, onChange }) {
    return <select onChange={onChange}>
        {children.map(option =>
            <option
                key={option.value}
                value={option.value}
            >
                {option.text}
            </option>)}
    </select>
};

export default Select;