import { motion } from "framer-motion";

import EnterpriseCard from '../components/landing/EnterpriseCard';

import { ENTERPRISE_DATA } from '../static/data/LandingContent';

/* eslint-disable react/prop-types */
function Security({ textAnimation }) {
  return (
    <section className="mt-14 md:mt-20 lg:mt-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: textAnimation.animate,
          hidden: textAnimation.initial,
        }}
      >
        <h2 className="flex justify-center text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          Enterprise-Grade Security
        </h2>
        <div className="flex justify-center mt-6 md:mt-8">
          <p className="text-gray-300 text-center sm:text-base font-normal">
            Purpose-built for the entertainment industry, FullFrame&apos;s architecture
            has been designed to meet the privacy and confidentiality requirements
            of our customers.
          </p>
        </div>
        <div className="grid md:grid-cols-3 items-center justify-center gap-4 md:gap-6 lg:gap-8 mt-8 md:mt-14 lg:mt-20">
          {ENTERPRISE_DATA.map((item, index) => (
            <EnterpriseCard
              key={item.Description}
              Description={item.Description}
              Icon={item.Icon}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Security;
