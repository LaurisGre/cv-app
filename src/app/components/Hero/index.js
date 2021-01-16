import './index.css';

function Hero({ content }) {
    return <section className="hero">
        <p className="hero-title">{content.name}</p>
        <p className="hero-position">{content.title}</p>
    </section>
};

export default Hero;