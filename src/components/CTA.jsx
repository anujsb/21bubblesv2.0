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
    id="contactus"
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col `}
  >
    <div className=" z-[50]">
      <h1 className="text-white text-4xl m-10 ">Contact Us at.</h1>
      <div className="bg-black-gradient-2 rounded-[20px] box-shadow p-10">
        <a
          className="text-white lg:text-7xl md:text-7xl sm:text-3xl z-[50] "
          href="mailto:21bubbles.web@gmail.com"
        >
          21bubbles.web@gmail.com
        </a>
      </div>
      <ul className="text-base leading-relaxed text-gray-200 mt-7">
        <li>
          <p className="text-white">Reach out to us via phone:</p>
        </li>
        <li className="font-bold">+91 9021823841</li>
        <li>
          <a href="mailto:anujsbhuyar@gmail.com">anujsbhuyar@gmail.com</a>
        </li>
        <li>
          <a className="text-gray-200" href="mailto:anujsbhuyar@gmail.com"></a>
        </li>
      </ul>
    </div>
  </div>
);

export default CTA;
