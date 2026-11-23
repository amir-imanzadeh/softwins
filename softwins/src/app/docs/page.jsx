
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import "./styles.css"
const articles = [
  {
    id: "introduction",
    category: "Getting started",
    title: "Introduction to Softwins",
    description:
      "An overview of Softwins, its ecosystem, core philosophy, and the tools designed to make software development more efficient.",
    readTime: "6 min read",
    updated: "November 2026",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: [
          "Softwins is a software development ecosystem designed to bring projects, development tools, collaboration, and deployment workflows into one connected environment.",
          "Rather than treating every development activity as an isolated task, Softwins aims to provide a unified workspace where developers can organize their work, manage projects, and access essential tools.",
        ],
      },
      {
        id: "philosophy",
        title: "Our philosophy",
        content: [
          "A productive development environment should be understandable, extensible, and predictable. Developers should spend their time building software, not fighting their tools.",
          "Softwins follows a modular approach. Each component has a defined responsibility and can evolve independently while remaining connected to the wider ecosystem.",
        ],
      },
      {
        id: "ecosystem",
        title: "The ecosystem",
        content: [
          "The Softwins ecosystem is designed around multiple clients connected to a shared platform.",
        ],
        cards: [
          {
            number: "01",
            title: "Web Platform",
            description:
              "The central interface for accounts, projects, documentation, and online services.",
            tag: "Web",
          },
          {
            number: "02",
            title: "Desktop Application",
            description:
              "A dedicated desktop environment for accessing development workflows.",
            tag: "Desktop",
          },
          {
            number: "03",
            title: "Command Line",
            description:
              "A terminal-oriented interface for developers who prefer automation.",
            tag: "CLI",
          },
        ],
      },
      {
        id: "principles",
        title: "Core principles",
        content: [
          "The platform is designed around several engineering principles:",
        ],
        bullets: [
          "Modular architecture and clear component boundaries.",
          "Consistency across different interfaces.",
          "Developer-oriented workflows.",
          "Maintainability and long-term extensibility.",
          "Security-conscious engineering.",
        ],
      },
      {
        id: "next",
        title: "What's next?",
        content: [
          "Continue with the Quick Start guide to understand the initial setup process and explore the main components of the platform.",
        ],
        callout: {
          type: "info",
          title: "Recommended next step",
          text: "New to Softwins? Start with the Quick Start guide before exploring individual tools.",
        },
      },
    ],
  },
  {
    id: "quick-start",
    category: "Getting started",
    title: "Quick Start",
    description:
      "Get familiar with the Softwins environment and prepare your development workspace.",
    readTime: "8 min read",
    updated: "November 2026",
    sections: [
      {
        id: "requirements",
        title: "Before you begin",
        content: [
          "Before using Softwins development tools, make sure your environment is ready. Some tools may require additional dependencies depending on your operating system.",
        ],
        bullets: [
          "A supported operating system.",
          "An active Softwins account when account features are required.",
          "A stable internet connection for online services.",
          "Terminal access for command-line workflows.",
        ],
      },
      {
        id: "installation",
        title: "Installation",
        content: [
          "Download the appropriate installation package for your operating system. Always use packages distributed through official Softwins channels.",
          "The exact installation procedure depends on the package format.",
        ],
        code: {
          language: "bash",
          value: "sudo apt install ./softwins.deb",
        },
      },
      {
        id: "verify",
        title: "Verify your installation",
        content: [
          "After installation, open the application and verify that it starts correctly. If you are using the command-line interface, check that the executable is accessible from your terminal.",
        ],
        code: {
          language: "bash",
          value: "softwins --version",
        },
      },
      {
        id: "first-project",
        title: "Create your first project",
        content: [
          "Once your environment is ready, create a project workspace and organize your source files. Keep configuration files and application code separated where practical.",
        ],
        callout: {
          type: "success",
          title: "Good practice",
          text: "Start with a small project. Validate your workflow before introducing additional tools and dependencies.",
        },
      },
    ],
  },
  {
    id: "architecture",
    category: "Architecture",
    title: "Platform Architecture",
    description:
      "Understand the conceptual architecture behind the Softwins ecosystem and its connected components.",
    readTime: "12 min read",
    updated: "November 2026",
    sections: [
      {
        id: "overview",
        title: "Architecture overview",
        content: [
          "A multi-client software ecosystem requires a clear separation between presentation, application logic, and persistent data.",
          "The architecture of Softwins is intended to keep client applications independent while allowing them to communicate with shared platform services through defined interfaces.",
        ],
      },
      {
        id: "layers",
        title: "Architectural layers",
        content: [
          "The system can be understood through several logical layers. These layers describe responsibilities rather than requiring every service to run as a separate process.",
        ],
        table: {
          headers: ["Layer", "Responsibility", "Examples"],
          rows: [
            ["Presentation", "User interaction", "Web, Desktop"],
            ["Application", "Business logic", "Services, APIs"],
            ["Data", "Persistent storage", "PostgreSQL"],
            ["Infrastructure", "Execution environment", "Docker, Linux"],
          ],
        },
      },
      {
        id: "communication",
        title: "Communication model",
        content: [
          "Clients communicate with application services through explicit interfaces. This approach helps prevent client applications from becoming tightly coupled to internal database structures.",
        ],
        code: {
          language: "text",
          value: `Desktop Client
      |
      v
  API Gateway
      |
      v
 Application Services
      |
      v
   Data Layer`,
        },
      },
      {
        id: "boundaries",
        title: "Component boundaries",
        content: [
          "Each component should have a clear responsibility and a well-defined communication contract. Changes inside one component should not unnecessarily affect unrelated components.",
        ],
        bullets: [
          "Keep business logic out of presentation components.",
          "Validate incoming data at application boundaries.",
          "Avoid exposing database internals to clients.",
          "Define stable interfaces between modules.",
        ],
      },
    ],
  },
  {
    id: "projects",
    category: "Platform",
    title: "Projects & Workspaces",
    description:
      "Learn how project organization and workspace management can fit into your development workflow.",
    readTime: "7 min read",
    updated: "November 2026",
    sections: [
      {
        id: "projects-overview",
        title: "Projects overview",
        content: [
          "A project represents a logical unit of development work. It may contain source code, documentation, configuration, and related resources.",
        ],
      },
      {
        id: "workspaces",
        title: "Workspace structure",
        content: [
          "A workspace provides an organized environment for working with one or more projects. A predictable directory structure makes collaboration and maintenance easier.",
        ],
        code: {
          language: "text",
          value: `my-project/
├── src/
├── public/
├── tests/
├── docs/
├── package.json
└── README.md`,
        },
      },
      {
        id: "organization",
        title: "Organization guidelines",
        content: [
          "Keep related resources together, document important configuration, and avoid committing generated artifacts unless they are required by your workflow.",
        ],
        bullets: [
          "Use meaningful directory names.",
          "Keep environment secrets outside source control.",
          "Document setup instructions.",
          "Separate source files from build outputs.",
        ],
      },
    ],
  },
  {
    id: "api",
    category: "Development",
    title: "API Reference",
    description:
      "Explore API conventions, request structures, responses, and integration guidelines.",
    readTime: "10 min read",
    updated: "November 2026",
    sections: [
      {
        id: "api-overview",
        title: "API overview",
        content: [
          "An API provides a defined interface through which external clients communicate with application services.",
          "A consistent API design makes integrations easier to maintain and helps developers understand expected behavior.",
        ],
      },
      {
        id: "requests",
        title: "HTTP requests",
        content: [
          "Use HTTP methods according to the intended operation. Validate request data on the server and return appropriate status codes.",
        ],
        table: {
          headers: ["Method", "Purpose", "Typical use"],
          rows: [
            ["GET", "Read data", "Retrieve a resource"],
            ["POST", "Create or execute", "Create a record"],
            ["PUT", "Replace", "Replace a resource"],
            ["PATCH", "Update", "Modify selected fields"],
            ["DELETE", "Remove", "Delete a resource"],
          ],
        },
      },
      {
        id: "example",
        title: "Example request",
        content: [
          "The following example demonstrates a basic request using the Fetch API.",
        ],
        code: {
          language: "javascript",
          value: `const response = await fetch("/api/projects", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
});

if (!response.ok) {
  throw new Error("Request failed");
}

const projects = await response.json();`,
        },
      },
      {
        id: "errors",
        title: "Error handling",
        content: [
          "Clients should not assume every request succeeds. Handle network failures, authorization errors, validation errors, and unexpected server responses explicitly.",
        ],
      },
    ],
  },
  {
    id: "cli",
    category: "Development",
    title: "Command Line Interface",
    description:
      "A practical introduction to terminal-based workflows and CLI command organization.",
    readTime: "9 min read",
    updated: "November 2026",
    sections: [
      {
        id: "cli-overview",
        title: "CLI overview",
        content: [
          "A command-line interface allows developers to execute operations directly from a terminal. It is especially useful for automation, scripting, and repetitive workflows.",
        ],
      },
      {
        id: "commands",
        title: "Command structure",
        content: [
          "A well-designed CLI should use predictable command names, consistent arguments, and clear error messages.",
        ],
        code: {
          language: "bash",
          value: `softwins --help
softwins --version
softwins project list
softwins project create my-project`,
        },
      },
      {
        id: "design",
        title: "CLI design principles",
        content: [
          "CLI commands should be easy to discover and safe to execute. Operations that modify files or system configuration should explain their effects.",
        ],
        bullets: [
          "Provide useful help output.",
          "Use consistent command naming.",
          "Return meaningful exit codes.",
          "Avoid unnecessary interactive prompts.",
          "Request elevated permissions only when necessary.",
        ],
      },
    ],
  },
  {
    id: "desktop",
    category: "Platform",
    title: "Desktop Application",
    description:
      "Understand the role of the desktop client and its relationship with the wider platform.",
    readTime: "6 min read",
    updated: "November 2026",
    sections: [
      {
        id: "desktop-overview",
        title: "Desktop overview",
        content: [
          "The Softwins desktop client is intended to provide a dedicated application experience outside the browser.",
          "Desktop software can provide access to operating-system capabilities while keeping the user interface connected to the same platform services.",
        ],
      },
      {
        id: "tauri",
        title: "Application technology",
        content: [
          "The desktop application uses Tauri, which combines a web-based frontend with a native Rust application layer.",
        ],
        code: {
          language: "text",
          value: `React / JavaScript
       |
       v
   Tauri Bridge
       |
       v
    Rust Core
       |
       v
 Operating System`,
        },
      },
      {
        id: "security",
        title: "Desktop security",
        content: [
          "Desktop applications should use explicit permissions and carefully validate data crossing the frontend and native boundaries.",
        ],
        bullets: [
          "Grant only necessary capabilities.",
          "Validate data received from the frontend.",
          "Avoid embedding sensitive credentials.",
          "Keep dependencies updated.",
        ],
      },
    ],
  },
  {
    id: "troubleshooting",
    category: "Resources",
    title: "Troubleshooting",
    description:
      "A practical reference for diagnosing common installation, configuration, and runtime problems.",
    readTime: "5 min read",
    updated: "November 2026",
    sections: [
      {
        id: "approach",
        title: "Troubleshooting approach",
        content: [
          "Start by identifying the exact operation that failed. Read the complete error message and determine whether the problem originates from the application, environment, network, or configuration.",
        ],
        bullets: [
          "Reproduce the problem.",
          "Read the complete error output.",
          "Check the relevant logs.",
          "Verify configuration and dependencies.",
          "Apply one change at a time.",
        ],
      },
      {
        id: "installation-errors",
        title: "Installation problems",
        content: [
          "Installation failures may result from missing dependencies, incompatible package formats, or insufficient permissions.",
        ],
        code: {
          language: "bash",
          value: `# Inspect package information
dpkg -I ./softwins.deb

# Repair unfinished package operations
sudo apt --fix-broken install`,
        },
      },
      {
        id: "report",
        title: "Reporting an issue",
        content: [
          "A useful issue report includes the operating system, application version, reproduction steps, expected behavior, actual behavior, and relevant logs.",
        ],
        callout: {
          type: "warning",
          title: "Protect sensitive information",
          text: "Remove passwords, access tokens, private keys, and personal information before sharing diagnostic logs.",
        },
      },
    ],
  },
];

