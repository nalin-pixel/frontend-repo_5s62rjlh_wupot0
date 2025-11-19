import { Brain, Database, Bot, Activity, FileText, Webhook } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Brain,
    title: 'Intelligent Data Structuring',
    desc: 'Automatic schema inference transforms unstructured sensor payloads into queryable time-series.',
  },
  {
    icon: Bot,
    title: 'Natural Language Queries',
    desc: 'Ask questions in plain English and get precise answers powered by semantic search.',
  },
  {
    icon: Activity,
    title: 'Real-time Anomaly Detection',
    desc: 'Continuous monitoring with intelligent alerts via Slack and email integrations.',
  },
  {
    icon: FileText,
    title: 'Automated Report Generation',
    desc: 'Scheduled PDF exports with executive summaries and trend analysis.',
  },
  {
    icon: Database,
    title: 'Industrial-Grade Analytics',
    desc: 'TimescaleDB hypertables, continuous aggregates, and advanced time-series functions.',
  },
  {
    icon: Webhook,
    title: 'Plug-and-Play Connectors',
    desc: 'Multi-database, MQTT, and API connectors with zero-code setup.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative bg-[hsl(222,47%,3%)] border-t border-[hsl(222,20%,15%)]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(0,217,98,0.05),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-serif text-[hsl(210,15%,95%)]">Everything you need for IoT intelligence</h2>
          <p className="mt-3 text-[hsl(210,15%,95%)]/70">From ingestion to insights in minutes</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24, scale: 0.98, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative rounded-2xl border border-[hsl(222,20%,15%)] bg-[hsla(222,20%,8%,0.6)] backdrop-blur-sm p-6 transition hover:border-[hsl(155,85%,55%)]/50"
            >
              <div className="w-10 h-10 rounded-xl bg-[hsl(155,85%,55%)]/10 border border-[hsl(155,85%,55%)]/30 text-[hsl(155,85%,55%)] flex items-center justify-center">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-[hsl(210,15%,95%)] font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-[hsl(210,15%,95%)]/70">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
