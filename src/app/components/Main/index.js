import './index.css';
import ContentBox from '../ContentBox';
import PillBox from '../PillBox';
import List from '../List';
import Edubadge from '../EduBadge';
import ExpBox from '../ExpBox';

function Main() {
    const links = [
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
    ];

    const skillPills1 = [{
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
    ];

    const skillPills2 = [{
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
    ];

    const edu = [
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
    ];

    const workExp = [
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
    ];

    return <main>
        <section className="grid-box">
            <ContentBox title="LINKS">
                <List>{links}</List>
            </ContentBox>
            <ContentBox title="ABOUT ME" className="about" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                    </ContentBox>
            <ContentBox title="EDUCATION">
                {edu.map((entry, i) => <Edubadge index={i}>{entry}</Edubadge>)}
            </ContentBox>
            <ContentBox title="PERSONAL SKILLS">
                <PillBox>{skillPills1}</PillBox>
            </ContentBox>
            <ContentBox title="TECHNICAL SKILLS">
                <PillBox>{skillPills2}</PillBox>
            </ContentBox>
            <ContentBox title="WORK EXPERIENCE" className="experience">
                <ExpBox>{workExp}</ExpBox>
            </ContentBox>
        </section>
    </main>
};

export default Main;