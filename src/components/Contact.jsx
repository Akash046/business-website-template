function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Contact Us
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border p-4 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-4 rounded-lg"
          />

          <textarea
            rows="5"
            placeholder="Message"
            className="w-full border p-4 rounded-lg"
          />

          <button
            className="w-full bg-black text-white py-4 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;