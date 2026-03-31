const skillGroups = [
  {
    category: "Cloud & Identity",
    color: "cyan",
    skills: ["Entra ID (Azure AD)", "Microsoft 365", "Azure Cloud Services", "Exchange Online", "Google Workspace"],
  },
  {
    category: "Endpoint & Device Mgmt",
    color: "blue",
    skills: ["Microsoft Intune (MDM)", "PowerShell Scripting", "Group Policy", "Device Imaging", "Asset Management"],
  },
  {
    category: "Virtualization",
    color: "violet",
    skills: ["VMware vSphere/ESXi", "Hyper-V", "Veeam Backup & Replication", "Azure VM Management"],
  },
  {
    category: "Networking",
    color: "emerald",
    skills: ["LAN/WAN", "VPN", "Cisco/Meraki", "Firewall Configuration", "DNS Management"],
  },
  {
    category: "Security",
    color: "orange",
    skills: ["Sophos", "Fortinet", "MFA Configuration", "Security Groups", "Compliance Management"],
  },
  {
    category: "Support & Tools",
    color: "pink",
    skills: ["Windows/macOS Endpoints", "AV & Boardroom Support", "N-able", "WatchGuard", "Ticket Management"],
  },
];

const colorMap: Record<string, string> = {
  cyan: "bg-cyan-400/10 text-cyan-400 border-cyan-400/20",
  blue: "bg-blue-400/10 text-blue-400 border-blue-400/20",
  violet: "bg-violet-400/10 text-violet-400 border-violet-400/20",
  emerald: "bg-emerald-400/10 text-emerald-400 border-emerald-400/20",
  orange: "bg-orange-400/10 text-orange-400 border-orange-400/20",
  pink: "bg-pink-400/10 text-pink-400 border-pink-400/20",
};

const headerColorMap: Record<string, string> = {
  cyan: "text-cyan-400",
  blue: "text-blue-400",
  violet: "text-violet-400",
  emerald: "text-emerald-400",
  orange: "text-orange-400",
  pink: "text-pink-400",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-hidden">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-400">Core competencies built across enterprise environments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-hidden">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors duration-200"
            >
              <h3 className={`font-semibold mb-4 ${headerColorMap[group.color]}`}>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs px-2 py-1 rounded border ${colorMap[group.color]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
