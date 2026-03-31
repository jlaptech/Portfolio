export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-hidden">
          <h2 className="text-4xl font-bold mb-4">Projects & Learning</h2>
          <p className="text-gray-400">What I'm building and currently exploring</p>
        </div>

        {/* Currently Learning */}
        <div className="mb-12 animate-hidden">
          <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-widest mb-4">Currently Learning</h3>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Learning AI using Claude
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="animate-hidden">
          <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-widest mb-4">Projects</h3>
          <div className="border border-dashed border-gray-700 rounded-xl p-12 text-center">
            <p className="text-gray-600 text-sm font-mono mb-2">// coming soon</p>
            <p className="text-gray-500">Projects are in progress — check back soon.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
