
import { useState } from "react";
import { Link } from "react-router-dom";
import { HeartPlus, ArrowRight } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const footerGroups = [
    {
      title: "Static pages",
      links: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "404", path: "/404" },
      ],
    },
    {
      title: "CMS Pages",
      links: [
        { name: "Services", path: "/services" },
        { name: "Doctors", path: "/doctors" },
        { name: "Careers", path: "/careers" },
        { name: "Blogs", path: "/blog" },
      ],
    },
    {
      title: "Detail pages",
      links: [
        { name: "Service Details", path: "/services" },
        { name: "Doctor Details", path: "/doctors" },
        { name: "Career Details", path: "/careers" },
        { name: "Blog Details", path: "/blog" },
      ],
    },
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/" },
    { name: "Facebook", url: "https://www.facebook.com/" },
    { name: "YouTube", url: "https://www.youtube.com/" },
  ];

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage(
      "Thanks for your interest! Newsletter signup needs to be connected to a backend."
    );
  };

  return (
    <footer className="w-full   bg-white">
      <div className="container mx-auto max-w-[1800px] px-6 pb-8 pt-12 sm:px-18 lg:px-[2.6%] lg:pt-24">

        {/* Top Footer */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-4">

          {/* Brand */}
          <div className="lg:col-span-6">
            <Link
              to="/"
              className="inline-flex items-center gap-4"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-[18px] bg-[#4380ff] text-white">
                <HeartPlus size={29} strokeWidth={1.8} />
              </span>

              <span className="text-2xl tracking-[-1.5px] text-black">
                Vital+Flow
              </span>
            </Link>

            <p className="mt-6 max-w-[/570px] text-xl leading-[1.8] tracking-tight text-[#666666] sm:text-xl">
              Creative healthcare template to launch
              your site quick and easily
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#4380ff] px-6 py-3 text-lg text-white transition duration-300 hover:bg-blue-600"
            >
              Book a call
            </Link>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-6">
            <h2 className="text-2xl tracking-tight text-black">
              Stay up to date
            </h2>

            <form
              onSubmit={handleSubscribe}
              className="mt-6 flex flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>

              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setMessage("");
                }}
                placeholder="name@email.com"
                required
                className="min-w-0 flex-1 rounded-[20px] border border-transparent bg-[#f2f8fd] px-6 py-6 text-lg text-gray-900 outline-none transition placeholder:text-[#666666] focus:border-[#4380ff] sm:px-12"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-[20px] bg-[#4380ff] px-8 py-5 text-lg font-semibold text-white transition duration-300 hover:bg-blue-600 sm:px-10"
              >
                Subscribe
                <ArrowRight size={20} />
              </button>
            </form>

            {message ? (
              <p role="status" className="mt-4 text-sm text-gray-600">
                {message}
              </p>
            ) : (
              <p className="mt-5 text-base leading-relaxed text-[#666666] sm:text-lg">
                By subscribing, you agree to our{" "}
                <Link
                  to="/privacy"
                  className="underline underline-offset-4 hover:text-[#4380ff]"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            )}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-16 flex justify-end  lg:gap-20">

          {footerGroups.map((group) => (
            <div key={group.title} className="lg:col-span-2">
              <h3 className="mb-8 text-lg font-medium text-black sm:text-xl">
                {group.title}
              </h3>

              <ul className="space-y-5">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-base text-[#777777] transition-colors duration-200 hover:text-[#4380ff] sm:text-lg"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Links */}
          <div className="lg:col-span-2">
            <h3 className="mb-8 text-lg font-medium text-black sm:text-xl">
              Follow us
            </h3>

            <ul className="space-y-5">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-[#777777] transition-colors duration-200 hover:text-[#4380ff] sm:text-lg"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>

            <Link
              to="/"
              className="mt-6 inline-flex whitespace-nowrap rounded-full bg-[#4380ff] px-6 py-4 text-base font-medium text-white transition duration-300 hover:bg-blue-600"
            >
              Explore Vital+Flow
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-14 flex justify-center border-t border-gray-200 pt-6 text-sm text-[#777777]">
          <p>
            © {new Date().getFullYear()} Vital+Flow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

