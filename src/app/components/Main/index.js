import './index.css';
import ContentBox2 from '../ContentBox2';

function Main() {
    const allContent = [
        {
            title: "LINKS",
            componentName: "List",
            content_en: [
                {
                    icon: "fab fa-linkedin-in",
                    text: "LINKEDIN/melonMan",
                },
                {
                    icon: "fab fa-twitter",
                    text: "TWITTER/melonMan",
                },
                {
                    icon: "fab fa-github",
                    text: "GITHUB/melonMan",
                },
                {
                    icon: "fas fa-blog",
                    text: "BLOGS/melonMan",
                },
            ],
        },
        {
            title: "ABOUT ME",
            className: "about",
            content_en: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]
        },
        {
            title: "EDUCATION",
            componentName: 'EduBox',
            content_en: [
                {
                    name: 'SCHOOL1',
                    year: '2010-2020',
                    degree: 'masters',
                },
                {
                    name: 'SCHOOL2',
                    year: '2000-2010',
                    degree: 'bachelors',
                },
            ],
        },
        {
            title: "PERSONAL SKILLS",
            componentName: 'PillBox',
            content_en: [
                {
                    color: 'blue',
                    text: 'First Pill'
                },
                {
                    color: 'gold',
                    text: 'Second Pill'
                },
                {
                    text: 'Third Pill'
                },
            ],
        },
        {
            title: "TECHNICAL SKILLS",
            componentName: 'PillBox',
            content_en: [
                {
                    text: 'First Pill'
                },
                {
                    color: 'red',
                    text: 'Second Pill'
                },
                {
                    color: 'blue',
                    text: 'Third Pill'
                },
            ],
        },
        {
            title: "WORK EXPERIENCE",
            componentName: 'ExpBox',
            className: "experience",
            content_en: [
                {
                    position: "MainMelon",
                    company: "Melon Inc.",
                    year: "2000-2020",
                    dscr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    list: ["Lorem ipsum dolor", "Lorem ipsum dolor"],
                },
                {
                    position: "MainMelon",
                    company: "Melon Inc.",
                    year: "2000-2020",
                    dscr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    list: ["Lorem ipsum dolor"],
                },
                {
                    position: "MainMelon",
                    company: "Melon Inc.",
                    year: "2000-2020",
                    dscr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    list: ["Lorem ipsum dolor", "Lorem ipsum dolor"],
                },
            ],
        },
    ]

    return <main>
        <section className="grid-box">
            {allContent.map(item =>
                <ContentBox2
                    title={item.title}
                    className={item.className}
                    componentName={item.componentName}
                    content={item.content_en}
                />
            )}
        </section>
    </main>
};

export default Main;