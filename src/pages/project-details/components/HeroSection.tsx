import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

function HeroSection({ textAnimation, buttonAnimation } : { textAnimation: any, buttonAnimation: any }) {
  const navigate = useNavigate();

  return (
    <section className="relative mt-12 md:mt-20 lg:mt-28">
      {/* Title */}
      <motion.div
        animate={textAnimation.animate}
        initial={textAnimation.initial}
        whileInView="visible"
        viewport={{ once: true }}
        className="flex justify-center items-center"
      >
        <div className="flex flex-col gap-6 lg:gap-8 items-center text-center mx-auto">
          <h2 className="flex flex-col text-center font-extrabold text-xl sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="leading-[2rem] sm:leading-[2.5rem] md:leading-[3.5rem] lg:leading-[4.5rem]">Project 1</span>
            {/* <span className="leading-[2rem] sm:leading-[2.5rem] md:leading-[3.5rem] lg:leading-[4.5rem]">book coverage drafting</span> */}
          </h2>
          <p className="text-gray-300">
            A platform for developers to showcase their projects and get feedback from the community
          </p>
          <motion.div animate={buttonAnimation.animate} initial={buttonAnimation.initial}>
            <button type="button" onClick={() => navigate('/signup', { state: { prevLandingPage: true } })}>
              Add Project
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
