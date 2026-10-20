
import { motion } from "framer-motion";
import { Target, Sparkles, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function AboutUs() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Left: Laboratory image */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden rounded-[20px]"
          >
            <img
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=85"
              alt="Healthcare professionals working in a medical laboratory"
              loading="lazy"
              className="h-[300px] w-full object-cover sm:h-[390px] lg:h-[390px]"
            />
          </motion.div>
        </motion.div>

        {/* Right: About content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="lg:pl-1"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            className="mb-4 flex items-center gap-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="text-xs font-medium text-neutral-800">
              About us
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="max-w-lg text-3xl font-semibold leading-[1.16] tracking-[-0.045em] text-neutral-900 sm:text-4xl"
          >
            Vision for a healthier and brighter tomorrow
          </motion.h2>

          {/* Mission */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex gap-4 sm:gap-5"
          >
            <motion.div
              whileHover={{ scale: 1.08, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-blue-500 shadow-[0_2px_18px_rgba(15,23,42,0.08)]"
            >
              <Target size={19} fill="currentColor" strokeWidth={1.8} />
            </motion.div>

            <div className="pt-1">
              <h3 className="text-base font-medium tracking-tight text-neutral-900 sm:text-[17px]">
                Our Mission
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-[1.7] text-neutral-500">
                Our mission is to deliver compassionate and high-quality
                healthcare services.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            variants={fadeUp}
            className="mt-6 flex gap-4 sm:gap-5"
          >
            <motion.div
              whileHover={{ scale: 1.08, rotate: 8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-blue-500 shadow-[0_2px_18px_rgba(15,23,42,0.08)]"
            >
              <Sparkles size={19} fill="currentColor" strokeWidth={1.8} />
            </motion.div>

            <div className="pt-1">
              <h3 className="text-base font-medium tracking-tight text-neutral-900 sm:text-[17px]">
                Our Vision
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-[1.7] text-neutral-500">
                Leading healthcare provider, recognized for innovative
                practices and care.
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.a
            variants={fadeUp}
            href="#services"
            whileHover={{ y: -3, scale: 1.025 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-2.5 text-xs font-medium text-white shadow-sm transition-colors duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20"
          >
            What we do
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
