import './App.css';

function App() {
return (
<div className="App" class="wrapper">
    <header>
        <nav>
            <select>
                <option>Lietuviškai</option>
                <option>English</option>
            </select>
        </nav>
        <section class="hero">
            <p class="hero-title">RODRIGO RODRIGEZ</p>
            <p class="hero-position">MELON CARVER</p>
        </section>
    </header>
    <main>
        <section class="grid-box">
            <article class="grid-links">
                <p class="grid-item-title">LINKS</p>
                <hr class="grid-item-line">
                </hr>
                <p class="grid-item-text">
                <ul>
                    <li>
                        <a href="">
                            <i class="fab fa-linkedin-in"></i>
                            <span>LINKEDIN/melonMan</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="fab fa-twitter"></i>
                            <span>TWITTER/melonMan</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="fab fa-github"></i>
                            <span>GITHUB/melonMan</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="fas fa-blog"></i>
                            <span>BLOGS/melonMan</span>
                        </a>
                    </li>
                </ul>
                </p>
            </article>
            <article class="grid-about">
                <p class="grid-item-title">ABOUT ME</p>
                <hr class="grid-item-line">
                </hr>
                <p class="grid-item-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </article>
            <article class="grid-education">
                <p class="grid-item-title">EDUCATION</p>
                <hr class="grid-item-line">
                </hr>
                <p class="grid-item-text">
                <div class="education-item">
                    <span>SCHOOL NAME</span>
                    <span>2000-2020</span>
                    <span>DEGREE</span>
                </div>
                <hr>
                </hr>
                <div class="education-item">
                    <span>SCHOOL NAME</span>
                    <span>2000-2020</span>
                    <span>DEGREE</span>
                </div>
                </p>
            </article>
            <article class="grid-personal">
                <p class="grid-item-title">PERSONAL SKILLS</p>
                <hr class="grid-item-line">
                </hr>
                <p class="grid-item-text">
                <div class="skill-box">
                    <span>TEAMWORK</span>
                    <span>TEAMWORK</span>
                    <span>TEAMWORK</span>
                </div>
                </p>
            </article>
            <article class="grid-technical">
                <p class="grid-item-title">TECHNICAL SKILLS</p>
                <hr class="grid-item-line">
                </hr>
                <p class="grid-item-text">
                <div class="skill-box">
                    <span>TEAMWORK</span>
                    <span>TEAMWORK</span>
                    <span>TEAMWORK</span>
                </div>
                </p>
            </article>
            <article class="grid-experience">
                <p class="grid-item-title">WORK EXPERIENCE</p>
                <hr class="grid-item-line">
                </hr>
                <p class="grid-item-text">
                <div class="experience-box">
                    <div class="experience-item">
                        <div class="experience-head">
                            <span>JOB POSITION</span>
                            <span>Company</span>
                            <span>2000-2020</span>
                        </div>
                        <p class="experience-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut
                            aliquip ex ea commodo consequat.
                        </p>
                        <ul class="experience-list">
                            <li>Lorem ipsum dolor</li>
                            <li>Lorem ipsum dolor</li>
                        </ul>
                    </div>
                    <div class="experience-item">
                        <div class="experience-head">
                            <span>JOB POSITION</span>
                            <span>Company</span>
                            <span>2000-2020</span>
                        </div>
                        <p class="experience-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut
                            aliquip ex ea commodo consequat.
                        </p>
                        <ul class="experience-list">
                            <li>Lorem ipsum dolor</li>
                            <li>Lorem ipsum dolor</li>
                        </ul>
                    </div>
                    <div class="experience-item">
                        <div class="experience-head">
                            <span>JOB POSITION</span>
                            <span>Company</span>
                            <span>2000-2020</span>
                        </div>
                        <p class="experience-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut
                            aliquip ex ea commodo consequat.
                        </p>
                        <ul class="experience-list">
                            <li>Lorem ipsum dolor</li>
                            <li>Lorem ipsum dolor</li>
                        </ul>
                    </div>
                </div>
                </p>
            </article>
        </section>
    </main>
    <footer>
        <hr>
        </hr>
        <section class="contacts">
            <div>
                <span>ADDRESS</span>
                <a href="">Street name</a>
                <a href="">City name</a>
            </div>
            <div>
                <span>CONTACTS</span>
                <a href="">+370 123 45678</a>
                <a href="">email@email.com</a>
            </div>
            <div>
                <span>SOCIAL</span>
                <a href="">LinkedIn/melonMan</a>
                <a href="">Twatter/melonMan</a>
            </div>
        </section>
    </footer>
</div>
);
}

export default App;