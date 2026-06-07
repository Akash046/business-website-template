import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center px-6"
      >
        <h1 className="text-6xl md:text-8xl font-black leading-tight">
          Build
          <span className="gradient-text block">
            Extraordinary
          </span>
          Experiences
        </h1>

        <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto">
          Launch modern digital products that
          attract users and grow businesses.
        </p>

        <div className="flex justify-center gap-4 mt-10">
          <button className="px-8 py-4 bg-cyan-500 rounded-xl font-semibold hover:scale-105 transition">
            Get Started
          </button>

          <button className="px-8 py-4 border border-slate-600 rounded-xl">
            Learn More
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;