const groups = [
  {
    title: "Getting started",
    icon: "◈",
    items: ["introduction", "quick-start"],
  },
  {
    title: "Platform",
    icon: "▦",
    items: ["projects", "desktop"],
  },
  {
    title: "Architecture",
    icon: "⌘",
    items: ["architecture"],
  },
  {
    title: "Development",
    icon: "⌁",
    items: ["api", "cli"],
  },
  {
    title: "Resources",
    icon: "◇",
    items: ["troubleshooting"],
  },
];

function Icon({ name, size = 17 }) {
  const paths = {
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    chevron: <path d="m9 18 6-6-6-6" />,
    arrow: <path d="M5 12h14m-7-7 7 7-7 7" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    copy: <><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 1 4 17.5z" /><path d="M4 16h16M8 7h7" /></>,
    menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
    external: <><path d="M14 3h7v7" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></>,
    info: <><circle cx="12" cy="12" r="9" /><path d="M12 11v5m0-9h.01" /></>,
    warning: <><path d="m10.3 3.9-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3.1l-8-14a2 2 0 0 0-3.4 0Z" /><path d="M12 9v4m0 4h.01" /></>,
    success: <><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></>,
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.book}
    </svg>
  );
}

function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code.value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="docs-code-block">
      <div className="docs-code-header">
        <span className="docs-code-language">{code.language}</span>
        <button className="docs-code-copy" onClick={copyCode}>
          <Icon name={copied ? "check" : "copy"} size={13} />
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>
        <code>{code.value}</code>
      </pre>
    </div>
  );
}

