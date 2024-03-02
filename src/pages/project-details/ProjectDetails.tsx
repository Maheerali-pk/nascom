import { useEffect, useRef } from 'react';

import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from 'react-router-dom';

import HeroSection from './components/HeroSection';

import Features from './components/Features';
import Testimonials from './components/Testimonials';

function ProjectDetails() {
  const scrollRef = useRef(true);
  const navigate = useNavigate();

  const textAnimation = {
    animate: {
      y: 0, x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 },
    },
    initial: { opacity: 0, y: 80 },
  };
  const buttonAnimation = {
    animate: {
      y: 0,
      opacity: 1,
      transition:
      { duration: 0.7, delay: 0.23 },
    },
    initial: { opacity: 0, y: 80 },
  };

  const leftToRightInitial = { initial: { opacity: 0, x: -80 } };
  const rightToLeftInitial = { initial: { opacity: 0, x: 80 } };

  function handleScroll() {
    localStorage.setItem('scrollPosition', scrollRef.current.scrollTop);
  }

  useEffect(() => {
    const scrollPosition = localStorage.getItem('scrollPosition');

    const targetElement = scrollRef.current;

    if (scrollPosition) {
      scrollRef.current.scrollTop = scrollPosition;
    }

    targetElement.addEventListener("scroll", handleScroll);

    return () => targetElement.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      <div ref={scrollRef} className="relative w-full h-sreen overflow-y-scroll font-inter">
        <div className="relative w-[94%] md:w-[90%] mx-auto z-30">
          {/* display: -webkit-flex */}
          <div className="mt-10 sm:mt-16 md:mt-24 lg:mt-32 b-[rgba(0,1,32,0.3)]">
            <HeroSection
              textAnimation={textAnimation}
              buttonAnimation={buttonAnimation}
            />
            {/* Features */}
            <Features
              textAnimation={textAnimation}
              leftToRightInitial={leftToRightInitial}
              rightToLeftInitial={rightToLeftInitial}
            />

            <Testimonials
              textAnimation={textAnimation}
              leftToRightInitial={leftToRightInitial}
              rightToLeftInitial={rightToLeftInitial}
            />

            {/* Extras */}
            <section className="relative py-8 sm:py-12 md:py-16 lg:py-28 bg-slate-200 bg-opacity-5 mt-12 md:mt-20 lg:mt-28">
              <motion.div
                className="relative flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-12 z-30"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0.7 },
                }}
              >
                <div className="flex flex-col gap-1 text-center font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed">
                  <span className="leading-[2rem] sm:leading-[2.5rem] md:leading-[3.5rem] lg:leading-[4.5rem]">
                    Try out Platform
                  </span>
                  <span className="leading-[2rem] sm:leading-[2.5rem] md:leading-[3.5rem] lg:leading-[4.5rem]">
                    Today
                  </span>
                </div>
                <motion.div
                  className="flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-12"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0.7 },
                  }}
                >
                  <button type='button' onClick={() => navigate('/signup', { state: { prevLandingPage: true } })}>
                    Add Project
                  </button>
                </motion.div>
              </motion.div>
            </section>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default ProjectDetails;