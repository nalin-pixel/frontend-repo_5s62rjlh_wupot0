export default function Footer() {
  return (
    <footer className="relative bg-[hsl(222,47%,3%)] border-t border-[hsl(222,20%,15%)]">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[hsl(155,85%,55%)]/10 border border-[hsl(155,85%,55%)]/30 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-[hsl(155,85%,55%)]" />
          </div>
          <span className="text-[hsl(210,15%,95%)]/80">Intelleo IoT Agent</span>
        </div>
        <p className="text-[hsl(210,15%,95%)]/60 text-sm">© {new Date().getFullYear()} Intelleo. All rights reserved.</p>
      </div>
    </footer>
  )
}
