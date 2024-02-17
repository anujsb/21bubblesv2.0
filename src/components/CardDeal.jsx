import { motion } from "framer-motion";

import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <div className="h-auto z-[50]">
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
    </div>
    <div className="grid grid-cols-2 gap-6 m-20">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className=" text-white col-span-2 text-center rounded-2xl h-80 z-[50] serv-card opacity-70"
      >
        <div className="p-2">
          <h1 className="font-bold text-start">Website Development</h1>
        </div>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className=" text-white text-center rounded-2xl h-80 z-[50] serv-card opacity-70 "
      >
        chat
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className=" text-white text-center rounded-2xl h-80 z-[50] serv-card opacity-70 "
      >
        AUTO
      </motion.div>
    </div>
  </div>
);

export default CardDeal;
