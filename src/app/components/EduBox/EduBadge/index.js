import "./index.css";

function Edubadge({ children, index }) {
    return <div className="education-item">
        {index !== 0 ? <hr></hr> : ''}
        {Object.values(children).map((text) => <span>{text}</span>)}
    </div>
}

export default Edubadge;