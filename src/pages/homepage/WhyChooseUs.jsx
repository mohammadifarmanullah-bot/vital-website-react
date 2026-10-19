
import { motion } from "framer-motion";
import { ArrowUpRight, Stethoscope } from "lucide-react";

const features = [
  {
    number: "01",
    title: "Experienced Professionals",
    description:
      "Our team of dedicated healthcare providers brings years of experience and expertise to deliver care.",
  },
  {
    number: "02",
    title: "Advanced Technology",
    description:
      "We utilize cutting-edge medical technology to provide accurate diagnoses and effective treatments.",
  },
];

const doctors = [
  {
    name: "Jonathan Reed",
    specialty: "Gastroenterologist",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Olivia Bennett",
    specialty: "Dermatologist",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=100&q=80",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="overflow-hidden bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Left: Content */}
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.16 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={fadeUp}
            className="mb-5 flex items-center gap-2 text-sm font-medium text-gray-700"
          >
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Why us
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.045em] text-neutral-900 sm:text-4xl lg:text-[42px]"
          >
            Why choose VitalFlow for your healthcare?
          </motion.h2>

          <div className="mt-10 space-y-7">
            {features.map((feature) => (
              <motion.div
                key={feature.number}
                variants={fadeUp}
                className="group flex gap-4 sm:gap-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-200 text-xs font-medium text-neutral-800 transition-all duration-300 group-hover:border-blue-500 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/20">
                  {feature.number}
                </div>

                <div className="pt-0.5">
                  <h3 className="text-base font-medium tracking-tight text-neutral-900 sm:text-lg">
                    {feature.title}
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-6 text-neutral-500">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.a
            variants={fadeUp}
            href="#doctors"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            Get Started
            <ArrowUpRight size={16} />
          </motion.a>
        </motion.div>

        {/* Right: Doctor image and floating card */}
        <motion.div
          className="relative mx-auto w-full max-w-[/500px/] pb-8 sm:pb-7"
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative ml-auto h-[/320px/] w-[88%] overflow-hidden rounded-2xl sm:h-[/390px/] lg:h-[/400px/]"
          >
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=85"
              alt="Doctor providing professional healthcare"
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-linear-to-t from-slate-900/10 to-transparent" />
          </motion.div>

          {/* Floating doctors card */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.65 }}
            whileHover={{ y: -5 }}
            className="absolute bottom-0 left-0 z-10 w-[min(290px,82%)] rounded-2xl border border-gray-100/80 bg-white p-4 shadow-[0_8px_35px_rgba(15,23,42,0.08)] sm:p-5"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-500">
                <Stethoscope size={17} />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-neutral-900">
                  Available Doctors
                </h3>
                <p className="mt-0.5 text-[11px] text-neutral-500">
                  Choose Doctors
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {doctors.map((doctor, index) => (
                <motion.div
                  key={doctor.name}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.55 + index * 0.15 }}
                  className="flex items-center gap-3"
                >
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="h-10 w-10 rounded-full bg-blue-50 object-cover"
                    loading="lazy"
                  />

                  <div className="min-w-0">
                    <p className="text-sm font-medium text-neutral-900">
                      {doctor.name}
                    </p>
                    <p className="mt-1 text-[11px] text-neutral-500">
                      {doctor.specialty}
                    </p>
                  </div>

                  <span className="ml-auto h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#doctors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-50 px-3 py-3 text-xs font-medium text-blue-500 transition-colors duration-300 hover:bg-blue-100"
            >
              Meet Our Experts
              <ArrowUpRight size={14} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
