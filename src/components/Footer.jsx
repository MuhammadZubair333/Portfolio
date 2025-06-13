// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="footer w-full bg-[#f6f8fc] border-t border-[#ececec] py-4 mt-0">
      <div className="footer-content max-w-[1100px] mx-auto text-center">
        <div className="footer-text text-[#444] text-base mb-2">
          © 2025 Shashank Raj. All rights reserved.
        </div>
        <div className="footer-icons flex justify-center gap-8 mt-0">
          <a
            href="https://github.com/shashank2401"
            title="GitHub"
            className="text-[#6a6e7c] text-2xl hover:text-[#5a48fa] transition"
            target="_blank"
            rel="noopener"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/shashankraj2401/"
            title="LinkedIn"
            className="text-[#6a6e7c] text-2xl hover:text-[#5a48fa] transition"
            target="_blank"
            rel="noopener"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="mailto:shashankraj0124@gmail.com"
            title="Email"
            className="text-[#6a6e7c] text-2xl hover:text-[#5a48fa] transition"
            target="_blank"
            rel="noopener"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
