import Link from "../Link";

function FooterCard({ children }) {
    return <div>
        <p>{children.title}</p>
        {children.links.map(link => <Link text={link.text}></Link>)}
    </div>
};

export default FooterCard;