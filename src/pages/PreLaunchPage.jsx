<motion.div
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  transition={{ duration: 0.8 }}
  className="relative"
>
  <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
    <img
      src="/hero-premium.png"
      alt="Pré-lançamento BaldShield"
      className="w-full h-full object-cover"
    />
  </div>
</motion.div>
