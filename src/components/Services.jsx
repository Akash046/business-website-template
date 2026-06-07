import {
  Globe,
  Palette,
  Briefcase,
} from "lucide-react";

function Services() {

  const services = [
    {
      icon: <Globe size={40} />,
      title: "Web Development",
      desc: "Modern web applications."
    },
    {
      icon: <Palette size={40} />,
      title: "UI/UX Design",
      desc: "Beautiful user experiences."
    },
    {
      icon: <Briefcase size={40} />,
      title: "Digital Consulting",
      desc: "Helping businesses scale."
    }
  ];

  return (
    <section
      id="services"
      className="py-24 bg-slate-100"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-5 text-cyan-500">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {service.title}
              </h3>

              <p className="text-slate-600">
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