import Link from "../Link";
import "./index.css";


function List({ children = [] }) {
    return <ul>
        {children.map(li => <li key={li.text}>
            <Link icon={li.icon} text={li.text}></Link>
        </li>)}
    </ul>
};

export default List;