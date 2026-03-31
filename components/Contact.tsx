export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-900/30">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-400 mb-10 text-lg">
          Open to new opportunities, collaborations, and conversations about IT and AI.
        </p>

        <a
          href="mailto:jlaperalta@outlook.com"
          className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold rounded-lg transition-colors duration-200 text-lg"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          jlaperalta@outlook.com
        </a>

        <p className="mt-6 text-gray-600 text-sm">Vancouver, BC · Open to remote</p>

        <div className="mt-16 pt-8 border-t border-gray-800 text-gray-600 text-sm">
          Built with Next.js & Tailwind CSS · Deployed on Vercel
        </div>
      </div>
    </section>
  );
}
