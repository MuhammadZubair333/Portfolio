// src/components/Academics.jsx
export default function Academics() {
  return (
    <section id="academics" className="section-card max-w-[1100px] mx-auto my-10 p-10 bg-white rounded-[22px] shadow-xl border border-[#e3e6fa]">
      <div className="academics-title text-center text-[#5a48fa] text-[2.5em] font-extrabold mb-8 tracking-wide font-sans">
        Education
      </div>
      {/* IIT (BHU) Varanasi */}
      <div className="academics-card bg-[#fafbff] rounded-[18px] shadow-lg border border-[#e5e2fe] flex items-center gap-9 mb-9 min-h-[160px] p-8 transition hover:shadow-2xl hover:border-[#cfc2fd] max-md:flex-col max-md:items-start max-md:gap-4 max-md:p-4">
        <div className="academics-logo flex-shrink-0">
          <div className="logo-circle w-[68px] h-[68px] bg-[#62a3fa] flex items-center justify-center shadow-md overflow-hidden rounded-[12px]">
            <img
              src="/assets/logos/iit_bhu.png"
              alt="IIT BHU Logo"
              className="w-full h-full object-contain bg-white rounded-[8px]"
            />
          </div>
        </div>
        <div className="academics-details flex flex-col gap-2">
          <div className="academics-institute text-xl font-bold text-[#222] mb-1">
            IIT (BHU) Varanasi
          </div>
          <div className="academics-degree mb-1">
            <a
              href="https://iitbhu.ac.in/dept/civ" 
              className="academics-link text-[#5a48fa] text-[1.08em] font-medium hover:underline"
              target="_blank"
              rel="noopener"
            >
              Bachelor of Technology in Civil Engineering
            </a>
          </div>
          <div className="academics-years text-[#444] text-[1.05em]">2023 - 2027</div>
          <div className="academics-cgpa text-[#444] text-[1.05em]">CGPA: 8.14 / 10</div>
        </div>
      </div>
      {/* Sachdeva Public School */}
      <div className="academics-card bg-[#fafbff] rounded-[18px] shadow-lg border border-[#e5e2fe] flex items-center gap-9 min-h-[160px] p-8 transition hover:shadow-2xl hover:border-[#cfc2fd] max-md:flex-col max-md:items-start max-md:gap-4 max-md:p-4">
        <div className="academics-logo flex-shrink-0">
          <div className="logo-circle w-[68px] h-[68px] bg-[#62a3fa] flex items-center justify-center shadow-md overflow-hidden rounded-[12px]">
            <img
              src="/assets/logos/sps_rohini.jpg"
              alt="Sachdeva Public School Logo"
              className="w-full h-full object-contain bg-white rounded-[8px]"
            />
          </div>
        </div>
        <div className="academics-details flex flex-col gap-2">
          <div className="academics-institute text-xl font-bold text-[#222] mb-1">
            Sachdeva Public School, Rohini
          </div>
          <div className="academics-degree mb-1">
            <a
              href="https://www.spsrohini.com/"
              className="academics-link text-[#5a48fa] text-[1.08em] font-medium hover:underline"
              target="_blank"
              rel="noopener"
            >
              CBSE (Class XII - 2022, Class X - 2020)
            </a>
          </div>
          <div className="academics-years text-[#444] text-[1.05em]">Graduated: 2022</div>
          <div className="academics-cgpa text-[#444] text-[1.05em]">
            Percentage: Class XII - 92.80 %, Class X - 97.00 %
          </div>
        </div>
      </div>
    </section>
  );
}
