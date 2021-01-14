import "./index.css";
import PillBox from '../PillBox';
import List from '../List';
import EduBox from '../EduBox';
import ExpBox from '../ExpBox';

function ContentBox2({ title, className = '', componentName, content }) {
    return <article className={className}>
        <p className="grid--item-title">{title}</p>
        <hr className="grid--item-line" />
        <div className="grid--item-content">
            {(() => {
                switch (componentName) {
                    case "List": return <List>{content}</List>;
                    case "EduBox": return <EduBox>{content}</EduBox>;
                    case "ExpBox": return <ExpBox>{content}</ExpBox>;
                    case "PillBox": return <PillBox>{content}</PillBox>;
                    default: return <p>{content}</p>;
                }
            })()}
        </div>
    </article>
}

export default ContentBox2;