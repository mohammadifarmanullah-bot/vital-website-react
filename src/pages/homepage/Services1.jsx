
import { motion } from "framer-motion";
import {
  Accessibility,
  Bone,
  Brain,
  HeartPulse,
  HandHeart,
  Activity,
  ArrowRight,
  Stethoscope,
} from "lucide-react";

const services = [
  {
    title: "Pediatrics",
    description:
      "Monitor your child's growth and development closely to ensure their health at every stage.",
    icon: Accessibility,
  },
  {
    title: "Orthopedics",
    description:
      "Receive care for bone and muscle health with advanced treatments tailored to your needs.",
    icon: Bone,
  },
  {
    title: "Gastroenterology",
    description:
      "Comprehensive care for digestive health to address issues with precision and personalized attention.",
    icon: Activity,
  },
  {
    title: "Neurology",
    description:
      "Specialized treatments for brain and nervous system conditions with expert neurological care.",
    icon: Brain,
  },
  {
    title: "Cardiology",
    description:
      "State-of-the-art heart care focused on prevention, diagnosis, and treatment.",
    icon: HeartPulse,
  },
  {
    title: "General care",
    description:
      "Reliable primary healthcare services to support your overall health and well-being.",
    icon: HandHeart,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Services1() {
  return (
    <section
      id="services"
      className="overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 text-center sm:mb-14"
        >
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            <span className="text-xs font-medium text-neutral-800">
              Services
            </span>
          </div>

          <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.045em] text-neutral-900 sm:text-4xl md:text-[38px]">
            Personalized solutions for
            <br className="hidden sm:block" /> better oral health
          </h2>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                variants={cardVariants}
                whileHover={{
                  y: -7,
                  transition: { duration: 0.25 },
                }}
                className="group flex min-h-[280px] flex-col items-center rounded-[22px] bg-[#F3F8FE] px-6 py-8 text-center transition-colors duration-300 hover:bg-[#EDF5FF] sm:min-h-[282px] sm:px-7"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#E8F1FF] text-[#4385FF] transition-colors duration-300 group-hover:bg-white"
                >
                  <Icon size={26} strokeWidth={1.7} />
                </motion.div>

                {/* Title */}
                <h3 className="mt-7 text-[17px] font-medium tracking-tight text-neutral-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 max-w-[290px] text-[13px] leading-[1.65] text-neutral-600">
                  {service.description}
                </p>

                {/* Link */}
                <a
                  href={`/services/${service.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="mt-5 inline-flex items-center gap-2 text-[13px] font-medium text-neutral-900 outline-none transition-colors duration-300 hover:text-blue-600 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-blue-400"
                  aria-label={`View ${service.title} services`}
                >
                  View Services
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
