// next image
import { image } from "next/image";

// component
import ParticlesContainer from "../components/ParticlesContainer";
import Avatar from "../components/Avatar";
import ProjectsBtn from "../components/ProjectsBtn";

// Motion
import { motion } from "framer-motion";

// Variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="h-full w-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex gap-5 flex-col justify-center xl:pt-30 xl:text-left xl:pl-[120px] h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-5xl"
          >
            Hello there! <br /> I am {""}
            <span className="text-accent">AHMAD ALI</span>
          </motion.h1>
          {/* title */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-4"
          >
            I am a professional web developer with 3 years of experience. I have
            worked several IT companies during this time.
          </motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex w-fit"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1000px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 "></div>
        {/* particles */}

        <ParticlesContainer />

        {/* avatar img */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-[51%] h-[70%] max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[4%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
