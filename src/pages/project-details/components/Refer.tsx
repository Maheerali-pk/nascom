import { useState, useRef } from "react";
import { motion } from "framer-motion";

const Refer = ({ textAnimation }) => {
  const form = useRef();
  const [email, setEmail] = useState('');
  const followClickHandler = (e: any) => {
    e.preventDefault();
  };

  return (
    <section className="flex flex-col justify-center mt-12 md:mt-20 lg:mt-28">
      <motion.div
        className="flex flex-col gap-4 md:gap-6 lg:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        variants={{
          visible: textAnimation.animate,
          hidden: textAnimation.initial,
        }}
      >
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          Refer a Friend
        </h2>
        <div className="flex justify-center w-auto">
          <p className="text-gray-300 text-center text-semibold sm:text-base md:text-[18px]">
            Know someone who might like our platform? Send them an
            email with info about signing up
          </p>
        </div>
      </motion.div>
      <motion.div
        id="refer"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0.7 },
        }}
      >
        <form
          ref={form}
          className="relative flex items-stretch sm:mx-[10%] md:mx-[15%] lg:mx-[20%] 2xl:mx-[30%] mt-7 md:mt-11 bg-slate-200 bg-opacity-5 rounded-lg"
          onSubmit={followClickHandler}
        >
          <input
            type="email"
            name="user_name"
            value={email}
            className="w-full rounded px-4 py-5 md:py-6 focus:outline-none bg-transparent"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea name="message" value={`Hi, the user would like to refer their friend, ${email}, to FullFrame.`} hidden readOnly />
          <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 !py-2 md:!py-4 !px-3 md:!px-5">
            Refer Now
          </button>
        </form>
      </motion.div>
    </section>
  );
};
export default Refer;
