import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Button from "../components/UI/Button";

/* eslint-disable react/prop-types */
const Pricing = ({ leftToRightInitial, rightToLeftInitial, buttonAnimation }) => {
  const navigate = useNavigate();
  const cardsAnimation = {
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.3 },
    },
  };
  return (
    <section className="mt-12 md:mt-20 lg:mt-28">
      <div
        className="container mx-auto mt-6 sm:mt-8"
      >
        <h2 className="mb-4 md:mb-6 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">Fullframe Pricing</h2>
        <div className="flex flex-col md:flex-row items-center md:gap-0 gap-5 justify-center">
          {/* Free Trial Card */}
          <motion.div
            className="max-w-md bg-[rgba(255,255,255,0.05)] rounded-lg overflow-hidden shadow-lg mx-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: cardsAnimation.animate,
              hidden: leftToRightInitial.initial,
            }}
          >
            <div className="px-4 md:px-6 py-4">
              <h3 className="text-xl font-semibold text-center mb-2">7 Days Free Trial</h3>
              <p className="text-gray-300 text-center mb-3 md:mb-4">
                Try our service for free with no obligation.
              </p>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] px-6 py-4">
              <p className="text-sm md:text-lg text-center">
                Includes 3 scripts coverage and 2 book coverage.
              </p>
            </div>
          </motion.div>

          {/* Paid Plan Card */}
          <motion.div
            className="max-w-md bg-[rgba(255,255,255,0.05)] rounded-lg overflow-hidden shadow-lg mx-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: cardsAnimation.animate,
              hidden: rightToLeftInitial.initial,
            }}
          >
            <div className="px-4 md:px-6 py-4">
              <h3 className="text-xl font-semibold text-center mb-2">$25/month</h3>
              <p className="text-gray-300 text-center mb-3 md:mb-4">
                Enjoy unlimited access to our service.
              </p>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] px-6 py-4">
              <p className="text-sm md:text-lg text-center">
                Includes 10 scripts coverage and 5 book coverage.
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          animate={buttonAnimation.animate}
          initial={buttonAnimation.initial}
          className="flex justify-center mt-6 sm:mt-8"
        >
          <Button onClick={() => navigate('/signup', { state: { prevLandingPage: true } })} className="!px-5">
            Subscribe
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
export default Pricing;
