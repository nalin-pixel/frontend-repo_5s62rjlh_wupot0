import { motion } from 'framer-motion'

const items = [
  '24/7 Autonomous IoT Agent',
  'Schema-Free Raw Data Interpretation',
  'MCP Connectors',
  'Real-time DB Sync',
  'Auto Error Handling + Self-Healing',
]

export default function AdvancedStrip() {
  return (
    <section className="relative bg-[hsl(222,47%,3%)] border-t border-[hsl(222,20%,15%)] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {items.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 20, scale: 0.98, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative rounded-2xl p-5 border border-[hsl(222,20%,15%)] bg-[hsla(222,20%,8%,0.6)] text-[hsl(210,15%,95%)] backdrop-blur-sm hover:border-[hsl(155,85%,55%)]/40"
            >
              {t}
              <div className="absolute -inset-px rounded-2xl pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,217,98,0.06),transparent_60%)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
