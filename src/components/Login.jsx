import { motion } from 'framer-motion'

export default function Login() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-[hsl(222,20%,15%)] bg-[hsla(222,20%,8%,0.6)] backdrop-blur-sm p-6 shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
      >
        <h2 className="text-2xl font-serif">Welcome back</h2>
        <p className="mt-1 text-sm text-[hsl(210,15%,95%)]/70">Sign in to your account</p>
        <form className="mt-6 space-y-4">
          <div>
            <label className="text-sm text-[hsl(210,15%,95%)]/70">Email</label>
            <input type="email" className="mt-1 w-full rounded-xl bg-black/40 border border-[hsl(222,20%,15%)] px-3 py-2 outline-none focus:border-[hsl(155,85%,55%)]/60" placeholder="you@company.com" />
          </div>
          <div>
            <label className="text-sm text-[hsl(210,15%,95%)]/70">Password</label>
            <input type="password" className="mt-1 w-full rounded-xl bg-black/40 border border-[hsl(222,20%,15%)] px-3 py-2 outline-none focus:border-[hsl(155,85%,55%)]/60" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full mt-2 px-4 py-2 rounded-xl bg-[hsl(155,85%,55%)] text-black font-medium hover:brightness-110 transition">
            Sign in
          </button>
          <button type="button" className="w-full px-4 py-2 rounded-xl border border-[hsl(155,85%,55%)]/50 text-[hsl(210,15%,95%)] hover:bg-[hsl(155,85%,55%)]/5 transition">
            Continue with Google
          </button>
        </form>
        <p className="mt-4 text-xs text-[hsl(210,15%,95%)]/60">By continuing you agree to our Terms and Privacy.</p>
      </motion.div>
    </div>
  )
}
