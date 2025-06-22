// src/components/Projects.jsx
export default function Projects() {
  return (
    <section id="projects" className="section-card max-w-[1100px] mx-auto my-10 p-10 bg-white rounded-[22px] shadow-xl border border-[#e3e6fa]">
      <div className="projects-title text-center text-[#5a48fa] text-[2.5em] font-extrabold mb-8 tracking-wide font-sans">
        Projects
      </div>
      <div className="projects-grid grid grid-cols-3 gap-8 max-lg:grid-cols-1">
        {/* Project 1 */}
        <div className="project-card flex flex-col min-h-[370px] bg-white rounded-[18px] border border-[#e5e2fe] shadow-lg p-7 transition hover:shadow-2xl hover:border-[#cfc2fd]">
          <div className="project-title text-lg font-extrabold text-[#222] mb-4">Text File Compressor</div>
          <div className="project-desc text-[1.07em] text-[#333] mb-3 flex-grow flex items-start">
            Built a robust, lossless text file compressor in C++ using the LZW algorithm, applying OOP and advanced algorithms. Achieved ~44% file size reduction on real-world files with efficient compression and decompression.
          </div>
          <div className="project-tags flex flex-wrap gap-2 mb-5">
            <span className="tag tag-cpp px-4 py-2 rounded-full font-medium text-[1em] bg-[#dde6fb] text-[#4154a6]">C++</span>
            <span className="tag tag-lzw px-4 py-2 rounded-full font-medium text-[1em] bg-[#d9f6fd] text-[#1da4b8]">LZW Algorithm</span>
            <span className="tag tag-oops px-4 py-2 rounded-full font-medium text-[1em] bg-[#e3e6fa] text-[#6a4dfc]">OOPS</span>
          </div>
          <a
            href="https://github.com/shashank2401/file-compressor-in-cpp"
            className="project-link mt-auto flex items-center gap-1 text-[#5a48fa] font-semibold text-[1.09em] hover:text-[#2d1e94] hover:underline transition"
            target="_blank"
            rel="noopener"
          >
            <span>&lt;/&gt;</span> Code
          </a>
        </div>
        {/* Project 2 */}
        <div className="project-card flex flex-col min-h-[370px] bg-white rounded-[18px] border border-[#e5e2fe] shadow-lg p-7 transition hover:shadow-2xl hover:border-[#cfc2fd]">
          <div className="project-title text-lg font-extrabold text-[#222] mb-4">Pathfinding Visualizer</div>
          <div className="project-desc text-[1.07em] text-[#333] mb-3 flex-grow flex items-start">
            Interactive C++/SFML visualizer for Dijkstra's and A* algorithms. Features dynamic obstacles, diagonal movement, OOP, and optimized data structures for smooth, real-time animations.
          </div>
          <div className="project-tags flex flex-wrap gap-2 mb-5">
            <span className="tag tag-cpp px-4 py-2 rounded-full font-medium text-[1em] bg-[#dde6fb] text-[#4154a6]">C++</span>
            <span className="tag tag-sfml px-4 py-2 rounded-full font-medium text-[1em] bg-[#f5e3fa] text-[#a64ca6]">SFML</span>
            <span className="tag tag-dijkstra px-4 py-2 rounded-full font-medium text-[1em] bg-[#e3f6fd] text-[#2c98c9]">Dijkstra's</span>
            <span className="tag tag-astar px-4 py-2 rounded-full font-medium text-[1em] bg-[#fff6c4] text-[#e6b800]">A*</span>
            <span className="tag tag-oops px-4 py-2 rounded-full font-medium text-[1em] bg-[#e3e6fa] text-[#6a4dfc]">OOPS</span>
            <span className="tag tag-ds px-4 py-2 rounded-full font-medium text-[1em] bg-[#fae3ef] text-[#d24d8a]">Data Structures</span>
          </div>
          <a
            href="https://github.com/shashank2401/pathfinding-visualizer-in-cpp"
            className="project-link mt-auto flex items-center gap-1 text-[#5a48fa] font-semibold text-[1.09em] hover:text-[#2d1e94] hover:underline transition"
            target="_blank"
            rel="noopener"
          >
            <span>&lt;/&gt;</span> Code
          </a>
        </div>
        {/* Project 3 */}
        <div className="project-card flex flex-col min-h-[370px] bg-white rounded-[18px] border border-[#e5e2fe] shadow-lg p-7 transition hover:shadow-2xl hover:border-[#cfc2fd]">
          <div className="project-title text-lg font-extrabold text-[#222] mb-4">Codeforces Visualizer</div>
          <div className="project-desc text-[1.07em] text-[#333] mb-3 flex-grow flex items-start">
            A minimal web app to view and compare Codeforces profiles. Shows key stats, rating history, and performance trends with clean visualizations. Built for fast, distraction-free, side-by-side comparisons.
          </div>
          <div className="project-tags flex flex-wrap gap-2 mb-5">
            <span className="tag tag-react px-4 py-2 rounded-full font-medium text-[1em] bg-[#e3f6fd] text-[#2c98c9]">React</span>
            <span className="tag tag-vite px-4 py-2 rounded-full font-medium text-[1em] bg-[#fff6c4] text-[#e6b800]">Vite</span>
            <span className="tag tag-js px-4 py-2 rounded-full font-medium text-[1em] bg-[#f9e3fa] text-[#a64ca6]">JavaScript</span>
            <span className="tag tag-api px-4 py-2 rounded-full font-medium text-[1em] bg-[#e3ffe6] text-[#4db050]">Tailwind CSS</span>
            <span className="tag tag-dataviz px-4 py-2 rounded-full font-medium text-[1em] bg-[#e3eafd] text-[#4d5aa6]">Codeforces API</span>
          </div>
          <div className="flex gap-4 mt-auto">
            <a
              href="https://cf-visualizer-rho.vercel.app"
              className="project-link flex items-center gap-1 text-[#5a48fa] font-semibold text-[1.09em] hover:text-[#2d1e94] hover:underline transition"
              target="_blank"
              rel="noopener"
            >
              🔗 Demo
            </a>
            <a
              href="https://github.com/shashank2401/cf-visualizer"
              className="project-link flex items-center gap-1 text-[#5a48fa] font-semibold text-[1.09em] hover:text-[#2d1e94] hover:underline transition"
              target="_blank"
              rel="noopener"
            >
              <span>&lt;/&gt;</span> Code
            </a>
          </div>
        </div>
        {/* Project 4 */}
        <div className="project-card flex flex-col min-h-[370px] bg-white rounded-[18px] border border-[#e5e2fe] shadow-lg p-7 transition hover:shadow-2xl hover:border-[#cfc2fd]">
          <div className="project-title text-lg font-extrabold text-[#222] mb-4">GitHub Profile Visualizer</div>
          <div className="project-desc text-[1.07em] text-[#333] mb-3 flex-grow flex items-start">
            A dynamic app for exploring and comparing GitHub user profiles. Visualizes rich statistics, activity timelines, and repository insights, including a contribution heatmap. Supports side-by-side comparisons and offers both dark and light modes.
          </div>
          <div className="project-tags flex flex-wrap gap-2 mb-5">
            <span className="tag tag-react px-4 py-2 rounded-full font-medium text-[1em] bg-[#e3f6fd] text-[#2c98c9]">React</span>
            <span className="tag tag-vite px-4 py-2 rounded-full font-medium text-[1em] bg-[#fff6c4] text-[#e6b800]">Vite</span>
            <span className="tag tag-js px-4 py-2 rounded-full font-medium text-[1em] bg-[#f9e3fa] text-[#a64ca6]">JavaScript</span>
            <span className="tag tag-api px-4 py-2 rounded-full font-medium text-[1em] bg-[#e3ffe6] text-[#4db050]">Tailwind CSS</span>
            <span className="tag tag-dataviz px-4 py-2 rounded-full font-medium text-[1em] bg-[#e3eafd] text-[#4d5aa6]">GitHub API</span>
          </div>
          <div className="flex gap-4 mt-auto">
            <a
              href="https://github-profile-visualizer-six.vercel.app/"
              className="project-link flex items-center gap-1 text-[#5a48fa] font-semibold text-[1.09em] hover:text-[#2d1e94] hover:underline transition"
              target="_blank"
              rel="noopener"
            >
              🔗 Demo
            </a>
            <a
              href="https://github.com/shashank2401/github-profile-visualizer"
              className="project-link flex items-center gap-1 text-[#5a48fa] font-semibold text-[1.09em] hover:text-[#2d1e94] hover:underline transition"
              target="_blank"
              rel="noopener"
            >
              <span>&lt;/&gt;</span> Code
            </a>
          </div>
        </div>
        {/* Project 5 */}
        <div className="project-card flex flex-col min-h-[370px] bg-white rounded-[18px] border border-[#e5e2fe] shadow-lg p-7 transition hover:shadow-2xl hover:border-[#cfc2fd]">
          <div className="project-title text-lg font-extrabold text-[#222] mb-4">Weather App</div>
          <div className="project-desc text-[1.07em] text-[#333] mb-3 flex-grow flex items-start">
            A sleek, responsive weather application delivering real-time weather updates for any city. Features location-based forecasts, intuitive search suggestions, and seamless toggling between Celsius and Fahrenheit.
          </div>
          <div className="project-tags flex flex-wrap gap-2 mb-5">
            <span className="tag tag-html px-4 py-2 rounded-full font-medium text-[1em] bg-[#fff3e3] text-[#e39107]">HTML</span>
            <span className="tag tag-css px-4 py-2 rounded-full font-medium text-[1em] bg-[#e3f7ff] text-[#1da4b8]">CSS</span>
            <span className="tag tag-js px-4 py-2 rounded-full font-medium text-[1em] bg-[#f9e3fa] text-[#a64ca6]">JavaScript</span>
            <span className="tag tag-api px-4 py-2 rounded-full font-medium text-[1em] bg-[#e3ffe6] text-[#4db050]">Weather API</span>
            <span className="tag tag-responsive px-4 py-2 rounded-full font-medium text-[1em] bg-[#e3eafd] text-[#4d5aa6]">Responsive Design</span>
          </div>
          <div className="flex gap-4 mt-auto">
            <a
              href="https://weather-app-zeta-three-62.vercel.app/"
              className="project-link flex items-center gap-1 text-[#5a48fa] font-semibold text-[1.09em] hover:text-[#2d1e94] hover:underline transition"
              target="_blank"
              rel="noopener"
            >
              🔗 Demo
            </a>
            <a
              href="https://github.com/shashank2401/weather-app"
              className="project-link flex items-center gap-1 text-[#5a48fa] font-semibold text-[1.09em] hover:text-[#2d1e94] hover:underline transition"
              target="_blank"
              rel="noopener"
            >
              <span>&lt;/&gt;</span> Code
            </a>
          </div>
        </div>
        {/* Project 6 */}
        <div className="project-card flex flex-col min-h-[370px] bg-white rounded-[18px] border border-[#e5e2fe] shadow-lg p-7 transition hover:shadow-2xl hover:border-[#cfc2fd]">
          <div className="project-title text-lg font-extrabold text-[#222] mb-4">Soil-Water Characteristic Curve Prediction</div>
          <div className="project-desc text-[1.07em] text-[#333] mb-3 flex-grow flex items-start">
            Used Artificial Neural Networks (ANNs) to predict SWCC parameters from soil properties for plastic soils. Improved geotechnical prediction for slope stability and foundation design.
          </div>
          <div className="project-tags flex flex-wrap gap-2 mb-5">
            <span className="tag tag-python px-4 py-2 rounded-full font-medium text-[1em] bg-[#e7ffd9] text-[#4db050]">Python</span>
            <span className="tag tag-tf px-4 py-2 rounded-full font-medium text-[1em] bg-[#ffe3e3] text-[#e05d5d]">TensorFlow</span>
            <span className="tag tag-ann px-4 py-2 rounded-full font-medium text-[1em] bg-[#e6ffe3] text-[#4db050]">ANN</span>
            <span className="tag tag-sm px-4 py-2 rounded-full font-medium text-[1em] bg-[#e3eafd] text-[#4d5aa6]">Soil Mechanics</span>
            <span className="tag tag-da px-4 py-2 rounded-full font-medium text-[1em] bg-[#f9f6e3] text-[#e39107]">Data Analysis</span>
          </div>
          <a
            href="https://github.com/shashank2401/swcc-prediction-using-ann"
            className="project-link mt-auto flex items-center gap-1 text-[#5a48fa] font-semibold text-[1.09em] hover:text-[#2d1e94] hover:underline transition"
            target="_blank"
            rel="noopener"
          >
            <span>&lt;/&gt;</span> Code
          </a>
        </div>
      </div>
    </section>
  );
}