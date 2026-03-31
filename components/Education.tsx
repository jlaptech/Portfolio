const items = [
  {
    type: "degree",
    title: "Diploma in Computer Networking and Technical Support",
    institution: "Seneca College",
    year: "2020",
    icon: "🎓",
  },
  {
    type: "cert",
    title: "Microsoft 365 Certified: Fundamentals",
    institution: "Microsoft",
    year: "Active",
    icon: "🏅",
  },
];

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
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-cyan-400/30 transition-colors duration-200"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
              <p className="text-cyan-400 text-sm mb-1">{item.institution}</p>
              <p className="text-gray-500 text-sm">{item.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
