import "./index.css";

function Pill({children, color = "default"}) {
    return (
        <span className={`pill pill--${color}`}>
            {children}
        </span>
    );
}

export default Pill; 