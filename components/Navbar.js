'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import Image from 'next/image'

const links = ['Home', 'About', 'Work', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const { scrollYProgress, scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 20))
  useMotionValueEvent(scrollYProgress, 'change', (v) => setProgress(v))

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-[#0D0618]/90 backdrop-blur-md shadow-lg shadow-purple-900/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
          <Image
            src="/Logo.png"
            alt="Logo"
            width={32}
            height={32}
            className="cursor-pointer"
            onClick={() => scrollTo('home')}
          />
        </motion.div>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 text-sm text-gray-400">
          {links.map((link, i) => (
            <motion.li
              key={link}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
              onClick={() => scrollTo(link)}
              className="cursor-pointer hover:text-[#9D4EDD] transition-colors duration-200 relative group"
            >
              {link}
              <motion.span
                className="absolute -bottom-1 left-0 h-px bg-[#9D4EDD]"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.25 }}
              />
            </motion.li>
          ))}
        </ul>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={menuOpen ? 'close' : 'open'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-[#7127BA] via-[#9D4EDD] to-[#C084FC]"
        style={{ width: `${progress * 100}%` }}
      />

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#0D0618]/95 backdrop-blur-md border-t border-white/5"
          >
            {links.map((link, i) => (
              <motion.div
                key={link}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(link)}
                className="px-6 py-3 text-gray-300 cursor-pointer hover:text-[#9D4EDD] hover:bg-white/5 transition-all border-b border-white/5 last:border-0"
              >
                {link}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
