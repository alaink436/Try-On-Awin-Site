import Link from "next/link";

export const metadata = {
  title: "Cookie Policy — TryOn",
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-300">
      <div className="max-w-3xl mx-auto px-6 py-32">
        <Link
          href="/"
          className="text-sm text-zinc-600 hover:text-white transition-colors mb-8 inline-block"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl font-semibold text-white mb-2">Cookie Policy</h1>
        <p className="text-sm text-zinc-600 mb-10">Last updated: March 2026</p>

        <div className="space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. They
              help websites function properly and provide information to site owners.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Cookies We Use</h2>
            <div className="mt-3 border border-white/[0.06] rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                    <th className="text-left p-3 text-white font-medium">Type</th>
                    <th className="text-left p-3 text-white font-medium">Purpose</th>
                    <th className="text-left p-3 text-white font-medium">Required</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-400">
                  <tr className="border-b border-white/[0.04]">
                    <td className="p-3">Essential</td>
                    <td className="p-3">Site functionality, session management</td>
                    <td className="p-3">Yes</td>
                  </tr>
                  <tr className="border-b border-white/[0.04]">
                    <td className="p-3">Analytics</td>
                    <td className="p-3">Understanding how visitors use our site</td>
                    <td className="p-3">No</td>
                  </tr>
                  <tr>
                    <td className="p-3">Preferences</td>
                    <td className="p-3">Remembering your avatar and styling settings</td>
                    <td className="p-3">No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Managing Cookies</h2>
            <p>
              You can control cookies through your browser settings. Disabling essential cookies
              may affect site functionality. Non-essential cookies are only set with your consent.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
            <p>
              Questions about our cookie policy? Contact us at:{" "}
              <a
                href="mailto:try.on.teambusiness@gmail.com"
                className="text-violet-400 hover:text-violet-300 underline"
              >
                try.on.teambusiness@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
