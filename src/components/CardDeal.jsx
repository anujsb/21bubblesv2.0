import { motion } from "framer-motion";
import { apple, web, google } from "../assets";

import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <div id="service" className="h-auto z-[50] ">
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Services we provide:
        {/* <br className="sm:block hidden" /> in few easy steps. */}
      </h2>
    </div>
    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1  gap-6 my-10">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className=" text-white text-center rounded-2xl h-90 z-[50] serv-card opacity-80 hover:opacity-100 "
      >
        <div className="p-2">
          <h1 className="text-4xl font-bold text-start">AI-Chatbots</h1>
          <p className="text-start p-2">
            chatbots that deliver human-like interactions, rich contextual
            understanding, and seamless user experiences.
          </p>

          <div className="m-10 grid md:grid-cols-1 lg:grid-cols-1 sm:grid-cols-3 items-end ">
            <button className=" border-gray-50 m-0.5 p-2 rounded-lg border-2">
              GPT Development
            </button>
            <button className=" border-gray-50 m-0.5 p-2 rounded-lg border-2">
              Secure Solutions
            </button>
            <button className=" border-gray-50 m-0.5 p-2 rounded-lg border-2">
              Knowledge Response
            </button>
            <button className=" border-gray-50 m-0.5 p-2 rounded-lg border-2">
              Model Tuning
            </button>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className=" text-white text-center rounded-2xl h-90 z-[50] serv-card opacity-80 hover:opacity-100"
      >
        <div className="p-2">
          <h1 className="text-4xl font-bold text-start">3D-Websites</h1>
          <p className="text-start p-2">
            Websites reflecting your brand and values, offering
            interactive 3D experiences and captivating user interfaces to engage
            your clients.
          </p>

          <div className="m-10 grid grid-cols-1 items-end ">
            <button className=" border-gray-50 m-0.5 p-2 rounded-lg border-2">
              3D Websites
            </button>
            <button className=" border-gray-50 m-0.5 p-2 rounded-lg border-2">
              Web design
            </button>
            <button className=" border-gray-50 m-0.5 p-2 rounded-lg border-2">
              Website Development
            </button>
            <button className=" border-gray-50 m-0.5 p-2 rounded-lg border-2">
              Maintenance
            </button>
            <button className=" border-gray-50 m-0.5 p-2 rounded-lg border-2">
              SEO
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className=" text-white text-center rounded-2xl h-90 z-[50] serv-card opacity-80 hover:opacity-100 "
      >
        <div className="p-2">
          <h1 className="text-4xl font-bold text-start">Automations</h1>
          <p className="text-start p-2">
            harness the power of Autonomous Agents to revolutionize your
            workflow processes.
          </p>

          <div className="m-10 grid grid-cols-1 items-end ">
            <button className=" border-gray-50 m-0.5 p-2 rounded-lg border-2">
              News Letters
            </button>
            <button className=" border-gray-50 m-0.5 p-2 rounded-lg border-2">
              Email Automaion
            </button>
            {/* <button className=" border-gray-50 m-0.5 p-2 rounded-lg border-2">
              Knowledge Response
            </button>
            <button className=" border-gray-50 m-0.5 p-2 rounded-lg border-2">
              Model Tuning
            </button> */}
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default CardDeal;
