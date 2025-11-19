import { motion } from 'framer-motion'

const steps = [
  'Raw IoT data enters',
  'Agent resolves schema',
  'Mapping + normalization',
  'DB storage',
  'Response generation',
]

export default function PipelineSteps() {
  return (
    <section className="relative bg-[hsl(222,47%,3%)] border-t border-[hsl(222,20%,15%)]">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h3 className="text-2xl font-serif text-[hsl(210,15%,95%)] mb-8">Interactive Pipeline</h3>
        <div className="space-y-6">
          {steps.map((s, i) => (
            <motion.div key={s}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative rounded-2xl p-5 border border-[hsl(222,20%,15%)] bg-[hsla(222,20%,8%,0.6)] backdrop-blur-sm text-[hsl(210,15%,95%)]"
            >
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[hsl(155,85%,55%)] shadow-[0_0_10px_rgba(0,217,98,0.6)]" />
              <div className="pl-6">{s}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
