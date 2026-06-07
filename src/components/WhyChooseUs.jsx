function WhyChooseUs() {
  const items = [
    "Modern UI Design",
    "Fast Performance",
    "Mobile Responsive",
    "SEO Friendly"
  ];

  return (
    <section className="py-24 bg-slate-950 text-white">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {items.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 p-8 rounded-2xl text-center"
            >
              {item}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;