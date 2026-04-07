const projects = [
  {
    title: "MFA Enrollment Deployment — 150 Users",
    description:
      "Appointed project lead for a company-wide multi-factor authentication rollout at F12.net. Planned and coordinated enrollment for 150 users across 3 days at 50 users per day. Delivered 148 of 150 completions — 98.7% on schedule. The 2 remaining users were on approved leave. Zero security incidents. Zero rollback required.",
    tags: ["Project Lead", "Microsoft MFA", "Microsoft 365", "Deployment Planning", "User Training"],
    tagColor: "blue",
    github: null,
    live: null,
    metric: "98.7% completion · 150 users · 3 days",
  },
  {
    title: "Gmail Inbox Cleanup Tool",
    description:
      "Python automation tool that connects to Gmail via the Gmail API and OAuth2 to automatically remove promotional and junk emails older than 30 days. Features a protected sender whitelist, dry-run preview mode, and timestamped output logs — no email is deleted without review first.",
    tags: ["Python", "Gmail API", "OAuth2", "Google Cloud", "Automation"],
    tagColor: "emerald",
    github: "https://github.com/jlaptech/gmail-cleanup",
    live: null,
    metric: null,
  },
  {
    title: "Personal IT Portfolio",
    description:
      "This site — a fully responsive dark-themed portfolio built with Next.js and Tailwind CSS, deployed on Vercel. Features scroll-triggered animations, a modular component architecture, and a skills grid built to showcase enterprise IT experience clearly and professionally.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    tagColor: "cyan",
    github: "https://github.com/jlaptech/Portfolio",
    live: "https://jlaperalta.ca",
    metric: null,
  },
];

const tagColorMap: Record<string, string> = {
  cyan: "bg-cyan-400/10 text-cyan-400 border-cyan-400/20",
  emerald: "bg-emerald-400/10 text-emerald-400 border-emerald-400/20",
  blue: "bg-blue-400/10 text-blue-400 border-blue-400/20",
};

const learning = [
  "AI Development with Claude",
  "SC-900: Security, Compliance & Identity",
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-hidden">
          <h2 className="text-4xl font-bold mb-4">Projects & Learning</h2>
          <p className="text-gray-400">What I've delivered, built, and currently exploring</p>
        </div>

        {/* Currently Learning */}
        <div className="mb-12 animate-hidden">
          <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-widest mb-4">
            Currently Learning
          </h3>
          <div className="flex flex-wrap gap-3">
            {learning.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Project Cards */}
        <div className="animate-hidden">
          <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-widest mb-6">
            Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors duration-200 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">{project.title}</h4>

                  {project.metric && (
                    <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-blue-400/10 border border-blue-400/20 text-blue-400 text-xs font-mono">
                      {project.metric}
                    </div>
                  )}

                  <p className="text-sm text-gray-400 leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2 py-1 rounded border ${tagColorMap[project.tagColor]}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 text-gray-400 text-sm transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold text-sm transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Site
                    </a>
                  )}

                  {!project.github && !project.live && (
                    <span className="text-xs text-gray-600 font-mono pt-2">Internal project · enterprise deployment</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
