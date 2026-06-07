function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-6"
    >
      <div>
        <h1 className="text-6xl font-bold mb-6">
          Grow Your Business Online
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Modern web solutions for startups, agencies,
          and growing businesses.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-lg">
            Get Started
          </button>

          <button className="border px-6 py-3 rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;