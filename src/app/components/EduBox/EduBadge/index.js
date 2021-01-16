import "./index.css";

function Edubadge({ children, index }) {
    return <div className="education-item">
        {index !== 0 ? <hr></hr> : ''}
        {Object.values(children).map((text, i) => 
            <span key={Object.keys(children)[i]}>{text}</span>
        )}
    </div>
}

export default Edubadge;