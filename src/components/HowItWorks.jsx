import { Cpu, Network, MessageSquare, BarChart3 } from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
  { icon: Network, title: 'Connect Your Data', desc: 'Bring MQTT streams and databases in with one click.' },
  { icon: Cpu, title: 'AI Structures Your Data', desc: 'Automatic schema inference and knowledge base creation.' },
  { icon: MessageSquare, title: 'Ask Questions', desc: 'Query with natural language and get instant answers.' },
  { icon: BarChart3, title: 'Get Insights', desc: 'Dashboards, trends, and anomaly alerts in real-time.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative bg-[hsl(222,47%,3%)] border-t border-[hsl(222,20%,15%)]">
      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-serif text-[hsl(210,15%,95%)]">How it works</h2>
          <p className="mt-3 text-[hsl(210,15%,95%)]/70">From raw signals to decisions</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24, scale: 0.98, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl border border-[hsl(222,20%,15%)] bg-[hsla(222,20%,8%,0.6)] backdrop-blur-sm p-6"
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
