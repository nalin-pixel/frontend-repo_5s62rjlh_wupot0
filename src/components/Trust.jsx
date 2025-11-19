import { motion } from 'framer-motion'

const logos = [
  { name: 'Python' },
  { name: 'FastAPI' },
  { name: 'TimescaleDB' },
  { name: 'MQTT' },
  { name: 'Spline' },
  { name: 'LangChain' },
]

export default function Trust() {
  return (
    <section className="relative bg-[hsl(222,47%,3%)] border-t border-[hsl(222,20%,15%)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.h3
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center text-[hsl(210,15%,95%)]/80"
        >
          Trusted by Emerging Tech Teams
        </motion.h3>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {logos.map((l, i) => (
            <motion.div key={l.name}
              initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 * i }}
              className="h-14 rounded-xl border border-[hsl(222,20%,15%)] bg-[hsla(222,20%,8%,0.6)] backdrop-blur-sm flex items-center justify-center text-[hsl(210,15%,95%)]/60"
            >
              <span className="text-sm">{l.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
