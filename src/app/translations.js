const translations = {
    en: {
        "header": {
            "navigation": {
                "selectors": [
                    {
                        value: "en",
                        text: "english",
                    },
                    {
                        value: "lt",
                        text: "lithuanian",
                    },
                ]
            },
            "hero": {
                "name": "JOHN SMITH",
                "title": "NAME OF THE TITLE"
            },
        },
        "main": {
            "content": [
                {
                    title: "LINKS",
                    componentName: "List",
                    content: [
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
                    content: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]
                },
                {
                    title: "EDUCATION",
                    componentName: 'EduBox',
                    content: [
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
                    content: [
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
                    content: [
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
                    content: [
                        {
                            position: "SeniorMelon",
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
                            position: "JuniorMelon",
                            company: "Melon Inc.",
                            year: "2000-2020",
                            dscr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                            list: ["Lorem ipsum dolor", "Lorem ipsum dolor"],
                        },
                    ],
                },
            ],
        },
        "footer": {
            "cards": [
                {
                    title: "ADDRESS",
                    links: [
                        {
                            text: "Street name",
                        },
                        {
                            text: "City name",
                        },
                    ],
                },
                {
                    title: "CONTACTS",
                    links: [
                        {
                            text: "+370 123 45678",
                        },
                        {
                            text: "email@email.com",
                        },
                    ],
                },
                {
                    title: "SOCIAL",
                    links: [
                        {
                            text: "LinkedIn/melonMan",
                        },
                        {
                            text: "Twatter/melonMan",
                        },
                    ],
                },
            ]
        },
    },
    lt: {
        "header": {
            "navigation": {
                "selectors": [
                    {
                        value: "en",
                        text: "angliškai",
                    },
                    {
                        value: "lt",
                        text: "lietuviškai",
                    },
                ]
            },
            "hero": {
                "name": "JONAS JONAUSKAS",
                "title": "PAREIGŲ PAVADINIMAS"
            },
        },
        "main": {
            "content": [
                {
                    title: "NUORODOS",
                    componentName: "List",
                    content: [
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
                    title: "APIE MANE",
                    className: "about",
                    content: ["Lorem ipsum, kad darbas ir sielvartas, keletas svarbių dalykų, kuriuos reikia padaryti. Per daugelį metų aš ateisiu, kuris išstums iš jos pratimų pranašumą, kad paskatintų pastangas, jei mokyklos rajonas ir ilgaamžiškumas. Nori būti skausmu dėl cupidatat cillum, kritikuotas Duis et dolore magna pabėgime, nesukelia jokio malonumo. Juodieji ekspeditoriai cupidatat nėra išskirtiniai, ramina sielą, tai yra, jie atsisakė bendrų pareigų tų, kurie kalti dėl jūsų bėdų."]
                },
                {
                    title: "IŠSILAVINIMAS",
                    componentName: 'EduBox',
                    content: [
                        {
                            name: 'MOKYKLA2',
                            year: '2010-2020',
                            degree: 'Magistras',
                        },
                        {
                            name: 'MOKYKLA1',
                            year: '2000-2010',
                            degree: 'Bakalauras',
                        },
                    ],
                },
                {
                    title: "ASMENINIAI ĮGŪDŽIAI",
                    componentName: 'PillBox',
                    content: [
                        {
                            color: 'blue',
                            text: 'Pirmas Įgūdis'
                        },
                        {
                            color: 'gold',
                            text: 'Ontras Įgūdis'
                        },
                        {
                            text: 'Trečias Įgūdis'
                        },
                    ],
                },
                {
                    title: "TECHNINIAI ĮGŪDŽIAI",
                    componentName: 'PillBox',
                    content: [
                        {
                            text: 'EXCELIS'
                        },
                        {
                            color: 'red',
                            text: 'WORDAS'
                        },
                        {
                            color: 'blue',
                            text: 'NOTEPAD'
                        },
                    ],
                },
                {
                    title: "DARBO PATIRTIS",
                    componentName: 'ExpBox',
                    className: "experience",
                    content: [
                        {
                            position: "Vyr. Melionas",
                            company: "Melon Inc.",
                            year: "2000-2020",
                            dscr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                            list: ["Lorem ipsum dolor", "Lorem ipsum dolor"],
                        },
                        {
                            position: "Meliongalvis",
                            company: "Melon Inc.",
                            year: "2000-2020",
                            dscr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                            list: ["Lorem ipsum dolor"],
                        },
                        {
                            position: "Melionas",
                            company: "Melon Inc.",
                            year: "2000-2020",
                            dscr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                            list: ["Lorem ipsum dolor", "Lorem ipsum dolor"],
                        },
                    ],
                },
            ],
        },
        "footer": {
            "cards": [
                {
                    title: "ADRESAS",
                    links: [
                        {
                            text: "Street name",
                        },
                        {
                            text: "City name",
                        },
                    ],
                },
                {
                    title: "KONTAKTAI",
                    links: [
                        {
                            text: "+370 123 45678",
                        },
                        {
                            text: "email@email.com",
                        },
                    ],
                },
                {
                    title: "SOCIALINIAI TINKLAI",
                    links: [
                        {
                            text: "LinkedIn/melonMan",
                        },
                        {
                            text: "Twatter/melonMan",
                        },
                    ],
                },
            ]
        },
    },
};

export default translations;