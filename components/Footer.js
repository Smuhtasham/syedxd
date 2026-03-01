'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'

const socials = [
  { icon: FiGithub, href: 'https://github.com/Smuhtasham', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/syed-muhtasham/', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:muhtasham00@gmail.com', label: 'Email' },
  { icon: FiPhone, href: 'tel:+923367906785', label: 'Phone' },
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 18 } },
}

const socialVariant = {
  hidden: { opacity: 0, scale: 0.4, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 14 } },
}

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0D0618] border-t border-white/5 relative overflow-hidden">
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#7127BA] rounded-full filter blur-[160px] pointer-events-none"
        animate={{ opacity: [0.08, 0.16, 0.08], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-6xl mx-auto px-6 py-28 relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col items-center text-center gap-6"
        >
          <motion.span
            variants={fadeUp}
            className="text-[#9D4EDD] text-sm font-semibold tracking-widest uppercase"
          >
            What&apos;s Next?
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Get In Touch
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-400 max-w-md leading-relaxed"
          >
            I&apos;m open to new opportunities and collaborations. Whether you
            have a project in mind or just want to say hi, my inbox is always
            open.
          </motion.p>

          <motion.div variants={fadeUp}>
            <motion.a
              href="mailto:muhtasham00@gmail.com"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 40px rgba(113,39,186,0.45)',
                backgroundColor: 'rgba(113,39,186,0.15)',
              }}
              whileTap={{ scale: 0.97 }}
              className="mt-2 px-10 py-4 border border-[#7127BA] text-[#9D4EDD] rounded-lg font-medium transition-colors duration-200 text-base inline-block"
            >
              Say Hello
            </motion.a>
          </motion.div>

          {/* Contact details */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-4 mt-2 text-sm text-gray-500"
          >
            <motion.a
              href="mailto:muhtasham00@gmail.com"
              whileHover={{ color: '#9D4EDD', y: -1 }}
              className="transition-colors"
            >
              muhtasham00@gmail.com
            </motion.a>
            <span className="hidden sm:block text-gray-700">·</span>
            <motion.a
              href="tel:+923367906785"
              whileHover={{ color: '#9D4EDD', y: -1 }}
              className="transition-colors"
            >
              +92-336-7906785
            </motion.a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex gap-6 mt-2"
          >
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto') || href.startsWith('tel') ? undefined : '_blank'}
                rel={href.startsWith('mailto') || href.startsWith('tel') ? undefined : 'noreferrer'}
                variants={socialVariant}
                whileHover={{ y: -5, scale: 1.2, color: '#9D4EDD' }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-500 transition-colors text-2xl"
                aria-label={label}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8"
          >
            <motion.p
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-gray-700 text-sm"
            >
              Designed &amp; Built by{' '}
              <span className="text-[#9D4EDD]">Syed Muhammad Muhtasham</span>{' '}
              &middot; {new Date().getFullYear()}
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
