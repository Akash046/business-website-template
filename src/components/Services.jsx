function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "Custom websites and web apps."
    },
    {
      title: "UI/UX Design",
      desc: "Modern and user-friendly designs."
    },
    {
      title: "Digital Consulting",
      desc: "Helping businesses grow online."
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;