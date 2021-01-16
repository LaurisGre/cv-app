import Link from "../Link";

function FooterCard({ children }) {
    return <div>
        <p>{children.title}</p>
        {children.links.map(link => <Link key={link.text} text={link.text}/>)}
    </div>
};

export default FooterCard;