import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[hsl(222,47%,2%)]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,217,98,0.08),transparent_60%)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 grid lg:grid-cols-2 gap-10">
        <div className="text-left">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[hsl(210,15%,95%)]/70 bg-[hsl(222,20%,8%)]/60 border border-[hsl(222,20%,15%)] rounded-full px-3 py-1 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(155,85%,55%)] animate-pulse" />
            Live IoT Intelligence
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-serif leading-tight text-[hsl(210,15%,95%)]">
            Transform Raw IoT Data Into Intelligent Insights
          </h1>
          <p className="mt-5 text-lg text-[hsl(210,15%,95%)]/75 max-w-xl">
            Connect any data source. Our AI automatically structures your data and builds intelligent knowledge bases for instant insights.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#signup" className="px-6 py-3 rounded-xl bg-[hsl(155,85%,55%)] text-black font-medium shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:brightness-110 transition">
              Start Free Trial
            </a>
            <a href="#demo" className="px-6 py-3 rounded-xl border border-[hsl(222,20%,15%)] text-[hsl(210,15%,95%)]/80 hover:text-[hsl(210,15%,95%)] transition">
              Watch Demo
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-[hsl(210,15%,95%)]/60">
            <span>MQTT</span>
            <span>TimescaleDB</span>
            <span>Schema Inference</span>
            <span>Semantic Search</span>
          </div>
        </div>
      </div>
    </section>
  )
}
