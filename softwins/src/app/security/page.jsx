
import Link from "next/link";
import "./styles.css";

const securitySections = [
  {
    number: "01",
    category: "LEGAL FRAMEWORK",
    title: "Rules & Regulations",
    description:
      "A clear framework defining how Softwins services should be accessed, used, and maintained. Understand the responsibilities, limitations, and standards that guide participation across our platform.",
    details: [
      "Terms of Service",
      "Acceptable Use Policy",
      "User Responsibilities",
    ],
    href: "/security/rules",
    icon: "document",
  },
  {
    number: "02",
    category: "DATA PROTECTION",
    title: "Privacy & Security",
    description:
      "Learn how personal information is handled throughout the Softwins ecosystem. Explore our approach to data protection, account security, information processing, and user privacy.",
    details: [
      "Privacy Policy",
      "Data Collection & Processing",
      "Account Protection",
    ],
    href: "/security/privacy",
    icon: "shield",
  },
  {
    number: "03",
    category: "TRANSPARENCY",
    title: "Open Source",
    description:
      "Discover the open-source projects, technologies, and development resources associated with Softwins. Explore available repositories, licensing information, and opportunities to contribute.",
    details: [
      "Public Repositories",
      "Open-Source Licenses",
      "Community Contributions",
    ],
    href: "/security/open-source",
    icon: "code",
  },
  {
    number: "04",
    category: "SECURITY RESEARCH",
    title: "Security Code Review",
    description:
      "We recognize the importance of responsible security research. Learn how security concerns can be reported, how code reviews are approached, and how vulnerabilities should be disclosed.",
    details: [
      "Vulnerability Reporting",
      "Responsible Disclosure",
      "Security Review Process",
    ],
    href: "/security/code-review",
    icon: "search",
  },
  {
    number: "05",
    category: "TECHNOLOGY & INFRASTRUCTURE",
    title: "Security Technologies",
    description:
      "Explore the technologies and engineering practices relevant to protecting Softwins infrastructure, applications, communications, and data. Understand the security layers behind our products.",
    details: [
      "Infrastructure Protection",
      "Access Control",
      "Monitoring & Security Tools",
    ],
    href: "/security/tools",
    icon: "layers",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 17 17 7M7 7h10v10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SecurityIcon({ type }) {
  const icons = {
    document: (
      <>
        <path d="M7 3.5h7l4 4v13H7a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Z" />
        <path d="M14 3.5v4h4M9 12h6M9 15.5h6" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 19 6v5c0 4.5-2.8 7.7-7 10-4.2-2.3-7-5.5-7-10V6l7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    code: (
      <>
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
      </>
    ),
    search: (
      <>
        <circle cx="10.8" cy="10.8" r="6.8" />
        <path d="m16 16 4.5 4.5" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[type]}
    </svg>
  );
}

function SecurityVisual() {
  return (
    <div className="security-visual" aria-hidden="true">
      <div className="visual-grid" />

      <div className="visual-orbit visual-orbit-one" />
      <div className="visual-orbit visual-orbit-two" />
      <div className="visual-orbit visual-orbit-three" />

      <div className="visual-center">
        <svg viewBox="0 0 100 100" fill="none">
          <path
            d="M50 9 82 22V46C82 67 69 82 50 92 31 82 18 67 18 46V22L50 9Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="m36 49 10 10 20-22"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <span className="visual-label visual-label-top">
        SOFTWINS / SECURITY
      </span>
      <span className="visual-label visual-label-bottom">
        TRUST & PROTECTION
      </span>

      <span className="visual-node node-one" />
      <span className="visual-node node-two" />
      <span className="visual-node node-three" />
    </div>
  );
}

function SecuritySection({ item, index }) {
  return (
    <article className={`security-section ${index % 2 ? "reverse" : ""}`}>
      <div className="section-visual">
        <span className="section-large-number">{item.number}</span>

        <div className="section-icon">
          <SecurityIcon type={item.icon} />
        </div>

        <span className="section-visual-caption">
          SOFTWINS SECURITY / {item.number}
        </span>
      </div>

      <div className="section-content">
        <div className="section-category">
          <span />
          {item.category}
        </div>

        <h2>{item.title}</h2>

        <p className="section-description">
          {item.description}
        </p>

        <ul className="section-details">
          {item.details.map((detail) => (
            <li key={detail}>
              <span />
              {detail}
            </li>
          ))}
        </ul>

        <Link href={item.href} className="section-link">
          Explore section
          <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}

export default function SecurityPage() {
  return (
    <main className="security-page">
      <div className="security-background" aria-hidden="true">
        <div className="background-grid" />
        <div className="background-glow" />
      </div>

      <section className="security-hero">
        <div className="security-container">
          <div className="hero-topline">
            <span className="hero-indicator" />
            SOFTWINS / TRUST CENTER
          </div>

          <div className="hero-layout">
            <div className="hero-content">
              <span className="hero-label">
                SECURITY & TRANSPARENCY
              </span>

              <h1>
                Security is a
                <br />
                <span>shared responsibility.</span>
              </h1>

              <p>
                Explore the principles, policies, and technologies
                that shape our approach to security, privacy,
                transparency, and responsible engineering.
              </p>

              <div className="hero-actions">
                <a href="#security-resources" className="primary-link">
                  Explore security
                  <ArrowIcon />
                </a>

                <span className="hero-reference">
                  SECURITY CENTER / 2026
                </span>
              </div>
            </div>

            <SecurityVisual />
          </div>

          <div className="hero-bottomline">
            <span>PROTECTING THE DIGITAL ENVIRONMENT</span>
            <span>01 — 05 / SECURITY DOMAINS</span>
          </div>
        </div>
      </section>

      <section className="security-introduction">
        <div className="security-container intro-layout">
          <div>
            <span className="section-eyebrow">
              OUR APPROACH
            </span>
            <h2>
              A foundation of
              <br />
              responsible engineering.
            </h2>
          </div>

          <p>
            Security is an important part of building reliable
            digital products. This center brings together the
            policies, principles, and technical information
            that help users understand how Softwins approaches
            trust and protection.
          </p>
        </div>
      </section>

      <section
        className="security-resources"
        id="security-resources"
      >
        <div className="security-container">
          <div className="resources-heading">
            <div>
              <span className="section-eyebrow">
                SECURITY RESOURCES
              </span>
              <h2>Explore our security domains</h2>
            </div>

            <span className="resources-count">
              05 DOMAINS
            </span>
          </div>

          <div className="security-sections">
            {securitySections.map((item, index) => (
              <SecuritySection
                key={item.number}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="security-closing">
        <div className="security-container closing-inner">
          <span className="section-eyebrow">
            SOFTWINS / SECURITY
          </span>

          <h2>
            Built with care.
            <br />
            Designed with responsibility.
          </h2>

          <p>
            Trust begins with transparency, thoughtful engineering,
            and a commitment to continuous improvement.
          </p>

          <Link href="/" className="closing-link">
            Back to Softwins
            <ArrowIcon />
          </Link>
        </div>
      </section>
    </main>
  );
}
