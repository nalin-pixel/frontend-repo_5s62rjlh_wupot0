import { motion } from 'framer-motion'

export default function SubHero() {
  return (
    <section className="relative bg-[hsl(222,47%,3%)] border-t border-[hsl(222,20%,15%)] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,217,98,0.05),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-serif text-[hsl(210,15%,95%)]"
          >
            Autonomous IoT Reasoning Pipeline
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-[hsl(210,15%,95%)]/70"
          >
            Your sensors stream. Our agent listens, structures, and learns—continuously. From raw MQTT to decisions, fully automated.
          </motion.p>
        </div>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, filter: 'blur(6px)' }} whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative rounded-2xl p-6 border border-[hsl(222,20%,15%)] bg-[hsla(222,20%,8%,0.6)] backdrop-blur-sm"
          >
            <div className="absolute -inset-0.5 rounded-2xl bg-[radial-gradient(ellipse_at_top_right,rgba(0,217,98,0.15),transparent_60%)]" />
            <div className="relative grid grid-cols-4 gap-4 z-10">
              {['MQTT','MCP','LLM Agent','DB'].map((label, idx) => (
                <motion.div key={label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 * idx }}
                  className="relative text-center rounded-xl p-4 border border-[hsl(222,20%,15%)] bg-[hsla(222,20%,10%,0.6)] text-[hsl(210,15%,95%)]"
                >
                  <span className="text-sm font-medium">{label}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ width: 0 }} whileInView={{ width: '100%' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
              className="relative mt-6 h-1 rounded bg-[hsl(222,20%,15%)] overflow-hidden"
            >
              <motion.span initial={{ x: '-100%' }} whileInView={{ x: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: 'easeInOut' }} className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,rgba(0,217,98,0.0),rgba(0,217,98,0.5),rgba(0,217,98,0.0))]" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
