"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  Mail,
  ExternalLink,
  BrainCircuit,
  BarChart3,
  Layers,
  Compass,
  FolderKanban,
  Database,
  Globe,
  CheckCircle,
  Trophy,
} from "lucide-react";

// Inline SVG for social icons
const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.34 6.5-1.5 6.5-7.07a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5.57 3.3 6.73 6.5 7.07a4.8 4.8 0 0 0-1 3.03V22"/><path d="M9 20c-5 1.5-5-2.5-7-3"/></svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1, delayChildren: 0.1 },
};

export default function PortfolioUI() {
  return (
    <div className="w-full text-foreground overflow-hidden">
      {/* ABOUT SECTION — MBA STYLE */}
      <section
        id="about"
        className="relative w-full px-6 pt-8 pb-0"
        style={{ backgroundColor: "#121212" }}
      >
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* 2-column grid */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* LEFT — Story */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-8 bg-[#f97316]" />
                <span className="text-[#f97316] text-sm font-semibold uppercase tracking-[0.2em]">About Me</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-tight tracking-tight">
                Tech &amp; Business<br />
                <span className="text-[#f97316]">Enthusiast</span>
              </h2>
              <div className="space-y-5 text-white/70 leading-[1.85] text-[0.975rem]">
                <p>I&apos;m a Computer Science student at GITAM focused on building AI-driven solutions and applying data analytics to real-world problems.</p>
                <p>I have hands-on experience as a Data Science Intern, where I worked on practical business use cases using EDA, statistical analysis, and Python. I&apos;ve also developed AI-based systems such as an accessibility assistant for visually impaired users using computer vision, OCR, voice interfaces, and generative AI.</p>
                <p>Beyond technical execution, I actively explore how AI, data, and digital systems drive business strategy, product decisions, and scalable growth.</p>
                <p>I focus on solving real-world problems by combining technical execution with business thinking.</p>
              </div>
              <div className="pt-2">
                <a
                  href="mailto:kothalankabhavan@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#f97316]/40 text-[#f97316] text-sm font-semibold hover:bg-[#f97316]/10 hover:border-[#f97316]/70 transition-all duration-300"
                >
                  Get in Touch <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            {/* RIGHT — Insight Cards */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="grid gap-4"
            >
              {[
                { Icon: BrainCircuit, title: "AI Systems Thinking", body: "Designing intelligent, scalable solutions with computer vision, NLP, and large language models." },
                { Icon: BarChart3, title: "Data → Decisions", body: "Applying analytics, EDA, and statistical reasoning to drive business outcomes and strategy." },
                { Icon: Layers, title: "Product & Growth", body: "Understanding user problems, market context, and building end-to-end impactful products." },
                { Icon: Compass, title: "Future Direction", body: "Targeting Analytics, Product, and Tech Management roles—where strategy meets execution." },
              ].map(({ Icon, title, body }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.12 * i + 0.15 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-5 rounded-2xl flex gap-4 items-start cursor-default transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(249,115,22,0.18)",
                    backdropFilter: "blur(12px)",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.boxShadow = "0 0 18px rgba(249,115,22,0.07)";
                    el.style.borderColor = "rgba(249,115,22,0.32)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.boxShadow = "none";
                    el.style.borderColor = "rgba(249,115,22,0.18)";
                  }}
                >
                  <div className="mt-0.5 shrink-0 p-2 rounded-lg" style={{ background: "rgba(249,115,22,0.08)" }}>
                    <Icon className="h-4 w-4 text-[#f97316]" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-white/90 font-semibold text-sm leading-snug">{title}</p>
                    <p className="text-white/45 text-[0.8rem] leading-relaxed">{body}</p>
                  </div>
                </motion.div>
              ))}

            </motion.div>
          </div>

          {/* MBA Metric Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: FolderKanban,
                label: "AI Projects Built",
                sub: "Computer Vision • NLP • GenAI"
              },
              {
                icon: Database,
                label: "Data Science Experience",
                sub: "EDA • Python • Business Insights"
              },
              {
                icon: Layers,
                label: "Analytics & Tech Stack",
                sub: "End-to-end problem solving"
              },
              {
                icon: Globe,
                label: "Real-World Impact",
                sub: "Solutions beyond coursework"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04, y: -4, boxShadow: "0 8px 30px rgba(249,115,22,0.15)" }}
                className="px-6 py-7 rounded-xl flex flex-col items-center text-center gap-3 transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  boxShadow: "inset 0 0 20px rgba(255,255,255,0.02)",
                }}
              >
                <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-[#f97316]/50">
                  <item.icon className="w-6 h-6 text-[#f97316]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-white font-bold text-[0.95rem] leading-snug">{item.label}</p>
                  <p className="text-white/40 text-[0.8rem] mt-1 tracking-wide">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <div className="h-24" style={{ backgroundColor: "#121212" }} />

      {/* ═══════════════════════════════════ */}
      {/* CORE CAPABILITIES                  */}
      {/* ═══════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 px-6" id="skills" style={{ backgroundColor: "#121212" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="mb-4 text-center">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-[#f97316]" />
              <span className="text-[#f97316] text-sm font-semibold uppercase tracking-[0.2em]">Capabilities</span>
              <span className="h-px w-8 bg-[#f97316]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">Core Capabilities</h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Blending technology, analytics, and business thinking to build impactful solutions.
            </p>
          </motion.div>

          <div className="mt-14 grid sm:grid-cols-2 gap-6">
            {[
              {
                Icon: BrainCircuit,
                title: "AI Systems Design",
                skills: ["Computer Vision & NLP", "Generative AI & LLMs", "Systems Architecture"],
                insight: "Designing intelligent, scalable solutions using AI technologies.",
              },
              {
                Icon: BarChart3,
                title: "Data-Driven Decision Making",
                skills: ["Exploratory Data Analysis (EDA)", "Statistical Reasoning", "Business Intelligence"],
                insight: "Turning raw data into actionable insights for decision-making.",
              },
              {
                Icon: Layers,
                title: "Product Thinking",
                skills: ["User-Centric Problem Solving", "Market Context & Strategy", "End-to-End Product Lifecycle"],
                insight: "Aligning technical development with real-world business needs.",
              },
              {
                Icon: Compass,
                title: "Automation & Workflows",
                skills: ["Scalable Process Automation", "API Integrations", "Workflow Optimization"],
                insight: "Enhancing operational efficiency through intelligent automation.",
              },
            ].map(({ Icon, title, skills, insight }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(249,115,22,0.10)" }}
                className="p-7 rounded-2xl flex flex-col gap-5 cursor-default transition-all duration-300 relative overflow-hidden group"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(249,115,22,0.18)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 relative z-10">
                  <div className="p-2.5 rounded-xl transition-colors duration-300 group-hover:bg-[#f97316]/20" style={{ background: "rgba(249,115,22,0.10)" }}>
                    <Icon className="h-5 w-5 text-[#f97316]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-white font-bold text-[1.05rem]">{title}</h3>
                </div>

                {/* Skills list */}
                <ul className="space-y-2 relative z-10">
                  {skills.map((s) => (
                    <li key={s} className="flex items-center gap-2.5 text-sm text-white/65">
                      <span className="h-1 w-1 rounded-full bg-[#f97316] shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>

                {/* Insight bar */}
                <div className="mt-auto pt-4 border-t border-white/5 relative z-10">
                  <p className="text-[#f97316]/80 text-xs font-medium italic leading-relaxed">{insight}</p>
                </div>
                
                {/* Bottom Highlight Animation */}
                <div className="absolute bottom-0 left-0 h-1 bg-[#f97316] w-0 group-hover:w-full transition-all duration-500 ease-out" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ */}
      {/* SELECTED WORK                      */}
      {/* ═══════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 px-6" id="projects" style={{ backgroundColor: "#0f0f0f" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="mb-4 text-center">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-[#f97316]" />
              <span className="text-[#f97316] text-sm font-semibold uppercase tracking-[0.2em]">Selected Work</span>
              <span className="h-px w-8 bg-[#f97316]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">Selected Work</h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Projects focused on solving real-world problems using AI, data, and business thinking.
            </p>
          </motion.div>

          <div className="mt-14 grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Lumora AI",
                image: "/projects/lumora-ai.png",
                tags: ["Next.js", "FastAPI", "spaCy", "Groq/Gemini", "Supabase"],
                link: "https://github.com/bk-1806/lumora-ai",
                problem: "Job seekers struggle to optimize resumes for ATS systems, reducing visibility.",
                approach: "Built an AI-powered platform using NLP and LLMs to analyze resumes and generate optimization suggestions.",
                impact: "Improves resume-job alignment and increases shortlisting chances.",
                insight: "NLP + LLMs can bridge candidate potential and recruiter expectations.",
              },
              {
                title: "UniSupport AI",
                image: "/projects/unisupport.png",
                tags: ["Next.js", "FastAPI", "LLM APIs"],
                link: "https://github.com/bk-1806/UniSupport",
                problem: "University support systems are slow and inconsistent.",
                approach: "Developed an AI agent to process queries and generate structured responses.",
                impact: "Improves response speed and standardization.",
                insight: "AI agents enhance operational efficiency in institutions.",
              },
              {
                title: "Universal Access AI",
                image: "/projects/universal-access.png",
                tags: ["Python", "YOLOv3", "OCR", "LLM APIs"],
                link: "https://github.com/bk-1806/Universal-Access-AI",
                problem: "Visually impaired users face accessibility challenges.",
                approach: "Built an AI assistant using CV, OCR, and voice interfaces.",
                impact: "Improves accessibility and independence.",
                insight: "AI can create inclusive real-world solutions.",
              },
              {
                title: "Farmers Chatbot",
                image: "/projects/farmers-chatbot.png",
                tags: ["n8n", "Google Gemini", "MongoDB", "WhatsApp API"],
                link: "https://github.com/bk-1806/n8n_project",
                problem: "Farmers lack access to real-time guidance.",
                approach: "Built automated chatbot using n8n workflows and APIs.",
                impact: "Improves knowledge accessibility.",
                insight: "Automation can scale knowledge delivery.",
              },
            ].map((p, i) => (
              <motion.a
                key={i}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group block rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(249,115,22,0.18)",
                  backdropFilter: "blur(12px)",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "rgba(249,115,22,0.45)";
                  el.style.boxShadow = "0 16px 48px rgba(249,115,22,0.12)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "rgba(249,115,22,0.18)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* ── Image Preview ── */}
                <div className="relative w-full h-52 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Bottom gradient so content blends in */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent" />
                  
                  {/* Dark hover overlay with center text */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold tracking-wide flex items-center gap-2">
                      View Project <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                {/* ── Card header ── */}
                <div className="px-6 pt-5 pb-4 border-b border-white/5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-white font-bold text-xl group-hover:text-[#f97316] transition-colors duration-300">
                      {p.title}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-white/25 group-hover:text-[#f97316] shrink-0 transition-colors duration-300 mt-1" />
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {p.tags.map(t => (
                      <span
                        key={t}
                        className="text-[0.68rem] font-medium px-2.5 py-0.5 rounded-full text-white/55"
                        style={{ background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.15)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ── Structured story ── */}
                <div className="px-6 py-5 space-y-3.5">
                  {[
                    { dot: "bg-red-500/70",     label: "Problem",  text: p.problem },
                    { dot: "bg-yellow-400/70",  label: "Approach", text: p.approach },
                    { dot: "bg-emerald-400/70", label: "Impact",   text: p.impact },
                  ].map(({ dot, label, text }) => (
                    <div key={label} className="flex gap-3 items-start">
                      <span className={`h-2 w-2 rounded-full ${dot} shrink-0 mt-[5px]`} />
                      <div>
                        <span className="text-white/35 text-[0.68rem] font-semibold uppercase tracking-wider">{label}</span>
                        <p className="text-white/70 text-sm leading-relaxed mt-0.5">{text}</p>
                      </div>
                    </div>
                  ))}

                  {/* Key Insight */}
                  <div className="mt-2 pt-3 border-t border-white/5 rounded-xl px-4 py-3" style={{ background: "rgba(249,115,22,0.05)" }}>
                    <span className="text-[#f97316]/75 text-[0.68rem] font-semibold uppercase tracking-wider">Key Insight</span>
                    <p className="text-white/60 text-sm mt-1 italic leading-relaxed">{p.insight}</p>
                  </div>
                </div>

                {/* ── Footer CTA ── */}
                <div className="px-6 pb-6">
                  <span className="inline-flex items-center gap-1.5 text-[#f97316] text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    View on GitHub <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ */}
      {/* CERTIFICATIONS                       */}
      {/* ═══════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 px-6" id="certifications" style={{ backgroundColor: "#121212" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-[#f97316]" />
              <span className="text-[#f97316] text-sm font-semibold uppercase tracking-[0.2em]">Achievements</span>
              <span className="h-px w-8 bg-[#f97316]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Certifications</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Google Digital Marketing", issuer: "Google", tag: "Digital Marketing" },
              { name: "Google Cloud Data Analytics with Gemini", issuer: "Google Cloud", tag: "Analytics" },
              { name: "AWS Cloud Practitioner", issuer: "AWS", tag: "Cloud" },
              { name: "Infosys AI & Data Science", issuer: "Infosys", tag: "AI/Data" },
              { name: "Reliance IoT Network Specialist", issuer: "Reliance", tag: "IoT" }
            ].map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-6 rounded-2xl flex flex-col gap-3 transition-all duration-300 relative overflow-hidden group"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(249,115,22,0.15)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="flex justify-between items-start">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#f97316]/50 transition-colors">
                    <CheckCircle className="h-6 w-6 text-[#f97316]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[0.65rem] font-bold uppercase tracking-wider px-2 py-1 rounded bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20">
                    {cert.tag}
                  </span>
                </div>
                <div className="mt-2">
                  <h3 className="text-white font-bold text-lg leading-snug">{cert.name}</h3>
                  <p className="text-white/40 text-sm mt-1">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ */}
      {/* EXPERIENCE                         */}
      {/* ═══════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 px-6" id="experience" style={{ backgroundColor: "#0f0f0f" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-[#f97316]" />
              <span className="text-[#f97316] text-sm font-semibold uppercase tracking-[0.2em]">Career</span>
              <span className="h-px w-8 bg-[#f97316]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Experience</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                role: "Data Analyst Intern",
                company: "Classique Engineering Enterprises",
                summary: "Applied analytics to identify operational inefficiencies and improve decision visibility.",
                bullets: [
                  "Analyzed operational datasets → identified inefficiencies improving decision visibility",
                  "Built dashboards → enabled faster business insights",
                  "Delivered recommendations → supported performance optimization",
                ]
              },
              {
                role: "Marketing Team Member",
                company: "GUSAC - GITAM",
                summary: "Contributed to marketing and student engagement for large-scale university events.",
                bullets: [
                  "Contributed to planning and execution of GUSAC Carnival 10.0",
                  "Supported marketing campaigns → improved student engagement",
                  "Collaborated with teams → ensured smooth event execution",
                ]
              },
              {
                role: "Operations & Umpiring Member",
                company: "GITAM CRICKET CLUB",
                summary: "Assisted in logistics and operational execution for major sports tournaments.",
                bullets: [
                  "Assisted in organizing tournaments (GPL, PitchCraft)",
                  "Managed on-ground operations → ensured smooth event flow",
                  "Coordinated with teams → improved event execution",
                ]
              }
            ].map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="p-8 rounded-2xl relative overflow-hidden group transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderLeft: "4px solid #f97316",
                  backdropFilter: "blur(12px)",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.backgroundColor = "rgba(255,255,255,0.04)";
                  el.style.borderColor = "rgba(249,115,22,0.3)";
                  el.style.boxShadow = "0 12px 40px rgba(249,115,22,0.08)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.backgroundColor = "rgba(255,255,255,0.02)";
                  el.style.borderColor = "rgba(255,255,255,0.05)";
                  el.style.boxShadow = "none";
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                  <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#f97316]">
                    {exp.role}
                  </h3>
                  <span className="text-white/40 text-sm font-bold tracking-widest uppercase mt-2 sm:mt-0">{exp.company}</span>
                </div>
                <p className="text-white/60 text-sm italic mb-5">{exp.summary}</p>
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-3 items-start text-white/75 text-[0.9rem] leading-relaxed">
                      <span className="text-[#f97316] font-bold mt-[1px]">•</span>
                      <span dangerouslySetInnerHTML={{ __html: bullet.replace('→', '<span class="text-[#f97316] font-bold mx-1">→</span>') }} />
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ */}
      {/* AWARDS & ACHIEVEMENTS               */}
      {/* ═══════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 px-6" id="awards" style={{ backgroundColor: "#121212" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Awards & Achievements</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, scale: 1.02, boxShadow: "0 10px 40px rgba(249,115,22,0.15)" }}
            className="p-10 rounded-2xl transition-all duration-300 relative group w-full"
            style={{ 
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(249,115,22,0.2)"
            }}
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="p-4 rounded-xl mt-1 transition-colors" style={{ background: "rgba(249,115,22,0.08)" }}>
                <Trophy className="h-7 w-7 text-[#f97316]" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">Smart India Hackathon (SIH) 2025</h3>
                <div className="space-y-3">
                  <p className="text-white/60 text-[0.95rem] leading-relaxed">
                    Qualified through internal evaluation based on innovation and <span className="text-[#f97316]">problem-solving</span> approach.
                  </p>
                  <p className="text-white/60 text-[0.95rem] leading-relaxed">
                    Worked on solving real-world challenges faced by <span className="text-[#f97316]">Kerala farmers</span>.
                  </p>
                  <p className="text-white/60 text-[0.95rem] leading-relaxed">
                    Focused on building practical, <span className="text-[#f97316]">scalable</span>, and collaborative solutions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 lg:py-32 px-6 overflow-hidden bg-gradient-to-b from-[#121212] via-[#121212] to-[#0a0a0a]">
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{ background: "radial-gradient(circle at center, rgba(249,115,22,0.08), transparent 60%)" }}
        />

        <motion.div
          {...fadeInUp}
          className="relative z-10 max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-balance text-white">
            Let&apos;s Build Impact Together
          </h2>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            I’m open to opportunities in Analytics, Product, and Tech roles where I can contribute to solving real-world problems and driving measurable impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 items-center">
            <a href="mailto:kothalankabhavan@gmail.com" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="rounded-full px-8 w-full border-0 transition-all duration-300 hover:scale-[1.05] text-white"
                style={{
                  background: "linear-gradient(135deg, #f97316, #fb923c)",
                  boxShadow: "0 8px 30px rgba(249,115,22,0.3)"
                }}
              >
                Email Me
                <Mail className="h-5 w-5 ml-2" />
              </Button>
            </a>
            <a href="https://linkedin.com/in/bhavan-kothalanka" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 w-full transition-all duration-300 hover:border-[#f97316] hover:bg-[#f97316]/5 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] text-white"
                style={{
                  border: "1px solid rgba(255,255,255,0.15)",
                  backgroundColor: "transparent"
                }}
              >
                Let&apos;s Connect
              </Button>
            </a>
          </div>
          
          <p className="text-white/40 text-sm tracking-wide pt-4">
            Available for internships and entry-level roles
          </p>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card/30 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-2 text-white">Portfolio</h3>
              <p className="text-white/60">
                Building data-driven solutions with a focus on business impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-foreground/60">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Projects
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                {[
                  { icon: Github, label: "GitHub", link: "https://github.com/bk-1806" },
                  { icon: Linkedin, label: "LinkedIn", link: "https://linkedin.com/in/bhavan-kothalanka" },
                  { icon: Mail, label: "Email", link: "mailto:kothalankabhavan@gmail.com" },
                ].map(({ icon: Icon, label, link }) => (
                  <a
                    key={label}
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg border border-white/10 bg-white/5 hover:border-[#f97316]/50 hover:text-[#f97316] hover:shadow-[0_0_15px_rgba(249,115,22,0.15)] hover:scale-110 transition-all duration-300 text-white"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-border/50 pt-8 text-center text-foreground/50 text-sm"
          >
            <p>© {new Date().getFullYear()} Bhavan Kothalanka — Built with intent, not templates.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
