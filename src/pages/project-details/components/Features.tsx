import { motion } from "framer-motion";

import FeaturesCard from "./FeaturesCard";

function Features({ textAnimation, leftToRightInitial, rightToLeftInitial } : any) {
  const FEATURES_DATA = [
    {
      Name: 'Advanced Statistics',
      Icon: 'icon-advanced-statistics',
      Description: 'Track how your links are performing across the web with our advanced statistics dashboard',
    },
    {
      Name: 'Brand Recognition',
      Icon: 'icon-brand-recognition',
      Description: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content',
    },
    {
      Name: 'Fully Customizable',
      Icon: 'icon-fully-customizable',
      Description: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement',
    },
  ];

  return (
    <section className="flex flex-col gap-6 md:gap-8 lg:gap-10 justify-center mt-12 md:mt-20 lg:mt-28">
      <motion.div
        className="flex flex-col justify-center gap-3 md:gap-6 lg:gap-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: textAnimation.animate,
          hidden: textAnimation.initial,
        }}
      >
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          Features
        </h3>
        <p className="text-gray-300 text-center sm:text-base md:text-[18px] font-normal">
          Speed through your development workflow with advanced and comprehensive features
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-4 md:gap-8">
        {FEATURES_DATA.map((item, index) => (
          <FeaturesCard
            Name={item.Name}
            Icon={item.Icon}
            Description={item.Description}
            key={item.Name}
            index={index}
            leftToRightInitial={leftToRightInitial}
            rightToLeftInitial={rightToLeftInitial}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;
