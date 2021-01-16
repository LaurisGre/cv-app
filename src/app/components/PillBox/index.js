import "./index.css";
import Pill from "./Pill";

function PillBox({ children = [] }) {
    return <div className="pill-box">
        {children.map(pill => <Pill key={pill.text} color={pill.color}>{pill.text}</Pill>)}
    </div>
}

export default PillBox;