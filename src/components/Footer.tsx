import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#20498A] text-white pt-24 pb-12 overflow-hidden border-t border-white/10">
      {/* Universal Hero-Style Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#20498A] via-[#1a3a6e] to-[#16F88A]/10" />

      {/* Brand Radial Glow */}
      <div className="absolute -left-[10%] bottom-0 w-[500px] h-[500px] bg-[#16F88A]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand & Socials */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black tracking-tighter italic">
              Hevora.
            </h2>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs font-medium">
              Transforming complex visions into elegant digital solutions with
              precision and code.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#16F88A] hover:text-[#20498A] transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-[#16F88A]">
              Navigator
            </h3>
            <ul className="space-y-4 font-bold text-sm">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Home Base
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Case Portfolios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Core Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Our Story
                </a>
              </li>
            </ul>
          </div>

          {/* Specialized Services */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-[#16F88A]">
              Expertise
            </h3>
            <ul className="space-y-4 font-bold text-sm">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Custom Software
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Web Systems
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Mobile Engineering
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  UI/UX Strategy
                </a>
              </li>
            </ul>
          </div>

          {/* Global Contact */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[32px]">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-[#16F88A]">
              Direct Line
            </h3>
            <ul className="space-y-6 text-sm font-bold">
              <li className="flex flex-col">
                <span className="text-[10px] text-white/40 mb-1 uppercase tracking-widest">
                  Phone
                </span>
                <span className="text-white">(105) 115-2920</span>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] text-white/40 mb-1 uppercase tracking-widest">
                  HQ Address
                </span>
                <span className="text-white">201 Air Street, 3rd Floor</span>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] text-white/40 mb-1 uppercase tracking-widest">
                  Inquiries
                </span>
                <span className="text-[#16F88A] hover:underline cursor-pointer">
                  support@hevora.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/10 gap-6">
          <p className="text-xs font-bold text-white/40">
            © 2026 Hevora Technologies.{" "}
            <span className="text-[#16F88A] italic">Built for the future.</span>
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
            <a
              href="#"
              className="text-white/40 hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-white transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-white transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
