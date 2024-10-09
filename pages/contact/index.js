import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Circles from "../../components/Circles";

import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    await emailjs.sendForm(
      "service_u6vmoal",
      "template_854z51s",
      form.current,
      {
        publicKey: "k4t-wZu2aN3fI9AYH",
      }
    );

    form.current.reset();
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-4 mt-8 text-center"
          >
            Let&apos;s <span className="text-accent">Connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 flex flex-col w-full gap-3 mx-auto"
          >
            {/* group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="name"
                name="username"
                className="input"
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input"
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              name="subject"
              className="input"
            />
            <textarea
              placeholder="message"
              name="message"
              className="textarea"
            ></textarea>
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-300">
                Let&apos;s Talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
