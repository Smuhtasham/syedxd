'use client'

import { motion } from 'framer-motion'
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript,
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
  SiMongodb, SiTailwindcss, SiRedux, SiReactquery,
  SiFramer, SiThreedotjs, SiWeb3Dotjs, SiGit,
  SiPostman, SiGithub, SiPython, SiNestjs,
} from 'react-icons/si'
import { TbAtom, TbBrain, TbCursorText, TbBrandVscode } from 'react-icons/tb'

const categories = [
  {
    label: 'Languages',
    skills: [
      { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
      { icon: SiCss3, name: 'CSS3', color: '#1572B6' },
      { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
      { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
      { icon: SiPython, name: 'Python', color: '#3776AB' },
      { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
    ],
  },
  {
    label: 'Frameworks',
    skills: [
      { icon: SiReact, name: 'React.js', color: '#61DAFB' },
      { icon: SiNextdotjs, name: 'Next.js', color: '#ffffff' },
      { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
      { icon: SiExpress, name: 'Express.js', color: '#cccccc' },
      { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
      { icon: SiNestjs, name: 'NestJS', color: '#E0234E' },
    ],
  },
  {
    label: 'Libraries',
    skills: [
      { icon: SiRedux, name: 'Redux', color: '#764ABC' },
      { icon: SiReactquery, name: 'React Query', color: '#FF4154' },
      { icon: TbAtom, name: 'Zustand', color: '#e0a06e' },
      { icon: SiFramer, name: 'Framer Motion', color: '#BB4B96' },
      { icon: SiThreedotjs, name: 'Three.js', color: '#ffffff' },
      { icon: SiWeb3Dotjs, name: 'Web3.js', color: '#F16822' },
    ],
  },
  {
    label: 'Tools',
    skills: [
      { icon: SiGit, name: 'Git', color: '#F05032' },
      { icon: SiGithub, name: 'GitHub', color: '#e0e0e0' },
      { icon: SiPostman, name: 'Postman', color: '#FF6C37' },
      { icon: TbBrandVscode, name: 'VS Code', color: '#007ACC' },
      { icon: TbBrain, name: 'Claude AI', color: '#CC785C' },
      { icon: TbCursorText, name: 'Cursor', color: '#a0a0a0' },
    ],
  },
]

const gridContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
}

const gridItem = {
  hidden: { opacity: 0, scale: 0.5, y: 20, filter: 'blur(8px)' },
  visible: {
    opacity: 1, scale: 1, y: 0, filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 150, damping: 16 },
  },
}

const categoryVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Skills() {
  return (
    <section id="skills" className="bg-bg py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-125 bg-accent rounded-full filter blur-[180px] opacity-8"
          animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.2em' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-accent-light text-sm font-semibold uppercase"
          >
            What I work with
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 80 }}
            className="text-4xl font-bold text-white mt-2"
          >
            Skills &amp; Technologies
          </motion.h2>
        </motion.div>

        <div className="flex flex-col gap-12">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              custom={ci}
              variants={categoryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              <div className="flex items-center gap-3 mb-5">
                <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase">
                  {cat.label}
                </p>
                <motion.div
                  className="flex-1 h-px bg-linear-to-r from-accent/40 to-transparent"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: ci * 0.12 + 0.2 }}
                />
              </div>

              <motion.div
                variants={gridContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4"
              >
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={gridItem}
                    whileHover={{
                      y: -8,
                      scale: 1.08,
                      boxShadow: `0 12px 40px ${skill.color}33`,
                      borderColor: `${skill.color}60`,
                    }}
                    className="flex flex-col items-center gap-3 p-4 bg-surface/60 border border-white/8 rounded-2xl hover:bg-surface/90 transition-colors duration-200 cursor-default group"
                  >
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                      transition={{ duration: 0.4 }}
                    >
                      <skill.icon style={{ color: skill.color }} className="text-3xl drop-shadow-sm" />
                    </motion.div>
                    <span className="text-gray-500 text-xs font-medium text-center leading-tight group-hover:text-gray-300 transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
