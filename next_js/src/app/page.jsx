const features = [
    {
        icon: "⌘",
        title: "Code Together",
        text: "Build projects with other developers in a collaborative environment designed for real teamwork.",
    },
    {
        icon: "◈",
        title: "Developer Profile",
        text: "Show your skills, projects, achievements and coding journey through one professional profile.",
    },
    {
        icon: "⚡",
        title: "Coding Contests",
        text: "Challenge yourself, solve problems and compete with developers from the Softwins community.",
    },
    {
        icon: "◉",
        title: "Developer Groups",
        text: "Create or join focused communities around programming languages, technologies and projects.",
    },
    {
        icon: "</>",
        title: "Build & Share",
        text: "Share your work, discover interesting projects and turn ideas into real software.",
    },
    {
        icon: "✦",
        title: "Grow Your Skills",
        text: "Track your progress and continuously improve through practice, collaboration and challenges.",
    },
];

const stats = [
    { value: "10K+", label: "Developers" },
    { value: "2.4K+", label: "Projects" },
    { value: "850+", label: "Challenges" },
    { value: "120+", label: "Communities" },
];

const contests = [
    {
        number: "01",
        title: "Algorithm Arena",
        description: "Solve algorithmic problems and prove your problem-solving skills.",
        difficulty: "Advanced",
        participants: "1,240",
    },
    {
        number: "02",
        title: "Frontend Battle",
        description: "Build beautiful and responsive interfaces against the clock.",
        difficulty: "Intermediate",
        participants: "864",
    },
    {
        number: "03",
        title: "Backend Rush",
        description: "Design APIs and solve backend engineering challenges.",
        difficulty: "Advanced",
        participants: "642",
    },
];

const developers = [
    {
        initials: "AM",
        name: "Alex Morgan",
        role: "Full-Stack Developer",
        skills: ["React", "Node.js", "PostgreSQL"],
    },
    {
        initials: "SR",
        name: "Sarah Reed",
        role: "Frontend Engineer",
        skills: ["Next.js", "CSS", "Figma"],
    },
    {
        initials: "DK",
        name: "Daniel Kim",
        role: "Backend Engineer",
        skills: ["Node.js", "Docker", "Go"],
    },
];

