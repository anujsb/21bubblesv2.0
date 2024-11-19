import { motion } from "framer-motion";
import { StarsCanvas } from "../canvas";

const Hero = () => {
  return (
    <motion.div className="relative flex flex-col h-full w-full" id="about-me">
      {/* Video background for medium and larger screens */}
      {/* <div className="hidden md:block">
        <video
          src="/blackhole.webm"
          autoPlay
          muted
          loop
          className="rotate-180 absolute top-[-380px] h-full w-full left-0 object-cover"
        />
      </div> */}

      <StarsCanvas />

      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col justify-center items-center px-5 md:px-20 w-full z-[0] h-screen"
      >
        <div className="h-auto text-center">
          <motion.div
            // variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[670px] w-auto h-auto text-center"
          >
            <span>
              {/* Responsive Heading */}
              Take Your Business
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                from 0 to 1{" "}
              </span>
              in 15 Days
            </span>
          </motion.div>

          <motion.p className="text-sm md:text-lg text-white my-5 max-w-[630px] uppercase">
            Launch your MVP in record time, attract your first customer, and get
            investor-ready – all at a fixed cost with post-launch support.
          </motion.p>

          <div className="flex justify-center gap-4 items-center">
            <a
              href="https://cal.com/anuj-bhuyar-gj0xf3/21bubbles-contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-2 py-2 px-4 button-primary text-center text-white cursor-pointer rounded-md bg-gradient-to-r from-purple-500 to-cyan-500 capitalize"
            >
              quick 30 min call
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
