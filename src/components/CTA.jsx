import styles from "../style";
import Button from "./Button";

const CTA = () => (
  // <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
  //   <div className="flex-1 flex flex-col">
  //     <h2 className={styles.heading2}>Let’s try our service now!</h2>
  //     <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
  //       Everything you need to accept card payments and grow your business
  //       anywhere on the planet.
  //     </p>
  //   </div>

  //   <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
  //     <Button />
  //   </div>
  // </section>
  <div
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col `}
  >
    <div className=" z-[50]">
      <h1 className="text-white text-4xl m-10 ">Contact Us at.</h1>
      <div className="bg-black-gradient-2 rounded-[20px] box-shadow p-10">
        <a
          className="text-white lg:text-7xl md:text-7xl sm:text-3xl z-[50] "
          href="mailto:team@21bubbles.com"
        >
          team
          <br />
          @21bubbles.com
        </a>
      </div>
    </div>
  </div>
);

export default CTA;
