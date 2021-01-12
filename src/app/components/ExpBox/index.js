import "./index.css";
import JobCard from "./JobCard";

function ExpBox({ children }) {
    return <div className="experience-box">
        {children.map(job => <JobCard>{job}</JobCard>)}
    </div>
};

export default ExpBox;