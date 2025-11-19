import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen relative bg-[hsl(222,47%,2%)] text-[hsl(210,15%,95%)] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-black/60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,217,98,0.08),transparent_60%)]" />
      <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="relative z-10 px-6 py-6">
        <a href="/" className="inline-flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[hsl(155,85%,55%)]/10 border border-[hsl(155,85%,55%)]/30 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-[hsl(155,85%,55%)]" />
          </div>
          <span className="font-medium">Intelleo</span>
        </a>
      </motion.header>
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center py-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="hidden md:block">
          <div className="relative rounded-2xl p-6 border border-[hsl(222,20%,15%)] bg-[hsla(222,20%,8%,0.5)] backdrop-blur-sm">
            <h2 className="text-3xl font-serif">Secure, seamless access</h2>
            <p className="mt-3 text-[hsl(210,15%,95%)]/70">Enter your workspace and orchestrate AI-driven IoT intelligence.</p>
            <div className="mt-6 h-40 rounded-xl border border-[hsl(222,20%,15%)] bg-[hsla(222,20%,10%,0.6)] flex items-center justify-center text-[hsl(210,15%,95%)]/50">
              3D hologram
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="w-full">
          {children}
        </motion.div>
      </div>
    </div>
  )
}
