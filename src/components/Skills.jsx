// src/components/Skills.jsx
export default function Skills() {
  return (
    <section id="skills" className="section-card max-w-[1100px] mx-auto my-10 p-10 bg-white rounded-[22px] shadow-xl border border-[#e3e6fa]">
      <div className="skills-title text-center text-[#8f5ffe] text-[2.7em] font-extrabold mb-8 tracking-wide font-sans">
        Skills
      </div>
      <div className="skills-grid grid grid-cols-2 gap-8 max-md:grid-cols-1 max-md:gap-6">
        {/* Programming Languages */}
        <div className="skills-card bg-white rounded-[18px] border border-[#e5e2fe] shadow-lg p-6 min-h-[110px] flex flex-col transition hover:shadow-2xl hover:border-[#cfc2fd]">
          <h3 className="text-lg font-bold text-[#222] mb-4 mt-0 tracking-tight">Programming Languages</h3>
          <div className="skills-tags flex flex-wrap gap-3">
            <span className="tag px-4 py-2 rounded-full font-medium text-[1.07em] bg-[#e4eafe] text-[#5a6bfa]">C</span>
            <span className="tag px-4 py-2 rounded-full font-medium text-[1.07em] bg-[#d8e6fc] text-[#3b5998]">C++</span>
            <span className="tag px-4 py-2 rounded-full font-medium text-[1.07em] bg-[#e6d6fc] text-[#8d5be6]">Java</span>
            <span className="tag px-4 py-2 rounded-full font-medium text-[1.07em] bg-[#fff6c4] text-[#e6b800]">JavaScript</span>
            <span className="tag px-4 py-2 rounded-full font-medium text-[1.07em] bg-[#e8ffd8] text-[#49b04d]">Python</span>
            <span className="tag px-4 py-2 rounded-full font-medium text-[1.07em] bg-[#ffd9d9] text-[#e05d5d]">HTML</span>
            <span className="tag px-4 py-2 rounded-full font-medium text-[1.07em] bg-[#e1f9ee] text-[#3bbfa6]">CSS</span>
          </div>
        </div>
        {/* Frameworks & Libraries */}
        <div className="skills-card bg-white rounded-[18px] border border-[#e5e2fe] shadow-lg p-6 min-h-[110px] flex flex-col transition hover:shadow-2xl hover:border-[#cfc2fd]">
          <h3 className="text-lg font-bold text-[#222] mb-4 mt-0 tracking-tight">Frameworks & Libraries</h3>
          <div className="skills-tags flex flex-wrap gap-3">
            <span className="tag px-4 py-2 rounded-full font-medium text-[1.07em] bg-[#e4f6fd] text-[#3da7c9]">React</span>
            <span className="tag px-4 py-2 rounded-full font-medium text-[1.07em] bg-[#d9f6fd] text-[#1da4b8]">Tailwind CSS</span>
            <span className="tag px-4 py-2 rounded-full font-medium text-[1.07em] bg-[#f5e3fa] text-[#a64ca6]">SFML</span>
            <span className="tag px-4 py-2 rounded-full font-medium text-[1.07em] bg-[#e7eafd] text-[#4d5aa6]">NumPy</span>
            <span className="tag px-4 py-2 rounded-full font-medium text-[1.07em] bg-[#e7ffd9] text-[#4db050]">Pandas</span>
          </div>
        </div>
        {/* Tools & Platforms */}
        <div className="skills-card bg-white rounded-[18px] border border-[#e5e2fe] shadow-lg p-6 min-h-[110px] flex flex-col transition hover:shadow-2xl hover:border-[#cfc2fd]">
          <h3 className="text-lg font-bold text-[#222] mb-4 mt-0 tracking-tight">Tools & Platforms</h3>
          <div className="skills-tags flex flex-wrap gap-3">
            <span className="tag px-4 py-2 rounded-full font-medium text-[1.07em] bg-[#ffe3e3] text-[#d73a49]">Git</span>
            <span className="tag px-4 py-2 rounded-full font-medium text-[1.07em] bg-[#e3e6f7] text-[#24292e]">GitHub</span>
            <span className="tag px-4 py-2 rounded-full font-medium text-[1.07em] bg-[#e3f4fa] text-[#0066b8]">VS Code</span>
            <span className="tag px-4 py-2 rounded-full font-medium text-[1.07em] bg-[#fff9e3] text-[#e39107]">Jupyter Notebook</span>
          </div>
        </div>
        {/* Areas of Interest */}
        <div className="skills-card bg-white rounded-[18px] border border-[#e5e2fe] shadow-lg p-6 min-h-[110px] flex flex-col transition hover:shadow-2xl hover:border-[#cfc2fd]">
          <h3 className="text-lg font-bold text-[#222] mb-4 mt-0 tracking-tight">Areas of Interest</h3>
          <div className="skills-tags flex flex-wrap gap-3">
            <span className="tag px-4 py-2 rounded-full font-medium text-[1.07em] bg-[#e4eafe] text-[#7a6bfa]">Competitive Programming</span>
            <span className="tag px-4 py-2 rounded-full font-medium text-[1.07em] bg-[#e1f9ee] text-[#20b486]">DSA</span>
            <span className="tag px-4 py-2 rounded-full font-medium text-[1.07em] bg-[#ffd9e9] text-[#d24d8a]">Machine Learning</span>
          </div>
        </div>
      </div>
    </section>
  );
}
