import Edubadge from "./EduBadge";

function EduBox({ children }) {
    return <div>
        {children.map((entry, i) =>
            <Edubadge key={i} index={i}>{entry}</Edubadge>)}
    </div>
}

export default EduBox;