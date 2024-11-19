import { apple, info, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="about" className={`${layout.sectionReverse} z-[50] h-screen `}>
    <div className={layout.sectionImgReverse}>
      <img src={info} alt="info" className="w-[75%] h-[75%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Where ideas <br className="sm:block hidden" /> meet technology.
      </h2>
      <p className={`${styles.paragraph} max-w-[500px] mt-5 z-[5]`}>
        21bubbles: Your Premier Web Partner Unlocking your digital potential,
        21bubbles delivers top-tier web solutions. Specializing in startups, we
        craft bespoke websites, chatbots, SEO, and email automation. Elevate
        your business with us today.{" "}
      </p>

      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div> */}
    </div>
  </section>
);

export default Billing;
