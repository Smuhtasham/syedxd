'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const item = {
  hidden: { opacity: 0, y: 40, filter: 'blur(12px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 80, damping: 18 },
  },
}

const socials = [
  { icon: FiGithub, href: 'https://github.com/Smuhtasham' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/syed-muhtasham/' },
  { icon: FiMail, href: 'mailto:muhtasham00@gmail.com' },
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const avatarY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40])
  const fadeOut = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={ref}
      id="home"
      className="min-h-screen bg-[#0D0618] relative flex items-center overflow-hidden"
    >
      {/* Animated drifting orbs */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#7127BA] rounded-full filter blur-[150px] opacity-15 pointer-events-none"
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 left-[10%] w-72 h-72 bg-purple-800 rounded-full filter blur-[100px] opacity-10 pointer-events-none"
        animate={{ x: [0, -20, 30, 0], y: [0, 20, -10, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Text — stagger + blur reveal + parallax */}
          <motion.div
            style={{ y: textY, opacity: fadeOut }}
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-5"
          >
            <motion.span variants={item} className="text-[#9D4EDD] font-semibold tracking-widest text-sm uppercase">
              Hello! I am
            </motion.span>

            <motion.h1 variants={item} className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Syed{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#7127BA] to-[#C084FC]">
                Muhtasham
              </span>
            </motion.h1>

            <motion.h2 variants={item} className="text-xl text-gray-400 font-medium">
              MERN Stack Developer
            </motion.h2>

            <motion.p variants={item} className="text-gray-500 leading-relaxed max-w-md">
              A passionate MERN Stack Developer based in{' '}
              <span className="text-gray-400">Faisalabad, Pakistan</span>.
              Currently building at{' '}
              <span className="text-[#9D4EDD] font-medium">Coderacle</span> &amp;{' '}
              <span className="text-[#9D4EDD] font-medium">Vigorant</span>.
            </motion.p>

            <motion.div variants={item} className="flex gap-4 flex-wrap pt-1">
              <motion.a
                href="mailto:muhtasham00@gmail.com"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(113,39,186,0.5)' }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3 bg-[#7127BA] hover:bg-[#9D4EDD] text-white rounded-lg font-medium transition-colors duration-200"
              >
                Get in Touch
              </motion.a>
              <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3 border border-[#7127BA]/60 text-[#C084FC] hover:bg-[#7127BA]/10 hover:border-[#7127BA] rounded-lg font-medium transition-all duration-200 cursor-pointer"
              >
                View Work
              </motion.button>
            </motion.div>

            <motion.div variants={item} className="flex gap-5 pt-1">
              {socials.map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noreferrer'}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  whileHover={{ y: -4, color: '#9D4EDD' }}
                  className="text-gray-500 transition-colors text-xl"
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Avatar — parallax + floating + spinning rings */}
          <motion.div
            style={{ y: avatarY }}
            initial={{ opacity: 0, scale: 0.8, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <motion.div
              className="relative"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.div
                className="absolute -inset-6 rounded-full pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{ background: 'conic-gradient(from 0deg, transparent 70%, rgba(113,39,186,0.4) 100%)', borderRadius: '50%' }}
              />
              <motion.div
                className="absolute -inset-10 rounded-full pointer-events-none"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                style={{ background: 'conic-gradient(from 180deg, transparent 80%, rgba(157,78,221,0.2) 100%)', borderRadius: '50%' }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#7127BA] to-[#9D4EDD] rounded-full blur-3xl pointer-events-none"
                animate={{ opacity: [0.15, 0.35, 0.15], scale: [1, 1.15, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Me.svg"
                alt="Syed Muhtasham"
                className="relative w-64 md:w-[360px] drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.span
            className="text-gray-700 text-xs tracking-widest uppercase"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll
          </motion.span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-[#7127BA] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
