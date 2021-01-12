import "./index.css";

function JobCard({ children }) {
    return (<div className="experience-item">
        <div className="experience-head">
            <span>{children.position}</span>
            <span>{children.company}</span>
            <span>{children.year}</span>
        </div>
        <p className="experience-text">{children.dscr}</p>
        <ul className="experience-list">{children.list.map(li => <li>{li}</li>)}</ul>
    </div>);
}

export default JobCard;