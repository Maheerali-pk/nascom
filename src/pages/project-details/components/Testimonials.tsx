import { motion } from "framer-motion";

function Testimonials({ textAnimation, leftToRightInitial, rightToLeftInitial }) {
  return (
    <section className="mt-12 md:mt-20 lg:mt-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: textAnimation.animate,
          hidden: leftToRightInitial.initial,
        }}
      >
        <p className="text-primary whitespace-nowrap text-sm font-semibold">
          CLIENTS
        </p>
        <div className="flex justify-between mt-4">
          <h3
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Testimonials
          </h3>
          <motion.div
            className="flex items-center gap-6 md:gap-8 mr-4 sm:mr-6 md:mr-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: textAnimation.animate,
              hidden: rightToLeftInitial.initial,
            }}
          >
            <i className="fas fa-chevron-left cursor-pointer p-[0.3rem]
                          hover:text-primary"
            />
            <i className="fas fa-chevron-right cursor-pointer p-[0.3rem]
                          hover:text-primary"
            />
          </motion.div>
        </div>
      </motion.div>
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center
                lg:items-stretch gap-4 w-full p-4 sm:p-8 md:p-14 lg:p-20 mt-8 bg-slate-200
                bg-opacity-5 rounded-md"
      >
        <motion.div
          className="flex flex-col lg:w-1/2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.5 },
          }}
        >
          <p>
            “Lorem ipsum dolor sit amet consectetur. Id turpis mi lobortis orci.
            Ornare ornare facilisis dui volutpat non. Id tortor odio turpis id. Donec
            convallis semper est nunc eleifend et aliquam. Eu vulputate tellus at quisque
            eget in elementum malesuada. Consequat scelerisque.”

          </p>
          <span>
            Charlie M. ( CEO )
          </span>
        </motion.div>
        <span className="hidden lg:block border-gray-800 border-l-2" />
        <motion.div
          className="flex items-center gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.5 },
          }}
        >
          <img src={"/images/profile.jpg"} className="h-20 w-20 rounded-full" alt="Reviewer Profile" />
          <div className="flex flex-col gap-1 justify-center">
            <p className="whitespace-nowrap text-base font-semibold">Company</p>
            <p className="whitespace-nowrap text-sm font-light">Production</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
