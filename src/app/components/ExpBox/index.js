import JobCard from "./JobCard";

function ExpBox({ children }) {
    return <div className="experience-box">
        {children.map(job => <JobCard key={job.position}>{job}</JobCard>)}
    </div>
};

export default ExpBox;