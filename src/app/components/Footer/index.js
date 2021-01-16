import FooterCard from "../FooterCard";
import "./index.css";

function Footer({ content }) {
    return <footer>
        <hr></hr>
        <section className="contacts">
            {content.cards.map(card => <FooterCard key={card.title}>{card}</FooterCard>)}
        </section>
    </footer>
};

export default Footer;