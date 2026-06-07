function Contact() {
  return (
    <section
      id="contact"
      className="py-24"
    >
      <div className="max-w-2xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-10">
          Contact Us
        </h2>

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 border rounded-xl"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 border rounded-xl"
          />

          <textarea
            rows="5"
            placeholder="Message"
            className="w-full p-4 border rounded-xl"
          />

          <button
            className="w-full bg-cyan-500 text-white py-4 rounded-xl"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}

export default Contact;