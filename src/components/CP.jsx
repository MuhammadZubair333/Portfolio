// src/components/CP.jsx
export default function CP() {
  return (
    <section id="cp" className="section-card max-w-[1100px] mx-auto my-10 p-10 bg-white rounded-[22px] shadow-xl border border-[#e3e6fa]">
      <div className="cp-title text-center text-[#5a48fa] text-[2.5em] font-extrabold mb-8 tracking-wide font-sans">
        Competitive Programming
      </div>
      <div className="cp-grid grid grid-cols-4 gap-7 mb-9 max-lg:grid-cols-2 max-md:grid-cols-1">
        {/* Codeforces */}
        <div className="cp-card flex flex-col items-center min-h-[230px] bg-white rounded-[18px] border border-[#e5e2fe] shadow-lg p-7 transition hover:shadow-2xl hover:border-[#cfc2fd]">
          <div className="cp-icon w-12 h-12 bg-[#e3e6fa] flex items-center justify-center mb-3 shadow">
            <img src="/assets/logos/codeforces.png" alt="Codeforces Logo" className="w-full h-full object-contain bg-white" />
          </div>
          <div className="cp-platform text-lg font-bold text-[#222] mb-1">Codeforces</div>
          <div className="cp-handle text-[#444] mb-1">
            Handle: <a href="https://codeforces.com/profile/shashank2401" className="text-[#5a48fa] hover:underline" target="_blank" rel="noopener">shashank2401</a>
          </div>
          <div className="cp-rating text-[#444] mb-1">Max Rating: <span>1600</span></div>
          <div className="cp-rank text-[#444] mb-1">Rank: <span>Expert</span></div>
          <a href="https://codeforces.com/profile/shashank2401" className="cp-link mt-auto flex items-center gap-1 text-[#5a48fa] font-semibold hover:text-[#2d1e94] hover:underline transition" target="_blank" rel="noopener">
            <i className="fa-regular fa-file-lines"></i> View Profile
          </a>
        </div>
        {/* CodeChef */}
        <div className="cp-card flex flex-col items-center min-h-[230px] bg-white rounded-[18px] border border-[#e5e2fe] shadow-lg p-7 transition hover:shadow-2xl hover:border-[#cfc2fd]">
          <div className="cp-icon w-12 h-12 bg-[#e3e6fa] flex items-center justify-center mb-3 shadow">
            <img src="/assets/logos/codechef.svg" alt="CodeChef Logo" className="w-full h-full object-contain bg-white" />
          </div>
          <div className="cp-platform text-lg font-bold text-[#222] mb-1">CodeChef</div>
          <div className="cp-handle text-[#444] mb-1">
            Handle: <a href="https://www.codechef.com/users/shashankraj24" className="text-[#5a48fa] hover:underline" target="_blank" rel="noopener">shashankraj24</a>
          </div>
          <div className="cp-rating text-[#444] mb-1">Max Rating: <span>1954</span></div>
          <div className="cp-rank text-[#444] mb-1">Rank: <span>4-Star</span></div>
          <a href="https://www.codechef.com/users/shashankraj24" className="cp-link mt-auto flex items-center gap-1 text-[#5a48fa] font-semibold hover:text-[#2d1e94] hover:underline transition" target="_blank" rel="noopener">
            <i className="fa-regular fa-file-lines"></i> View Profile
          </a>
        </div>
        {/* LeetCode */}
        <div className="cp-card flex flex-col items-center min-h-[230px] bg-white rounded-[18px] border border-[#e5e2fe] shadow-lg p-7 transition hover:shadow-2xl hover:border-[#cfc2fd]">
          <div className="cp-icon w-12 h-12 bg-[#e3e6fa] flex items-center justify-center mb-3 shadow">
            <img src="/assets/logos/leetcode.png" alt="LeetCode Logo" className="w-full h-full object-contain bg-white" />
          </div>
          <div className="cp-platform text-lg font-bold text-[#222] mb-1">LeetCode</div>
          <div className="cp-handle text-[#444] mb-1">
            Handle: <a href="https://leetcode.com/u/shashank2401/" className="text-[#5a48fa] hover:underline" target="_blank" rel="noopener">shashank2401</a>
          </div>
          <div className="cp-rating text-[#444] mb-1">Max Rating: <span>1973</span></div>
          <div className="cp-rank text-[#444] mb-1">Badge: <span>Knight</span></div>
          <a href="https://leetcode.com/u/shashank2401/" className="cp-link mt-auto flex items-center gap-1 text-[#5a48fa] font-semibold hover:text-[#2d1e94] hover:underline transition" target="_blank" rel="noopener">
            <i className="fa-regular fa-file-lines"></i> View Profile
          </a>
        </div>
        {/* AtCoder */}
        <div className="cp-card flex flex-col items-center min-h-[230px] bg-white rounded-[18px] border border-[#e5e2fe] shadow-lg p-7 transition hover:shadow-2xl hover:border-[#cfc2fd]">
          <div className="cp-icon w-12 h-12 bg-[#e3e6fa] flex items-center justify-center mb-3 shadow">
            <img src="/assets/logos/atcoder.png" alt="AtCoder Logo" className="w-full h-full object-contain bg-white" />
          </div>
          <div className="cp-platform text-lg font-bold text-[#222] mb-1">AtCoder</div>
          <div className="cp-handle text-[#444] mb-1">
            Handle: <a href="https://atcoder.jp/users/shashank24" className="text-[#5a48fa] hover:underline" target="_blank" rel="noopener">shashank24</a>
          </div>
          <div className="cp-rating text-[#444] mb-1">Max Rating: <span>809</span></div>
          <div className="cp-rank text-[#444] mb-1">Rank: <span>6 Kyu</span></div>
          <a href="https://atcoder.jp/users/shashank24" className="cp-link mt-auto flex items-center gap-1 text-[#5a48fa] font-semibold hover:text-[#2d1e94] hover:underline transition" target="_blank" rel="noopener">
            <i className="fa-regular fa-file-lines"></i> View Profile
          </a>
        </div>
      </div>
      {/* Key Highlights */}
      <div className="cp-highlights bg-[#fafbff] rounded-[18px] shadow-lg border border-[#e5e2fe] p-7 mb-0 transition hover:shadow-2xl hover:border-[#cfc2fd]">
        <div className="highlights-title text-lg font-bold text-[#222] mb-1">Key Highlights</div>
        <a href="https://codolio.com/profile/shashank24" className="highlights-link text-[#5a48fa] text-[1.05em] underline mb-3 inline-block" target="_blank" rel="noopener">
          View my Codolio Profile for more details
        </a>
        <ul className="highlights-list list-disc ml-5 mt-2">
          <li>
            Successfully solved over <a href="https://codolio.com/profile/shashank24" className="text-[#5a48fa] underline" target="_blank" rel="noopener">900+ problems</a> across various competitive programming platforms.
          </li>
          <li>
            Actively participated in over <a href="https://codolio.com/profile/shashank24" className="text-[#5a48fa] underline" target="_blank" rel="noopener">90 contests</a> across platforms.
          </li>
          <li>
            Achieved <a href="https://codeforces.com/contest/2114/standings/participant/211255102#p211255102" className="text-[#5a48fa] underline" target="_blank" rel="noopener">Global Rank 847</a> in Codeforces Round 1027 (Div. 3).
          </li>
          <li>
            Secured <a href="https://codeforces.com/contest/2090/standings/participant/206688395#p206688395" className="text-[#5a48fa] underline" target="_blank" rel="noopener">Global Rank 849</a> in Codeforces Round 1012 (Div. 2).
          </li>
          <li>
            Attained <a href="https://www.codechef.com/rankings/START154D?itemsPerPage=100&order=asc&page=1&sortBy=rank" className="text-[#5a48fa] underline" target="_blank" rel="noopener">Global Rank 99</a> in CodeChef Starters 154 (Div. 4).
          </li>
          <li>
            Secured <a href="https://www.codechef.com/rankings/START187B?itemsPerPage=100&order=asc&page=1&sortBy=rank" className="text-[#5a48fa] underline" target="_blank" rel="noopener">Global Rank 120</a> in CodeChef Starters 187 (Div. 2).
          </li>
        </ul>
      </div>
    </section>
  );
}
