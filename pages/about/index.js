import { useState } from "react";

// motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
// icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress } from "react-icons/fa";
// countup
import CountUp from "react-countup";

import { SiNextdotjs, SiFramer } from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key={1} />,
          <FaCss3 key={2} />,
          <FaJs key={3} />,
          <FaReact key={4} />,
          <SiNextdotjs key={5} />,
          <SiFramer key={6} />,
          <FaWordpress key={7} />,
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design ",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Web Developer  ",
        stage: "",
      },
      {
        title: "Project Manager  ",
        stage: " 2020 - 2022",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - ",
        stage: "2009",
      },
    ],
  },
];
// component
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        animate="shown"
        initial="shown"
        exit="hidden"
        className="hidden xl:flex absolute -left-[213px] h-[400px] bottom-0"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-8 w-[80%]">
        {/* text */}
        <div className="flex flex-1 flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            animate="show"
            initial="hidden"
            exit="hidden"
            className="text-[25px]"
          >
            Captivating <span className="text-accent">Stories</span> birth
            magnificient designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.6)}
            animate="show"
            initial="hidden"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 xl:mb-12 px-1 xl:px-0"
          >
            3 years ago, I began freelacing as a developer. Since then, i have
            dont remote wor for agencies, consulted for startups and collabrated
            on digital products for business and consumer use.
          </motion.p>
          {/* counter */}

          <motion.div
            variants={fadeIn("right", 0.6)}
            animate="show"
            initial="hidden"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-0"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute ater:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} />+
                </div>

                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>

              {/* client */}

              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute ater:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={250} duration={5} />+
                </div>

                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied Client
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute ater:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={650} duration={5} />+
                </div>

                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects
                </div>
              </div>

              {/* awaids */}
              <div className="relative flex-1 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} />+
                </div>

                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning Awards
                </div>
              </div>
              {/* dhscjdf */}
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          animate="show"
          initial="hidden"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 mt-5">
            {aboutData.map((item, keyIndex) => {
              return (
                <div
                  key={keyIndex}
                  className={`${
                    index === keyIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, keyIndex) => {
              return (
                <div
                  key={keyIndex}
                  className="flex flex-1 flex-col md:flex-row max-w-max gap-x-2 items-center text-white"
                >
                  {/* title */}
                  <div className="flex gap-1 items-center">
                    <div className="font-light mb-2 md:mb-0">{item.title}</div>

                    <div className="hidden md:flex"> - </div>
                    <div>{item.stage}</div>
                  </div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, keyIndex) => {
                      return (
                        <div className="text-2xl text-white" key={keyIndex}>
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
