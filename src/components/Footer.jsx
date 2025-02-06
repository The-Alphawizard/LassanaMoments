import React from "react";
import { Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const photographyLinks = [
    { title: "Wedding Photography", href: "#" },
    { title: "Pro Shoots", href: "#" },
    { title: "Birthday Photography", href: "#" },
    { title: "Event Photography", href: "#" },
    { title: "Second Photographers", href: "#" },
    { title: "Baby Shoots", href: "#" },
  ];

  const galleryLinks = [
    { title: "Baby Shoots", href: "#" },
    { title: "Modal Shoots", href: "#" },
    { title: "Pre Shoots", href: "#" },
    { title: "Weddings", href: "#" },
    { title: "Events", href: "#" },
  ];

  return (
    <footer className="bg-secondGreen text-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  justify-around ">
          {/* cols  */}
          <div>
            {/* Logo  */}
            <div className="space-y-4 flex items-center md:items-start text-center md:text-left">
              <h2 className="text-4xl italic font-bold">LassanaMoments</h2>
            </div>
          </div>

          {/* cols 2 */}
          <div className="flex gap-30">
            {/* Find Photographers Links */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-4">Find Photographers</h3>
              <ul className="space-y-2">
                {photographyLinks.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      className="hover:text-gray-400 transition-colors"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Photo Galleries Links */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-4">Photo Galleries</h3>
              <ul className="space-y-2">
                {galleryLinks.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      className="hover:text-gray-400 transition-colors"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright and Logout */}
        <div className="mt-8 pt-8 border-t-5 border-gray-800 flex flex-col md:flex-row justify-center md:justify-between items-center space-y-4 md:space-y-0">
          <p className="text-md text-gray-400 font-bold ">
            © 2025 LassanaMoments
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              <Facebook size={24} />
            </a>
          </div>
          <button className="text-sm hover:text-gray-400 transition-colors font-bold">
            Logout
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
