import { motion } from "framer-motion";
import { StarsCanvas } from "./canvas";

const Hero = () => {
  return (
    <motion.div className="relative flex flex-col h-full w-full" id="about-me">
      <div>
        <video
          src="/blackhole.webm"
          autoPlay
          muted
          loop
          className="rotate-180 absolute top-[-340px]  h-full w-full left-0  object-cover "
        />
      </div>
      <StarsCanvas />
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[0] h-screen"
      >
        <div className="h-full mt-10 text-center">
          <motion.div
            // variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto text-center"
          >
            <span>
              Providing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                the best{" "}
              </span>
              project exprience
            </span>
          </motion.div>

          <motion.p
            // variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5 max-w-[600px]"
          >
            I&apos;m a Full Stack Software Engineer with experience in Website,
            Mobile, and Software development. Check out my projects and skills.
          </motion.p>
          <motion.a
            // variants={slideInFromLeft(1)}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            Learn More!
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
