import Link from "next/link";

export const metadata = {
  title: "Imprint — TryOn",
};

export default function ImprintPage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-300">
      <div className="max-w-3xl mx-auto px-6 py-32">
        <Link
          href="/"
          className="text-sm text-zinc-600 hover:text-white transition-colors mb-8 inline-block"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl font-semibold text-white mb-2">Imprint</h1>
        <p className="text-sm text-zinc-600 mb-10">
          Information according to Swiss law (Art. 3 UWG / Art. 14 OR)
        </p>

        <div className="space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Responsible Person</h2>
            <div className="space-y-1 text-zinc-400">
              <p className="text-white font-medium">Alain Kessler</p>
              <p>Hofackerstrasse 8</p>
              <p>8570 Weinfelden</p>
              <p>Switzerland</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
            <div className="space-y-1 text-zinc-400">
              <p>
                Email:{" "}
                <a
                  href="mailto:try.on.teambusiness@gmail.com"
                  className="text-violet-400 hover:text-violet-300 underline"
                >
                  try.on.teambusiness@gmail.com
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Project</h2>
            <div className="space-y-1 text-zinc-400">
              <p>
                <span className="text-white">TryOn</span> — AI-Powered Virtual Fashion Try-On Platform
              </p>
              <p>Currently in active development. Launch planned for 2026.</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Disclaimer</h2>
            <p>
              The content of this website has been prepared with care. However, we cannot guarantee
              the accuracy, completeness, or timeliness of the information provided. Links to
              external websites are provided for convenience; we have no control over their content
              and accept no responsibility for it.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
