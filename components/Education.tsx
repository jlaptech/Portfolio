const items = [
  {
    type: "degree",
    title: "Diploma in Computer Networking and Technical Support",
    institution: "Seneca College of Applied Arts and Technology",
    location: "Toronto, ON",
    year: "2021",
    status: null,
  },
  {
    type: "cert",
    title: "Microsoft 365 Certified: Fundamentals",
    institution: "Microsoft",
    location: null,
    year: "2022",
    status: "active",
  },
  {
    type: "cert",
    title: "SC-900: Security, Compliance & Identity Fundamentals",
    institution: "Microsoft",
    location: null,
    year: null,
    status: "in-progress",
  },
  {
    type: "cert",
    title: "Google AI Essentials",
    institution: "Google",
    location: null,
    year: "2024",
    status: "active",
  },
];

const statusBadge: Record<string, string> = {
  active: "bg-cyan-400/10 text-cyan-400 border-cyan-400/20",
  "in-progress": "bg-orange-400/10 text-orange-400 border-orange-400/20",
};

const statusLabel: Record<string, string> = {
  active: "Active",
  "in-progress": "In Progress",
};

const typeIndicator: Record<string, string> = {
  degree: "bg-violet-400",
  cert: "bg-cyan-400",
};

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education & Certifications</h2>
          <p className="text-gray-400">Credentials and continuous learning</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors duration-200 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${typeIndicator[item.type]}`} />
                  <span className="text-xs text-gray-500 uppercase tracking-widest font-mono">
                    {item.type === "degree" ? "Education" : "Certification"}
                  </span>
                </div>
                {item.status && (
                  <span className={`text-xs px-2 py-0.5 rounded border ${statusBadge[item.status]}`}>
                    {statusLabel[item.status]}
                  </span>
                )}
              </div>

              <h3 className="text-base font-semibold text-white leading-snug">{item.title}</h3>

              <div>
                <p className="text-cyan-400 text-sm">{item.institution}</p>
                {item.location && (
                  <p className="text-gray-500 text-xs mt-0.5">{item.location}</p>
                )}
                {item.year && (
                  <p className="text-gray-500 text-xs mt-0.5">{item.year}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