function Callout({ data }) {
  const icon =
    data.type === "warning"
      ? "warning"
      : data.type === "success"
        ? "success"
        : "info";

  return (
    <div className={`docs-callout ${data.type || "info"}`}>
      <div className="docs-callout-icon">
        <Icon name={icon} />
      </div>
      <div className="docs-callout-content">
        <h4>{data.title}</h4>
        <p>{data.text}</p>
      </div>
    </div>
  );
}

function ArticleSection({ section }) {
  return (
    <section className="docs-section" id={section.id}>
      <h2>{section.title}</h2>

      {section.content?.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      {section.bullets && (
        <ul>
          {section.bullets.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      {section.code && <CodeBlock code={section.code} />}

      {section.callout && <Callout data={section.callout} />}

      {section.table && (
        <div className="docs-table-wrapper">
          <table className="docs-table">
            <thead>
              <tr>
                {section.table.headers.map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, index) => (
                <tr key={index}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {section.cards && (
        <div className="docs-feature-grid">
          {section.cards.map((card) => (
            <div className="docs-feature-card" key={card.number}>
              <div className="docs-feature-top">
                <span>{card.number}</span>
                <small>{card.tag}</small>
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default function DocsPage() {
  const [activeId, setActiveId] = useState("introduction");
  const [search, setSearch] = useState("");
  const [collapsed, setCollapsed] = useState({});
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  const articleRef = useRef(null);
  const searchRef = useRef(null);

  const activeArticle =
    articles.find((article) => article.id === activeId) || articles[0];

  const filteredGroups = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return groups;

    return groups
      .map((group) => ({
        ...group,
        items: group.items.filter((id) => {
          const article = articles.find((item) => item.id === id);
          return (
            article?.title.toLowerCase().includes(query) ||
            article?.description.toLowerCase().includes(query) ||
            article?.category.toLowerCase().includes(query)
          );
        }),
      }))
      .filter((group) => group.items.length > 0);
  }, [search]);

  const allSections = activeArticle.sections;

  const selectArticle = (id) => {
    setActiveId(id);
    setActiveSection("");
    setMobileMenu(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleGroup = (title) => {
    setCollapsed((previous) => ({
      ...previous,
      [title]: !previous[title],
    }));
  };

  const goToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const elements = allSections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-100px 0px -65% 0px",
        threshold: 0,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [activeArticle]);

  useEffect(() => {
    const handleKeyboard = (event) => {
      if (
        event.key === "/" &&
        !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)
      ) {
        event.preventDefault();
        searchRef.current?.focus();
      }

      if (event.key === "Escape") {
        setSearch("");
        searchRef.current?.blur();
        setMobileMenu(false);
      }
    };

    window.addEventListener("keydown", handleKeyboard);
    return () => window.removeEventListener("keydown", handleKeyboard);
  }, []);

  const currentIndex = articles.findIndex(
    (article) => article.id === activeId
  );

  const previousArticle = articles[currentIndex - 1];
  const nextArticle = articles[currentIndex + 1];

  return (
    <main className="docs-page">
      <div className="docs-layout">
        <aside className={`docs-sidebar ${mobileMenu ? "mobile-open" : ""}`}>
          <div className="docs-brand">
            <div className="docs-brand-mark">S</div>
            <div>
              <div className="docs-brand-name">SOFTWINS</div>
              <div className="docs-brand-caption">Documentation</div>
            </div>
          </div>

          <div className="docs-sidebar-heading">
            <span>DOCUMENTATION</span>
            <span className="docs-version">V1.0</span>
          </div>

          <div className="docs-search">
            <Icon name="search" size={16} />
            <input
              ref={searchRef}
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search documentation..."
              aria-label="Search documentation"
            />
            <kbd>/</kbd>
          </div>

          <nav className="docs-navigation">
            {filteredGroups.map((group) => (
              <div className="docs-nav-group" key={group.title}>
                <button
                  className="docs-group-title"
                  onClick={() => toggleGroup(group.title)}
                  aria-expanded={!collapsed[group.title]}
                >
                  <span>{group.title}</span>
                  <Icon
                    name="chevron"
                    size={13}
                  />
                </button>

                {!collapsed[group.title] && (
                  <div className="docs-group-items">
                    {group.items.map((id) => {
                      const article = articles.find(
                        (item) => item.id === id
                      );

                      return (
                        <button
                          key={id}
                          onClick={() => selectArticle(id)}
                          className={`docs-nav-item ${
                            activeId === id ? "active" : ""
                          }`}
                        >
                          <span className="docs-nav-indicator" />
                          <span>{article.title}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}

            {filteredGroups.length === 0 && (
              <div className="docs-search-empty">
                No documentation found.
              </div>
            )}
          </nav>

          <div className="docs-sidebar-bottom">
            <div className="docs-help-card">
              <div className="docs-help-icon">
                <Icon name="book" size={17} />
              </div>
              <strong>Need more help?</strong>
              <p>Explore the documentation to learn more about Softwins.</p>
              <span>SOFTWINS DOCUMENTATION</span>
            </div>
            <div className="docs-sidebar-meta">
              <span>© 2026 Softwins</span>
              <span>Documentation</span>
            </div>
          </div>
        </aside>

        <section className="docs-content-area">
          <div className="docs-mobile-bar">
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label="Toggle navigation"
            >
              <Icon name="menu" size={19} />
            </button>
            <span>SOFTWINS / DOCS</span>
            <span className="docs-mobile-version">V1.0</span>
          </div>

          <div className="docs-topbar">
            <div className="docs-breadcrumb">
              <span>Documentation</span>
              <Icon name="chevron" size={12} />
              <span className="current">{activeArticle.category}</span>
            </div>

            <div className="docs-topbar-right">
              <span className="docs-live-status">
                <i />
                Documentation
              </span>
            </div>
          </div>

          <article className="docs-article" ref={articleRef} key={activeId}>
            <header className="docs-article-header">
              <div className="docs-article-overline">
                <span>{activeArticle.category}</span>
                <i />
                <span>SOFTWINS DOCS</span>
              </div>

              <h1>{activeArticle.title}</h1>

              <p className="docs-article-description">
                {activeArticle.description}
              </p>

              <div className="docs-article-meta">
                <span>
                  <Icon name="clock" size={14} />
                  {activeArticle.readTime}
                </span>
                <span className="docs-meta-divider" />
                <span>Updated {activeArticle.updated}</span>
              </div>
            </header>

            <div className="docs-article-divider" />

            <div className="docs-article-body">
              {allSections.map((section) => (
                <ArticleSection
                  key={section.id}
                  section={section}
                />
              ))}
            </div>

            <div className="docs-article-end">
              <div className="docs-end-line" />
              <span>END OF ARTICLE</span>
              <div className="docs-end-line" />
            </div>

            <div className="docs-article-navigation">
              {previousArticle ? (
                <button
                  className="docs-article-nav-card"
                  onClick={() => selectArticle(previousArticle.id)}
                >
                  <span className="docs-nav-card-label">
                    <Icon name="chevron" size={12} />
                    PREVIOUS ARTICLE
                  </span>
                  <strong>{previousArticle.title}</strong>
                </button>
              ) : (
                <div />
              )}

              {nextArticle && (
                <button
                  className="docs-article-nav-card next"
                  onClick={() => selectArticle(nextArticle.id)}
                >
                  <span className="docs-nav-card-label">
                    NEXT ARTICLE
                    <Icon name="arrow" size={12} />
                  </span>
                  <strong>{nextArticle.title}</strong>
                </button>
              )}
            </div>

            <footer className="docs-article-footer">
              <span>Was this page helpful?</span>
              <div>
                <button aria-label="Helpful">Yes</button>
                <button aria-label="Not helpful">No</button>
              </div>
            </footer>
          </article>
        </section>

        <aside className="docs-toc">
          <div className="docs-toc-inner">
            <div className="docs-toc-heading">ON THIS PAGE</div>

            <nav className="docs-toc-list">
              {allSections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => goToSection(section.id)}
                  className={`docs-toc-item ${
                    activeSection === section.id ? "active" : ""
                  }`}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {section.title}
                </button>
              ))}
            </nav>

            <div className="docs-toc-divider" />

            <div className="docs-toc-bottom">
              <span>DOCUMENTATION VERSION</span>
              <strong>1.0.0</strong>
              <small>Built for developers.</small>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
