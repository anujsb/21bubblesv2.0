import { motion } from "framer-motion";

import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <div className="h-auto ">
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
        className="bg-black text-white text-center rounded-2xl h-60 opacity-50"
      >
        chat
      </motion.div>
      
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className="bg-black text-white text-center rounded-2xl h-60 opacity-50 "
      >
        AUTO
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className="bg-black text-white col-span-2 text-center rounded-2xl h-60 opacity-50"
      >
        WEB
      </motion.div>
    </div>
  </div>
);

export default CardDeal;
