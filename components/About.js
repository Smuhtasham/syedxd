'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const education = [
  {
    degree: 'Bachelors in Computer Science',
    school: 'Govt College & University Faisalabad',
    period: 'Sep 2019 – Oct 2023',
    detail: 'CGPA 3.58',
  },
  {
    degree: 'ICS — Intermediate in Computer Science',
    school: 'Kips College, Faisalabad',
    period: 'June 2017 – June 2019',
    detail: 'Marks 80%',
  },
]

const skillBadges = [
  'HTML', 'CSS', 'JavaScript', 'TypeScript',
  'React.js', 'Next.js', 'Node.js', 'Express.js',
  'MongoDB', 'Tailwind CSS', 'Redux', 'Framer Motion',
  'React Query', 'Zustand', 'Three.js', 'Web3.js',
  'Git', 'Postman',
]

const badgeContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.2 } },
}

const badgeItem = {
  hidden: { opacity: 0, scale: 0.6, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 16 } },
}

export default function About() {
  return (
    <section id="about" className="bg-[#0D0618] py-28 relative overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#7127BA] rounded-full filter blur-[160px] opacity-10 pointer-events-none"
        animate={{ x: [0, 20, -10, 0], y: [0, -15, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Profile image — clip-path wipe reveal */}
          <div className="flex justify-center order-2 md:order-1 md:pt-2">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-[#7127BA]/30 to-[#9D4EDD]/10 rounded-3xl blur-2xl" />
              <motion.div
                initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
                whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/20"
              >
                <Image
                  src="/profile.png"
                  alt="Syed Muhammad Muhtasham"
                  width={320}
                  height={400}
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-[#1A0B2E] border border-[#7127BA]/40 rounded-xl px-4 py-2 shadow-lg"
              >
                <span className="text-[#9D4EDD] text-sm font-semibold">CGPA 3.58</span>
              </motion.div>
            </div>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 md:order-2 flex flex-col gap-7 text-white"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-[#9D4EDD] text-sm font-semibold tracking-widest uppercase"
              >
                Who I am
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 80 }}
                className="text-4xl font-bold mt-2"
              >
                About Me
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 leading-relaxed"
            >
              I&apos;m <span className="text-white font-medium">Syed Muhammad Muhtasham</span>, a
              passionate MERN Stack Developer from Faisalabad, Pakistan. BSc in Computer Science,
              CGPA 3.58 from Govt College &amp; University Faisalabad.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 leading-relaxed"
            >
              I specialise in building full-stack web applications — from responsive, animated UIs
              with React &amp; Next.js to robust backends with Node.js, Express, and MongoDB. I also
              work with Web3 technologies and love shipping products that feel great to use.
            </motion.p>

            {/* Education */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-base font-semibold mb-4 text-gray-300 uppercase tracking-wide"
              >
                Education
              </motion.h3>
              <div className="flex flex-col gap-3">
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1, type: 'spring', stiffness: 100 }}
                    whileHover={{ x: 4, borderColor: 'rgba(113,39,186,0.5)' }}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-4 bg-[#1A0B2E]/50 border border-white/8 rounded-xl transition-colors"
                  >
                    <div>
                      <p className="text-white text-sm font-semibold">{edu.degree}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{edu.school}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-[#9D4EDD] text-xs font-medium">{edu.detail}</p>
                      <p className="text-gray-600 text-xs">{edu.period}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skill badges — spring stagger */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-base font-semibold mb-4 text-gray-300 uppercase tracking-wide"
              >
                Tech Stack
              </motion.h3>
              <motion.div
                variants={badgeContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {skillBadges.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={badgeItem}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(113,39,186,0.3)' }}
                    className="px-3 py-1.5 bg-[#7127BA]/15 border border-[#7127BA]/30 text-[#C084FC] rounded-full text-xs font-medium cursor-default transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
