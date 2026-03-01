'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBriefcase } from 'react-icons/fi'

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Vigorant',
    location: 'Remote',
    period: 'Present',
    type: 'Remote',
    current: true,
    bullets: [
      'Developing and maintaining full-stack web applications remotely.',
      'Building scalable back-end services and RESTful APIs.',
      'Collaborating with distributed teams to deliver product features.',
    ],
  },
  {
    title: 'MERN Stack Developer',
    company: 'Coderacle',
    location: 'Faisalabad, Pakistan (Hybrid)',
    period: 'June 2024 – Present',
    type: 'Full-time',
    current: false,
    bullets: [
      'Developed and optimized full-stack applications using the MERN stack.',
      'Implemented authentication, API integrations, and database interactions.',
      'Improved SEO and performance in Next.js applications.',
      'Collaborated with UI/UX designers and conducted code reviews.',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Coderacle',
    location: 'Faisalabad, Pakistan',
    period: 'June 2023 – March 2024',
    type: 'Full-time',
    current: false,
    bullets: [
      'Built responsive UI components using Next.js, React.js & Tailwind CSS.',
      'Integrated APIs, state management (Redux), and animations.',
      'Ensured cross-browser compatibility and optimized performance.',
    ],
  },
]

const cardVariants = {
  hidden: { opacity: 0, x: -40, scale: 0.97 },
  visible: (i) => ({
    opacity: 1, x: 0, scale: 1,
    transition: { type: 'spring', stiffness: 90, damping: 18, delay: i * 0.15 },
  }),
}

const bulletVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const bulletItem = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120, damping: 18 } },
}

function TimelineLine() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <div ref={ref} className="absolute left-[23px] top-2 bottom-2 w-px overflow-hidden hidden md:block">
      <motion.div
        className="w-full bg-gradient-to-b from-[#7127BA] via-[#7127BA]/50 to-transparent origin-top h-full"
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  )
}

export default function Work() {
  return (
    <section id="work" className="bg-[#0D0618] py-28 relative overflow-hidden">
      <motion.div
        className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#7127BA] rounded-full filter blur-[150px] opacity-10 pointer-events-none"
        animate={{ x: [0, -20, 15, 0], y: [0, 15, -10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#9D4EDD] text-sm font-semibold tracking-widest uppercase"
          >
            Experience
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 80 }}
            className="text-4xl font-bold text-white mt-2"
          >
            Work History
          </motion.h2>
        </motion.div>

        <div className="relative">
          <TimelineLine />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="md:pl-16 relative"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3, type: 'spring', stiffness: 200, damping: 14 }}
                  className={`absolute top-6 w-4 h-4 rounded-full border-2 hidden md:flex items-center justify-center ${
                    exp.current
                      ? 'border-[#9D4EDD] bg-[#7127BA]'
                      : 'border-[#7127BA] bg-[#0D0618]'
                  }`}
                  style={{ left: '16px' }}
                >
                  {exp.current && (
                    <motion.div
                      className="w-2 h-2 rounded-full bg-white"
                      animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  )}
                </motion.div>

                <motion.div
                  whileHover={{ borderColor: 'rgba(113,39,186,0.5)', backgroundColor: 'rgba(26,11,46,0.75)' }}
                  className="bg-[#1A0B2E]/50 border border-white/8 rounded-2xl p-6 transition-colors duration-300"
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div className="flex items-start gap-3">
                      <motion.div
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="mt-1 p-2 bg-[#7127BA]/20 rounded-lg flex-shrink-0"
                      >
                        <FiBriefcase className="text-[#9D4EDD] text-base" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                        <p className="text-[#9D4EDD] font-medium text-sm">{exp.company}</p>
                        <p className="text-gray-600 text-xs mt-0.5">{exp.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap pl-11 sm:pl-0">
                      {exp.current && (
                        <motion.span
                          animate={{ opacity: [1, 0.6, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="px-3 py-1 bg-green-500/15 text-green-400 text-xs rounded-full border border-green-500/25"
                        >
                          Current
                        </motion.span>
                      )}
                      <span className="px-3 py-1 bg-[#7127BA]/15 text-[#C084FC] text-xs rounded-full border border-[#7127BA]/25">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-xs mb-4 pl-11">{exp.period}</p>

                  <motion.ul
                    variants={bulletVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="pl-11 flex flex-col gap-2"
                  >
                    {exp.bullets.map((bullet, j) => (
                      <motion.li key={j} variants={bulletItem} className="text-gray-400 text-sm flex gap-2">
                        <motion.span
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, delay: j * 0.3 }}
                          className="text-[#7127BA] mt-1.5 flex-shrink-0"
                        >
                          ▸
                        </motion.span>
                        {bullet}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
