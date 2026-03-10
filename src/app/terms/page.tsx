import Link from "next/link";

export const metadata = {
  title: "Terms of Service — TryOn",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-300">
      <div className="max-w-3xl mx-auto px-6 py-32">
        <Link
          href="/"
          className="text-sm text-zinc-600 hover:text-white transition-colors mb-8 inline-block"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl font-semibold text-white mb-2">Terms of Service</h1>
        <p className="text-sm text-zinc-600 mb-10">Last updated: March 2026</p>

        <div className="space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the TryOn platform and website, you agree to be bound by
              these Terms of Service. If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. Service Description</h2>
            <p>
              TryOn provides a virtual fashion try-on platform with AI-powered styling
              recommendations. The platform connects users with products from affiliate partner
              retailers. TryOn is currently in active development.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. Partner Obligations</h2>
            <p>As a partner, you agree to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-400">
              <li>Provide accurate and up-to-date product feed data</li>
              <li>Maintain valid affiliate program terms</li>
              <li>Not misuse the platform or its data</li>
              <li>Comply with applicable advertising and commerce laws</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. Intellectual Property</h2>
            <p>
              All content, design, code, and AI models on the TryOn platform are the intellectual
              property of TryOn. Partner product data remains the property of the respective
              brand or retailer.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Limitation of Liability</h2>
            <p>
              TryOn is provided &quot;as is&quot; without warranties of any kind. We are not liable
              for any indirect, incidental, or consequential damages arising from your use of
              the platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Governing Law</h2>
            <p>
              These terms are governed by the laws of Switzerland. Any disputes shall be resolved
              in the courts of Thurgau, Switzerland.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Contact</h2>
            <p>
              Questions about these terms? Contact us at:{" "}
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
