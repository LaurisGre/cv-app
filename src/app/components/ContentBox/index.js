import "./index.css";

function ContentBox({ title, children, className = '' }) {
    return <article className={className}>
        <p className="grid--item-title">{title}</p>
        <hr className="grid--item-line"/>
        <div className="grid--item-content">{children}</div>
    </article>
}

export default ContentBox;