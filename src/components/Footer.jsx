import {
  IoSunny,
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoYoutube,
} from "react-icons/io5";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#1C1007] text-[#FFFBF0] overflow-hidden">
      {/* Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' /%3E%3C/svg%3E\")",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* --- Brand & Contact Section --- */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, #F59E0B 0%, #F97316 100%)",
                }}
              >
                <IoSunny className="text-2xl text-[#1C1007]" />
              </div>
              <h3 className="text-2xl  text-[#FFFBF0]">HelloSummer</h3>
            </div>
            <p className="text-[#FFFBF0]/70 mb-6 leading-relaxed">
              Your tropical paradise for summer essentials. Curated collections
              that bring the warmth of endless summer days to your doorstep.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[#FFFBF0]/60">
                <IoMailOutline className="text-lg text-[#F97316]" />
                <span className="text-sm">hello@HelloSummer.com</span>
              </div>
              <div className="flex items-center gap-3 text-[#FFFBF0]/60">
                <IoCallOutline className="text-lg text-[#F97316]" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-[#FFFBF0]/60">
                <IoLocationOutline className="text-lg text-[#F97316]" />
                <span className="text-sm">Miami Beach, FL 33139</span>
              </div>
            </div>
          </div>

          {/* --- Links Section --- */}
          <div>
            <h4 className="text-xl font-medium text-[#FFFBF0] mb-6">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                {["Home", "Products", "About Us", "Contact"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-[#FFFBF0]/70 hover:text-[#F97316] transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
              <div className="space-y-3">
                {["Shop", "My Account", "Track Order", "FAQ"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-[#FFFBF0]/70 hover:text-[#F97316] transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* --- Newsletter & Socials --- */}
          <div>
            <h4 className="text-xl font-medium text-[#FFFBF0] mb-6">
              Follow Us
            </h4>
            <p className="text-[#FFFBF0]/70 mb-6">
              Stay connected for the latest summer trends and tropical vibes.
            </p>

            <div className="flex items-center gap-4 mb-8">
              {[
                { icon: IoLogoFacebook, label: "Facebook" },
                { icon: IoLogoTwitter, label: "Twitter" },
                { icon: IoLogoInstagram, label: "Instagram" },
                { icon: IoLogoYoutube, label: "Youtube" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="group w-11 h-11 rounded-full bg-[#FFFBF0]/5 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-br from-[#F59E0B] to-[#F97316] hover:shadow-[0_8px_24px_rgba(245,158,11,0.4)]"
                >
                  <social.icon className="text-xl text-[#FFFBF0] group-hover:text-[#1C1007] transition-colors" />
                </a>
              ))}
            </div>

            <div>
              <h5 className="text-sm font-semibold text-[#FFFBF0] mb-3 uppercase tracking-wider">
                Newsletter
              </h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 bg-[#FFFBF0]/10 border border-[#FFFBF0]/20 rounded-xl text-[#FFFBF0] placeholder:text-[#FFFBF0]/40 focus:border-[#F59E0B] focus:outline-none transition-colors"
                />
                <button className="px-5 py-2.5 rounded-xl bg-linear-to-r from-[#F59E0B] to-[#F97316] text-[#1C1007] font-bold hover:shadow-[0_8px_24px_rgba(245,158,11,0.4)] transition-all active:scale-95">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="pt-8 border-t border-[#FFFBF0]/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#FFFBF0]/60 text-center md:text-left">
              © {currentYear} HelloSummer. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-sm text-[#FFFBF0]/60 hover:text-[#F97316] transition-colors"
                  >
                    {item}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
