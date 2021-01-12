import Link from "../Link";
import "./index.css";

function FooterCard({ children }) {
    return <div>
        <p>{children.title}</p>
        {children.links.map(link => <Link text={link.text}></Link>)}
    </div>
};

export default FooterCard;