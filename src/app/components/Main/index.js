import './index.css';
import ContentBox2 from '../ContentBox2';

function Main({ content }) {
    return <main>
        <section className="grid-box">
            {content.content.map(item =>
                <ContentBox2
                    key={item.title}
                    title={item.title}
                    className={item.className}
                    componentName={item.componentName}
                    content={item.content}
                />
            )}
        </section>
    </main>
};

export default Main;