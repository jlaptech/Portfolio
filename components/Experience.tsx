const jobs = [
  {
    company: "Dyrand Systems",
    title: "Systems Specialist",
    location: "Vancouver, BC",
    period: "July 2024 – March 2025",
    bullets: [
      "Authored and maintained SOPs, onboarding guides, and knowledge base documentation adopted across the team — establishing repeatable service delivery standards used by the entire support desk.",
      "Coached and onboarded new technicians end to end, covering tooling, ticket management, SLA adherence, and client communication standards from day one.",
      "Managed Entra ID and Microsoft 365 including Exchange Online, security groups, and Google Workspace permissions across multiple client environments.",
      "Automated device configuration and security patching via Microsoft Intune and PowerShell, reducing manual deployment overhead across client fleets.",
      "Maintained IT asset inventory and administered backup and disaster recovery solutions including Axcient and MSP360 to support client business continuity.",
    ],
  },
  {
    company: "F12.net",
    title: "Senior Service Desk Analyst",
    location: "Toronto, ON",
    period: "June 2022 – December 2023",
    bullets: [
      "Appointed project lead for a company-wide MFA enrollment initiative — coordinated deployment for 150 users across 3 days, achieving 98.7% completion on schedule with zero security incidents.",
      "Developed junior technicians from the ground up — coaching from basic tooling and professional etiquette through to ticket management, SLA compliance, and independent client handling.",
      "Authored team SOPs, onboarding documentation, and knowledge base articles that became the standard reference for new hires, reducing ramp-up time and repeat escalations.",
      "Administered virtual environments on vSphere, Hyper-V, and Azure for high availability of client workloads, and managed Veeam and Datto backup and recovery solutions.",
      "Deployed automated endpoint policies using Group Policy and Intune, and managed multi-vendor security platforms including Sophos and Fortinet for cybersecurity compliance.",
    ],
  },
  {
    company: "F12.net",
    title: "Service Desk Analyst / IT Technician",
    location: "Toronto, ON",
    period: "October 2021 – June 2022",
    bullets: [
      "Served as first point of contact for end-user technical inquiries, resolving hardware, software, and peripheral issues with a client-first approach.",
      "Resolved LAN/WAN, Wi-Fi, and VPN connectivity issues for remote and hybrid users, escalating complex incidents with structured documentation.",
      "Contributed to onboarding documentation and internal knowledge base, ensuring new team members had clear reference materials from day one.",
      "Administered Microsoft 365 portal including Exchange permissions, calendar sharing, and Security & Compliance settings.",
      "Delivered after-hours emergency support for critical system updates and network infrastructure patches to ensure client business continuity.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-hidden">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-gray-400">Professional journey in IT infrastructure, support, and team leadership</p>
        </div>

        <div className="relative animate-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-800 ml-6 hidden md:block" />

          <div className="space-y-12">
            {jobs.map((job, i) => (
              <div key={i} className="md:pl-16 relative">
                <div className="hidden md:flex absolute left-0 top-1 w-12 h-12 bg-gray-900 border border-gray-700 rounded-full items-center justify-center text-cyan-400 text-xs font-bold font-mono">
                  {String(jobs.length - i).padStart(2, "0")}
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors duration-200">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{job.title}</h3>
                      <p className="text-cyan-400 font-medium">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">{job.period}</p>
                      <p className="text-sm text-gray-500">{job.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {job.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-sm text-gray-400">
                        <span className="text-cyan-400 mt-0.5 shrink-0">▸</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
