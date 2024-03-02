import { motion } from "framer-motion";


const FeaturesCard = ({
  Name, Icon, Description, leftToRightInitial, rightToLeftInitial, index,
}: any) => {
  const cardsAnimation = {
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.3 },
    },
  };

  return (
    <motion.div
      className="flex gap-4 p-4 lg:p-6 bg-[rgba(255,255,255,0.05)] h-full rounded-md"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: cardsAnimation.animate,
        hidden: index % 2 === 0 ? leftToRightInitial.initial : rightToLeftInitial.initial,
      }}
    >
      <Icon className="w-16 md:w-10" />
      <div className="flex flex-col gap-2 md:gap-3">
        <h4 className="text-base md:text-xl font-medium">{Name}</h4>
        <div className="font-normal text-[0.9rem]">
          {Description}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesCard;
