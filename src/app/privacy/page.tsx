import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — TryOn",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-300">
      <div className="max-w-3xl mx-auto px-6 py-32">
        <Link
          href="/"
          className="text-sm text-zinc-600 hover:text-white transition-colors mb-8 inline-block"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl font-semibold text-white mb-2">Privacy Policy</h1>
        <p className="text-sm text-zinc-600 mb-10">Last updated: March 2026</p>

        <div className="space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Overview</h2>
            <p>
              TryOn (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, and safeguard your personal
              information when you use our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. Data We Collect</h2>
            <p>We may collect the following types of data:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-400">
              <li>Contact information (name, email) when you reach out to us</li>
              <li>Usage data (pages visited, interactions) via analytics</li>
              <li>Device and browser information for site optimization</li>
              <li>Avatar and preference data when using the TryOn platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. How We Use Your Data</h2>
            <p>Your data is used to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-400">
              <li>Provide and improve our virtual try-on and styling services</li>
              <li>Personalize product recommendations via our AI styling engine</li>
              <li>Communicate with you regarding partnerships or support</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. Data Storage & Security</h2>
            <p>
              Your data is stored securely using industry-standard encryption. We use Supabase
              (hosted in the EU) for data storage and do not sell your personal information to
              third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Your Rights (GDPR)</h2>
            <p>Under the GDPR and Swiss data protection law, you have the right to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-400">
              <li>Access, correct, or delete your personal data</li>
              <li>Withdraw consent at any time</li>
              <li>Request data portability</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Cookies</h2>
            <p>
              We use essential cookies for site functionality. For more details, see our{" "}
              <Link href="/cookies" className="text-violet-400 hover:text-violet-300 underline">
                Cookie Policy
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Contact</h2>
            <p>
              For privacy-related inquiries, contact us at:{" "}
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
