// src/components/Contact.jsx
export default function Contact() {
  return (
    <section id="contact" className="section-card max-w-[1100px] mx-auto my-10 p-10 bg-white rounded-[22px] shadow-xl border border-[#e3e6fa]">
      <div className="contact-title text-[#5a48fa] text-[2.2em] font-extrabold mb-4 text-center tracking-wide">
        Contact
      </div>
      <div className="contact-subtext text-[#444] text-lg mb-5 leading-relaxed text-center">
        I'm always open to new opportunities, collaborations, and discussions.<br />
        Feel free to reach out!
      </div>
      <div className="contact-email flex justify-center items-center text-[#5a48fa] text-lg gap-2 mb-6">
        <i className="fa-regular fa-envelope"></i>
        <a href="mailto:shashankraj0124@gmail.com" className="font-medium hover:underline" target="_blank" rel="noopener">
          shashankraj0124@gmail.com
        </a>
      </div>
      <form className="contact-form flex flex-col gap-4 w-full max-w-[520px] mx-auto" autoComplete="off" onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 rounded-lg border border-[#e4e8fc] bg-[#f7f8fd] text-base text-[#222] focus:border-[#5a48fa] focus:shadow-md outline-none transition"
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 rounded-lg border border-[#e4e8fc] bg-[#f7f8fd] text-base text-[#222] focus:border-[#5a48fa] focus:shadow-md outline-none transition"
        />
        <textarea
          rows={4}
          placeholder="Your Message"
          required
          className="w-full px-4 py-3 rounded-lg border border-[#e4e8fc] bg-[#f7f8fd] text-base text-[#222] focus:border-[#5a48fa] focus:shadow-md outline-none transition resize-none"
        />
        <button
          type="submit"
          className="bg-[#5a48fa] text-white rounded-lg py-3 font-bold text-lg mt-2 shadow-md hover:bg-[#3a36c8] transition cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
