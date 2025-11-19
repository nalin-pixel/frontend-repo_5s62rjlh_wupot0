import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how' },
  { label: 'Technology', href: '#tech' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 200], [0.0, 0.7])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 inset-x-0 z-50 transition-all border-b ${scrolled ? 'backdrop-blur-sm border-[hsl(222,20%,15%)]' : 'border-transparent'}`}
      style={{ backgroundColor: 'hsla(222,20%,8%,0)', backdropFilter: 'blur(6px)', backgroundImage: 'none', opacity: 1 }}
    >
      <motion.div style={{ backgroundColor: 'hsla(222,20%,8%,1)', opacity: bgOpacity }} className="absolute inset-0 -z-10" />
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-[hsl(155,85%,55%)]/10 border border-[hsl(155,85%,55%)]/30 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <div className="w-3 h-3 rounded-full bg-[hsl(155,85%,55%)] group-hover:scale-110 transition" />
          </div>
          <span className="text-[hsl(210,15%,95%)] font-semibold tracking-tight">Intelleo IoT Agent</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((n) => (
            <a key={n.label} href={n.href} className="text-sm text-[hsl(210,15%,95%)]/70 hover:text-[hsl(210,15%,95%)] transition">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="/signin" className="text-[hsl(210,15%,95%)]/80 hover:text-[hsl(210,15%,95%)] transition">Sign in</a>
          <a href="/signup" className="px-4 py-2 rounded-xl bg-[hsl(155,85%,55%)] text-black font-medium shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:brightness-110 transition">Get Started</a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-[hsl(210,15%,95%)]">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 space-y-4 bg-[hsla(222,20%,8%,0.8)] border-t border-[hsl(222,20%,15%)]">
          <div className="flex flex-col gap-3 pt-3">
            {navItems.map((n) => (
              <a key={n.label} href={n.href} className="text-[hsl(210,15%,95%)]/80 hover:text-[hsl(210,15%,95%)] transition">
                {n.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="/signin" className="flex-1 text-center py-2 rounded-xl border border-[hsl(222,20%,15%)] text-[hsl(210,15%,95%)]/80">Sign in</a>
            <a href="/signup" className="flex-1 text-center py-2 rounded-xl bg-[hsl(155,85%,55%)] text-black font-medium">Get Started</a>
          </div>
        </div>
      )}
    </motion.header>
  )
}
