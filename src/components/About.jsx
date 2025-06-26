// src/components/About.jsx
export default function About() {
  return (
    <section id="about" className="section-card max-w-[1100px] mx-auto my-10 p-10 bg-white rounded-[22px] shadow-xl border border-[#e3e6fa]">
      <div className="about-section flex flex-row items-center gap-11 max-md:flex-col">
        {/* Main Text */}
        <div className="about-main flex-2 min-w-[260px]">
          <div className="about-title text-[#5a48fa] font-bold text-2xl mb-3">About</div>
          <h1 className="about-name text-5xl font-extrabold text-[#5a48fa] mb-4 mt-0 leading-tight">Hi, I'm Shashank Raj</h1>
          <div className="about-desc text-lg text-gray-700 mb-7 max-w-[650px]">
            I am a third-year undergraduate student at IIT (BHU) Varanasi, deeply interested in competitive programming (CP), data structures, and algorithms (DSA). I enjoy solving challenging problems and constantly improving my coding skills. I actively participate in coding contests and am passionate about learning new technologies and software development practices.
          </div>
          <div className="about-actions flex gap-4 items-center mt-2">
            <a href="https://github.com/shashank2401" className="icon-box w-12 h-12 rounded-full bg-[#f6f8fc] shadow-md border border-[#e3e6fa] flex items-center justify-center text-xl text-[#5a48fa] hover:bg-[#eaeaff] hover:border-[#b6baff] hover:text-[#2d1e94] transition" target="_blank" rel="noopener" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/shashankraj2401/" className="icon-box w-12 h-12 rounded-full bg-[#f6f8fc] shadow-md border border-[#e3e6fa] flex items-center justify-center text-xl text-[#5a48fa] hover:bg-[#eaeaff] hover:border-[#b6baff] hover:text-[#2d1e94] transition" target="_blank" rel="noopener" title="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="mailto:shashankraj0124@gmail.com" className="icon-box w-12 h-12 rounded-full bg-[#f6f8fc] shadow-md border border-[#e3e6fa] flex items-center justify-center text-xl text-[#5a48fa] hover:bg-[#eaeaff] hover:border-[#b6baff] hover:text-[#2d1e94] transition" target="_blank" rel="noopener" title="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://drive.google.com/file/d/135ph1omrsyypG7_FAffFYp27_c9UQQPR/view?usp=sharing" className="resume-btn bg-[#e3e6ff] text-[#5a48fa] rounded-full font-bold px-6 h-12 flex items-center gap-2 border border-[#e3e6fa] shadow-sm hover:bg-[#d0d8ff] hover:text-[#2d1e94] hover:border-[#b6baff] transition" target="_blank" rel="noopener" title="Resume">
              <i className="fas fa-file-alt"></i> Resume
            </a>
          </div>
        </div>
        {/* Photo */}
        <div className="about-photo flex-1 flex items-center justify-center md:w-full">
          <div className="photo-circle w-48 h-48 bg-[#f6f8fc] border-4 border-[#b6baff] rounded-full flex items-center justify-center shadow-md overflow-hidden text-center">
            <img
              src="/assets/MyPhoto.jpg"
              alt="Your Photo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
