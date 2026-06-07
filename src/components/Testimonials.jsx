function Testimonials() {
  return (
    <section className="py-24">

      <h2 className="text-5xl font-bold text-center mb-16">
        Testimonials
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">

        <div className="glass p-8 rounded-3xl">
          ⭐⭐⭐⭐⭐
          <p className="mt-4">
            Outstanding service and support.
          </p>
          <h4 className="mt-4 font-bold">
            Sarah Johnson
          </h4>
        </div>

        <div className="glass p-8 rounded-3xl">
          ⭐⭐⭐⭐⭐
          <p className="mt-4">
            Professional and highly skilled.
          </p>
          <h4 className="mt-4 font-bold">
            Michael Lee
          </h4>
        </div>

        <div className="glass p-8 rounded-3xl">
          ⭐⭐⭐⭐⭐
          <p className="mt-4">
            Best agency experience ever.
          </p>
          <h4 className="mt-4 font-bold">
            David Smith
          </h4>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;