import FooterCard from "../FooterCard";
import "./index.css";

function Footer(params) {
    const footerContent = [
        {
            title: "ADDRESS",
            links: [
                {
                    text: "Street name",
                },
                {
                    text: "City name",
                },
            ],
        },
        {
            title: "CONTACTS",
            links: [
                {
                    text: "+370 123 45678",
                },
                {
                    text: "email@email.com",
                },
            ],
        },
        {
            title: "SOCIAL",
            links: [
                {
                    text: "LinkedIn/melonMan",
                },
                {
                    text: "Twatter/melonMan",
                },
            ],
        },
    ];

    return <footer>
        <hr></hr>
        <section className="contacts">
            {footerContent.map(card => <FooterCard>{card}</FooterCard>)}
        </section>
    </footer>
};

export default Footer;