export default function Home() {
    return (
        <main className="site">
            {/* NAVBAR */}
            <nav className="navbar">
                <div className="nav-inner">
                    <a href="#" className="logo">
                        <span className="logo-mark">
                            S
                        </span>

                        <span className="logo-text">
                            soft<span>wins</span>
                        </span>
                    </a>

                    <div className="nav-links">
                        <a href="#features">Features</a>
                        <a href="#contests">Contests</a>
                        <a href="#community">Community</a>
                        <a href="#developers">Developers</a>
                    </div>

                    <div className="nav-actions">
                        <button className="login-button">
                            Log in
                        </button>

                        <button className="signup-button">
                            Get Started
                            <span>↗</span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* HERO */}
            <section className="hero">
                <div className="hero-glow glow-one" />
                <div className="hero-glow glow-two" />

                <div className="hero-content">
                    <div className="eyebrow">
                        <span className="status-dot" />
                        The modern home for developers
                    </div>

                    <h1>
                        Where developers
                        <br />
                        <span>build what matters.</span>
                    </h1>

                    <p className="hero-description">
                        Softwins is a developer platform for building,
                        competing, collaborating and growing together.
                    </p>

                    <div className="hero-buttons">
                        <button className="primary-button">
                            Start Building
                            <span>↗</span>
                        </button>

                        <button className="secondary-button">
                            Explore Softwins
                            <span>→</span>
                        </button>
                    </div>

                    <div className="hero-note">
                        <span>✓</span>
                        Free to join · Built for developers
                    </div>
                </div>

                {/* CODE CARD */}
                <div className="hero-visual">
                    <div className="code-window">
                        <div className="window-top">
                            <div className="window-dots">
                                <i />
                                <i />
                                <i />
                            </div>

                            <span>softwins / workspace</span>

                            <span className="window-status">
                                ● live
                            </span>
                        </div>

                        <div className="code-body">
                            <div className="line-numbers">
                                01<br />
                                02<br />
                                03<br />
                                04<br />
                                05<br />
                                06<br />
                                07<br />
                                08<br />
                                09<br />
                                10
                            </div>

                            <div className="code">
                                <p>
                                    <span className="purple">const</span>{" "}
                                    <span className="blue">project</span>{" "}
                                    = {"{"}
                                </p>

                                <p className="indent">
                                    name: <span className="green">"Softwins"</span>,
                                </p>

                                <p className="indent">
                                    developers: <span className="orange">1240</span>,
                                </p>

                                <p className="indent">
                                    status: <span className="green">"building"</span>,
                                </p>

                                <p className="indent">
                                    <span className="blue">openSource</span>:{" "}
                                    <span className="pink">true</span>
                                </p>

                                <p>
                                    {"}"}
                                </p>

                                <p>
                                    <span className="purple">await</span>{" "}
                                    <span className="blue">project</span>
                                    .<span className="yellow">build</span>();
                                </p>
                            </div>
                        </div>

                        <div className="code-footer">
                            <span>main</span>
                            <span>● Connected</span>
                            <span>JavaScript</span>
                        </div>
                    </div>

                    <div className="floating-card members-card">
                        <div className="mini-avatars">
                            <span>AM</span>
                            <span>SR</span>
                            <span>DK</span>
                            <span>+9</span>
                        </div>

                        <div>
                            <strong>12 developers</strong>
                            <small>working together</small>
                        </div>
                    </div>

                    <div className="floating-card commit-card">
                        <span className="commit-icon">✓</span>

                        <div>
                            <strong>Build successful</strong>
                            <small>just now</small>
                        </div>
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="stats">
                <div className="stats-inner">
                    {stats.map((stat) => (
                        <div className="stat" key={stat.label}>
                            <strong>{stat.value}</strong>
                            <span>{stat.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* FEATURES */}
            <section className="section features-section" id="features">
                <div className="section-heading">
                    <div className="section-label">
                        WHAT YOU CAN DO
                    </div>

                    <h2>
                        Everything developers
                        <br />
                        need to <span>move forward.</span>
                    </h2>

                    <p>
                        One platform connecting the tools, people and
                        challenges that make developers better.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <article
                            className="feature-card"
                            key={feature.title}
                        >
                            <div className="feature-number">
                                0{index + 1}
                            </div>

                            <div className="feature-icon">
                                {feature.icon}
                            </div>

                            <h3>{feature.title}</h3>

                            <p>{feature.text}</p>

                            <a href="#">
                                Explore
                                <span>↗</span>
                            </a>
                        </article>
                    ))}
                </div>
            </section>

            {/* CONTESTS */}
            <section className="section contests-section" id="contests">
                <div className="section-heading contests-heading">
                    <div className="section-label">
                        COMPETE & IMPROVE
                    </div>

                    <h2>
                        Turn your code
                        <br />
                        into a <span>challenge.</span>
                    </h2>

                    <p>
                        Practice real problems, challenge other
                        developers and measure your progress.
                    </p>
                </div>

                <div className="contest-list">
                    {contests.map((contest) => (
                        <article className="contest-card" key={contest.number}>
                            <div className="contest-number">
                                {contest.number}
                            </div>

                            <div className="contest-main">
                                <h3>{contest.title}</h3>
                                <p>{contest.description}</p>
                            </div>

                            <div className="contest-info">
                                <span>{contest.difficulty}</span>
                                <span>{contest.participants} participants</span>
                            </div>

                            <button className="arrow-button">
                                ↗
                            </button>
                        </article>
                    ))}
                </div>
            </section>

            {/* COMMUNITY */}
            <section className="community-section" id="community">
                <div className="community-content">
                    <div className="section-label">
                        DEVELOPER COMMUNITY
                    </div>

                    <h2>
                        Don't just
                        <br />
                        <span>code alone.</span>
                    </h2>

                    <p>
                        Find developers who think like you, create
                        communities around technologies you love and
                        build projects together.
                    </p>

                    <button className="primary-button">
                        Join the Community
                        <span>↗</span>
                    </button>
                </div>

                <div className="community-visual">
                    <div className="community-orbit orbit-one" />
                    <div className="community-orbit orbit-two" />

                    <div className="community-center">
                        <span>S</span>
                    </div>

                    <div className="community-user user-one">
                        AM
                    </div>

                    <div className="community-user user-two">
                        SR
                    </div>

                    <div className="community-user user-three">
                        DK
                    </div>

                    <div className="community-user user-four">
                        ML
                    </div>

                    <div className="community-tag tag-one">
                        React
                    </div>

                    <div className="community-tag tag-two">
                        Node.js
                    </div>

                    <div className="community-tag tag-three">
                        Security
                    </div>
                </div>
            </section>

            {/* DEVELOPERS */}
            <section className="section developers-section" id="developers">
                <div className="section-heading">
                    <div className="section-label">
                        DISCOVER DEVELOPERS
                    </div>

                    <h2>
                        Meet the people
                        <br />
                        behind the <span>code.</span>
                    </h2>
                </div>

                <div className="developers-grid">
                    {developers.map((developer) => (
                        <article
                            className="developer-card"
                            key={developer.name}
                        >
                            <div className="developer-avatar">
                                {developer.initials}
                            </div>

                            <div className="developer-info">
                                <h3>{developer.name}</h3>
                                <p>{developer.role}</p>

                                <div className="skill-list">
                                    {developer.skills.map((skill) => (
                                        <span key={skill}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <button className="profile-button">
                                →
                            </button>
                        </article>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="cta-glow" />

                <div className="cta-content">
                    <div className="section-label">
                        START YOUR JOURNEY
                    </div>

                    <h2>
                        Your next
                        <br />
                        <span>great project</span>
                        <br />
                        starts here.
                    </h2>

                    <p>
                        Join developers building the future,
                        one line of code at a time.
                    </p>

                    <button className="cta-button">
                        Create your account
                        <span>↗</span>
                    </button>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="footer">
                <div className="footer-top">
                    <div className="footer-brand">
                        <a href="#" className="logo">
                            <span className="logo-mark">
                                S
                            </span>

                            <span className="logo-text">
                                soft<span>wins</span>
                            </span>
                        </a>

                        <p>
                            A modern home for developers
                            to build, compete and grow.
                        </p>
                    </div>

                    <div className="footer-links">
                        <div>
                            <h4>Platform</h4>
                            <a href="#">Projects</a>
                            <a href="#">Contests</a>
                            <a href="#">Groups</a>
                            <a href="#">Developers</a>
                        </div>

                        <div>
                            <h4>Resources</h4>
                            <a href="#">Documentation</a>
                            <a href="#">Community</a>
                            <a href="#">Blog</a>
                            <a href="#">Help Center</a>
                        </div>

                        <div>
                            <h4>Company</h4>
                            <a href="#">About</a>
                            <a href="#">Careers</a>
                            <a href="#">Contact</a>
                            <a href="#">Privacy</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>
                        © 2026 Softwins. All rights reserved.
                    </span>

                    <span>
                        Built for developers.
                    </span>
                </div>
            </footer>
        </main>
    );
}
