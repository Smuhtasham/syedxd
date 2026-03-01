'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const featured = [
  {
    title: 'Anta Academy',
    subtitle: 'SaaS Dashboard',
    description:
      'A multi-page SaaS dashboard with authentication & role-based access. Integrated data visualization using Recharts and optimized API performance. Deployed on Vercel with SEO and SSR improvements for faster load times.',
    tags: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Recharts', 'Vercel'],
    gradient: 'from-violet-900/60 via-purple-800/30 to-indigo-900/60',
    accent: '#9D4EDD',
    github: 'https://github.com/Smuhtasham',
    live: '#',
  },
  {
    title: 'Artifactx',
    subtitle: 'Decentralized NFT Marketplace',
    description:
      'A full-stack decentralized NFT marketplace with Ethereum smart contracts. Integrated Web3 authentication (MetaMask, WalletConnect) for secure transactions. Built a minting feature allowing users to create and list NFTs with real-time blockchain data fetching.',
    tags: ['Next.js', 'Web3.js', 'Tailwind CSS', 'MongoDB', 'MetaMask'],
    gradient: 'from-blue-900/60 via-purple-900/30 to-violet-900/60',
    accent: '#60A5FA',
    github: 'https://github.com/Smuhtasham',
    live: '#',
  },
]

const others = [
  { title: 'Dynamx', tags: ['Next.js', 'MERN'] },
  { title: 'ALTAR', tags: ['Next.js', 'MongoDB'] },
  { title: 'Mental Health Assessment AI', tags: ['Next.js', 'AI', 'Tailwind'] },
]

function TiltCard({ project, index }) {
  const cardRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 })
  const glowX = useTransform(x, [-0.5, 0.5], [0, 100])
  const glowY = useTransform(y, [-0.5, 0.5], [0, 100])

  function onMouseMove(e) {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function onMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="grid md:grid-cols-12 gap-8 items-center"
    >
      {/* Visual with 3D tilt */}
      <div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={`md:col-span-7 ${index % 2 === 1 ? 'md:order-2' : ''}`}
        style={{ perspective: '1000px' }}
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#7127BA]/50 transition-colors shadow-2xl shadow-black/40 group"
        >
          <div className={`w-full h-64 md:h-80 bg-linear-to-br ${project.gradient} flex flex-col items-center justify-center gap-4 relative`}>
            {/* Grid lines */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
            {/* Mouse-tracking glow */}
            <motion.div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: useTransform(
                  [glowX, glowY],
                  ([gx, gy]) => `radial-gradient(circle at ${gx}% ${gy}%, ${project.accent}44 0%, transparent 60%)`
                ),
              }}
            />
            {/* Static center glow */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{ background: `radial-gradient(circle at 50% 50%, ${project.accent}22 0%, transparent 70%)` }}
            />
            <motion.p
              className="relative text-3xl font-bold text-white/80 tracking-tight"
              style={{ transform: 'translateZ(20px)' }}
            >
              {project.title}
            </motion.p>
            <p className="relative text-sm text-white/40 font-medium" style={{ transform: 'translateZ(10px)' }}>
              {project.subtitle}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 1 ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.15 + 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={`flex flex-col gap-4 md:col-span-5 ${index % 2 === 1 ? 'md:order-1' : ''}`}
      >
        <span className="text-[#9D4EDD] text-xs font-semibold tracking-widest uppercase">
          Featured Project
        </span>
        <div>
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <p className="text-[#9D4EDD] text-sm font-medium mt-0.5">{project.subtitle}</p>
        </div>
        <div className="bg-[#1A0B2E]/80 border border-white/8 rounded-xl p-5">
          <p className="text-gray-400 leading-relaxed text-sm">{project.description}</p>
        </div>
        <motion.div
          className="flex flex-wrap gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05, delayChildren: 0.3 } } }}
        >
          {project.tags.map((tag) => (
            <motion.span
              key={tag}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 15 } },
              }}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(113,39,186,0.3)' }}
              className="px-3 py-1 text-[#C084FC] bg-[#7127BA]/15 border border-[#7127BA]/25 rounded-full text-xs font-medium cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
        <div className="flex gap-4 pt-1">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -3, color: '#9D4EDD' }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 transition-colors text-xl"
            aria-label="GitHub"
          >
            <FiGithub />
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -3, color: '#9D4EDD' }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 transition-colors text-xl"
            aria-label="Live demo"
          >
            <FiExternalLink />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0D0618] py-28 relative overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#7127BA] rounded-full filter blur-[160px] opacity-10 pointer-events-none"
        animate={{ x: [0, 20, -15, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#9D4EDD] text-sm font-semibold tracking-widest uppercase"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 80 }}
            className="text-4xl font-bold text-white mt-2"
          >
            Featured Projects
          </motion.h2>
        </motion.div>

        {/* Featured */}
        <div className="flex flex-col gap-24 mb-20">
          {featured.map((project, i) => (
            <TiltCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Other projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center text-gray-500 text-sm mb-8 uppercase tracking-widest">
            Other noteworthy projects
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {others.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1, type: 'spring', stiffness: 100 }}
                whileHover={{ y: -6, borderColor: 'rgba(113,39,186,0.5)', boxShadow: '0 20px 40px rgba(113,39,186,0.15)' }}
                className="bg-[#1A0B2E]/60 border border-white/8 rounded-2xl p-6 hover:bg-[#1A0B2E]/80 transition-colors flex flex-col gap-4 group cursor-default"
              >
                <div className="flex items-center justify-between">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <FiExternalLink className="text-[#9D4EDD] text-lg" />
                  </motion.div>
                  <motion.a
                    href="https://github.com/Smuhtasham"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -2, color: '#9D4EDD' }}
                    className="text-gray-600 transition-colors"
                  >
                    <FiGithub />
                  </motion.a>
                </div>
                <div>
                  <h4 className="text-white font-bold group-hover:text-[#C084FC] transition-colors">{p.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-gray-600 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
