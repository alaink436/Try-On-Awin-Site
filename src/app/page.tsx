"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Globe,
  Menu,
  MessageCircle,
  Palette,
  ShoppingBag,
  Shirt,
  Sparkles,
  X,
  Instagram,
  Mail,
  TrendingUp,
  Zap,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
};

/* ─────────────────────────── NAVBAR ─────────────────────────── */
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#09090b]/80 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white text-sm font-bold">
            T
          </div>
          <span className="text-lg font-semibold tracking-tight">TryOn</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
          <a href="#brands" className="hover:text-white transition-colors">Brands</a>
          <a href="#regions" className="hover:text-white transition-colors">Regions</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="text-sm text-zinc-400 hover:text-white transition-colors px-3 py-1.5">
            Sign in
          </a>
          <a
            href="#contact"
            className="text-sm font-medium bg-white text-zinc-900 rounded-lg px-4 py-2 hover:bg-zinc-200 transition-colors"
          >
            Become a Partner
          </a>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#09090b]/95 backdrop-blur-xl border-b border-white/[0.06] px-6 pb-6 pt-2"
        >
          {["Features", "How it works", "Brands", "Regions"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/ /g, "-")}`}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-zinc-400 hover:text-white transition-colors border-b border-white/[0.04]"
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block mt-4 text-center text-sm font-medium bg-white text-zinc-900 rounded-lg px-4 py-2.5"
          >
            Become a Partner
          </a>
        </motion.div>
      )}
    </header>
  );
}

/* ─────────────────────────── HERO ─────────────────────────── */
function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.96]);

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center px-6 pt-16 overflow-hidden">
      {/* Grid */}
      <div className="hero-grid absolute inset-0" style={{
        maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)",
      }} />

      {/* Gradient orbs */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-600/[0.08] rounded-full blur-[100px]" />
      <div className="absolute top-[30%] left-[30%] w-[300px] h-[300px] bg-fuchsia-600/[0.06] rounded-full blur-[80px]" />

      <motion.div style={{ opacity, scale }} className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs font-medium text-violet-300 mb-8 hover:bg-white/[0.06] transition-colors"
          >
            <Zap className="w-3 h-3" />
            AI-Powered Fashion Technology
            <ChevronRight className="w-3 h-3" />
          </a>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.08] tracking-[-0.035em]"
        >
          <span
            className="block"
            style={{
              background: "linear-gradient(to bottom, #fff, #a1a1aa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Virtual Try-On.
          </span>
          <span
            className="block"
            style={{
              background: "linear-gradient(to bottom, #c4b5fd, rgba(139,92,246,0.5))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Styled by AI.
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mt-6 text-lg text-zinc-500 max-w-xl mx-auto leading-relaxed"
        >
          We&apos;re building personalized avatars with intelligent styling. Color theory,
          seasonal matching, and curated product feeds from premium brands — launching 2026.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-white text-zinc-900 font-medium text-sm rounded-lg px-6 py-3 hover:bg-zinc-200 transition-colors"
          >
            Partner with us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white font-medium px-6 py-3 transition-colors"
          >
            See how it works
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="mt-14 flex items-center justify-center gap-6 text-xs text-zinc-600"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-400">
            <Zap className="w-3 h-3" />
            In Active Development
          </span>
          <span className="w-px h-4 bg-zinc-800" />
          <span>Swiss Engineering</span>
          <span className="w-px h-4 bg-zinc-800" />
          <span>GDPR Compliant</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─────────────────────────── LOGO MARQUEE ─────────────────────────── */
function LogoMarquee() {
  const brands = [
    "Breuninger", "Snipes", "END Clothing", "ASOS", "SSENSE",
    "Farfetch", "Revolve", "Salomon", "AllSaints", "Sandro",
    "LUISAVIAROMA", "Urban Outfitters", "NA-KD", "Scotch & Soda",
  ];

  return (
    <section id="brands" className="py-10 border-y border-white/[0.04] overflow-hidden">
      <p className="text-center text-[11px] uppercase tracking-[0.25em] text-zinc-600 mb-6">
        Integrated with leading fashion retailers
      </p>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#09090b] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#09090b] to-transparent z-10" />
        <div className="flex animate-marquee whitespace-nowrap">
          {[...brands, ...brands].map((b, i) => (
            <span key={i} className="mx-10 text-base font-medium text-zinc-700 select-none">{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── FEATURES ─────────────────────────── */
function Features() {
  const items = [
    {
      icon: Shirt,
      title: "Virtual Try-On",
      desc: "Customers see how clothes look on their personalized 3D avatar — matching their body type, skin tone, and proportions.",
      span: "md:col-span-2",
      gradient: "from-violet-500/10 via-transparent to-transparent",
    },
    {
      icon: MessageCircle,
      title: "AI Styling Agent",
      desc: "Natural language chat that understands fashion. Users describe what they need, the agent queries your catalog intelligently.",
      span: "",
      gradient: "from-blue-500/10 via-transparent to-transparent",
    },
    {
      icon: Palette,
      title: "Color Theory Engine",
      desc: "Algorithmic color matching based on complementary, analogous, and triadic harmonies with skin tone analysis.",
      span: "",
      gradient: "from-pink-500/10 via-transparent to-transparent",
    },
    {
      icon: Sparkles,
      title: "Season & Occasion",
      desc: "Recommendations adapt to weather, time of year, and context — from casual weekends to business meetings.",
      span: "",
      gradient: "from-amber-500/10 via-transparent to-transparent",
    },
    {
      icon: ShoppingBag,
      title: "Product Feed Integration",
      desc: "Seamless Awin, CJ, and Tradedoubler feed ingestion with automatic categorization and vector embedding generation.",
      span: "",
      gradient: "from-emerald-500/10 via-transparent to-transparent",
    },
    {
      icon: TrendingUp,
      title: "Smarter Over Time",
      desc: "Every interaction trains our vector database. The more users browse and buy, the better recommendations become — creating a lasting competitive advantage.",
      span: "md:col-span-2",
      gradient: "from-orange-500/10 via-transparent to-transparent",
    },
    {
      icon: Globe,
      title: "Multi-Region Support",
      desc: "Localized brand catalogs across DACH, UK, USA, France, Italy, Benelux, Spain, and Scandinavia.",
      span: "",
      gradient: "from-cyan-500/10 via-transparent to-transparent",
    },
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-violet-400 mb-3">Platform</p>
          <h2 className="text-3xl md:text-[2.75rem] font-semibold tracking-tight leading-tight">
            Built for conversion, <br className="hidden sm:block" />designed for delight
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-3">
          {items.map((f, i) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className={`group relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-white/[0.1] transition-all duration-300 ${f.span}`}
            >
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-4 group-hover:bg-white/[0.08] transition-colors">
                  <f.icon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base font-semibold mb-1.5">{f.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── HOW IT WORKS ─────────────────────────── */
function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Integrate your product feed",
      desc: "Connect your Awin, CJ, or custom feed. We auto-ingest products, extract colors, and generate semantic embeddings for intelligent matching.",
    },
    {
      n: "02",
      title: "Users create their avatar",
      desc: "Customers build a personalized 3D avatar with their body type, measurements, and skin tone for realistic virtual try-on.",
    },
    {
      n: "03",
      title: "AI recommends & converts",
      desc: "Our styling engine uses a vector database that learns from every interaction. Recommendations get smarter over time — driving increasingly better conversions to your store.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-violet-400 mb-3">For Partners</p>
          <h2 className="text-3xl md:text-[2.75rem] font-semibold tracking-tight leading-tight">
            Three steps to higher <br className="hidden sm:block" />conversion rates
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="relative p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] group hover:border-white/[0.1] transition-all"
            >
              <span className="text-6xl font-bold text-white/[0.03] group-hover:text-violet-500/[0.08] transition-colors absolute top-4 right-4">
                {s.n}
              </span>
              <div className="relative z-10">
                <div className="w-8 h-8 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-xs font-bold text-violet-400 mb-5">
                  {s.n}
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── STATS ─────────────────────────── */
function Stats() {
  const stats = [
    { value: "50+", label: "Brands Targeted" },
    { value: "9", label: "Markets Planned" },
    { value: "AI", label: "Powered Matching" },
    { value: "2026", label: "Launch Year" },
  ];

  return (
    <section className="py-16 px-6 border-y border-white/[0.04]">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {stats.map((s) => (
          <motion.div
            key={s.label}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <div
              className="text-3xl md:text-4xl font-bold"
              style={{
                background: "linear-gradient(to bottom, #fff, #71717a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {s.value}
            </div>
            <p className="mt-1 text-xs text-zinc-600">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────── REGIONS ─────────────────────────── */
function Regions() {
  const data = [
    { region: "DACH", brands: "Breuninger, Snipes, Lounge by Zalando, Peek & Cloppenburg, DefShop", style: "Premium + Streetwear" },
    { region: "United Kingdom", brands: "END Clothing, ASOS, Farfetch, AllSaints, PrettyLittleThing", style: "Luxury Streetwear + Trend" },
    { region: "United States", brands: "SSENSE, Revolve, Urban Outfitters, Nordstrom, Kith", style: "Avant-garde + Contemporary" },
    { region: "France", brands: "Salomon, Sandro, Maje, Galeries Lafayette, The Kooples", style: "Parisian Chic + Gorpcore" },
    { region: "Italy", brands: "LUISAVIAROMA, Mytheresa, Antonioli, Yoox", style: "High Fashion + Multi-Brand" },
    { region: "Benelux", brands: "Scotch & Soda, JD Sports, The Sting, Zalando Lounge", style: "Amsterdam Casual + Urban" },
  ];

  return (
    <section id="regions" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-violet-400 mb-3">Coverage</p>
          <h2 className="text-3xl md:text-[2.75rem] font-semibold tracking-tight leading-tight">
            Localized catalogs, <br className="hidden sm:block" />global reach
          </h2>
          <p className="mt-4 text-zinc-500 max-w-lg mx-auto text-sm">
            Curated brand selections for each market, respecting local trends, sizing, pricing, and shipping.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {data.map((r, i) => (
            <motion.div
              key={r.region}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-white/[0.1] transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">{r.region}</h3>
                <span className="text-[10px] uppercase tracking-wider text-zinc-600 bg-white/[0.04] px-2 py-0.5 rounded-full">
                  {r.style}
                </span>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">{r.brands}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── CTA ─────────────────────────── */
function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto relative">
        <div className="absolute inset-0 bg-violet-600/[0.04] rounded-2xl blur-3xl" />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-10 md:p-16 text-center"
        >
          <h2
            className="text-3xl md:text-4xl font-semibold tracking-tight mb-4"
            style={{
              background: "linear-gradient(to bottom, #fff, #a1a1aa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Ready to increase your
            <br />online conversions?
          </h2>
          <p className="text-zinc-500 max-w-md mx-auto mb-8 text-sm leading-relaxed">
            We&apos;re building the next generation of online fashion discovery.
            Join as an early partner and shape the platform with us.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-white text-zinc-900 font-medium text-sm rounded-lg px-7 py-3 hover:bg-zinc-200 transition-colors"
          >
            Become a Partner
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────── FOOTER ─────────────────────────── */
function Footer() {
  const cols = [
    {
      title: "Product",
      links: [
        { label: "Virtual Try-On", href: "#features" },
        { label: "AI Stylist", href: "#features" },
        { label: "Brand Catalog", href: "#brands" },
      ],
    },
    {
      title: "Partners",
      links: [
        { label: "Become a Partner", href: "#contact" },
        { label: "Affiliate Program", href: "#how-it-works" },
        { label: "Regions", href: "#regions" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Imprint", href: "/imprint" },
        { label: "Cookie Policy", href: "/cookies" },
      ],
    },
  ];

  return (
    <footer id="contact" className="border-t border-white/[0.04] pt-14 pb-8 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="lg:max-w-[240px]">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white text-xs font-bold">
                T
              </div>
              <span className="text-base font-semibold">TryOn</span>
            </div>
            <p className="text-xs text-zinc-600 leading-relaxed mb-5">
              AI-powered virtual fashion try-on. Personalized styling for the modern shopper. Engineered in Switzerland.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-zinc-700 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="mailto:try.on.teambusiness@gmail.com" className="text-zinc-700 hover:text-white transition-colors" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="text-xs font-semibold mb-3 text-zinc-300">{c.title}</h4>
                <ul className="space-y-2">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-xs text-zinc-600 hover:text-white transition-colors">{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-zinc-700">
          <p>&copy; {new Date().getFullYear()} TryOn — Alain Kessler. All rights reserved.</p>
          <p>Weinfelden, Switzerland</p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────── PAGE ─────────────────────────── */
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoMarquee />
      <Features />
      <HowItWorks />
      <Stats />
      <Regions />
      <CTASection />
      <Footer />
    </main>
  );
}
