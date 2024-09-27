import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className=" grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1  gap-x-10">
        <div className="justify-start">
          <h1 className="text-white text-4xl">21bubbles</h1>
          {/* <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain"
        /> */}
          <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
            Build Next Generation Websites
          </p>
          <ul className="text-base leading-relaxed text-gray-200 mt-7">
            <li>
              <p className="text-white">Reach out to us via phone:</p>
            </li>
            <li className="font-bold">+91 9021823841</li>
            <li>
              <a href="mailto:anujsbhuyar@gmail.com">anujsbhuyar@gmail.com</a>
            </li>
            <li>
              <a className="text-gray-200" href="mailto:anujsbhuyar@gmail.com">
              </a>
            </li>
          </ul>
        </div>

        {/* <div className="lg:pl-8">
          <p className="text-sm font-semibold tracking-widest text-[#F2F2F2] uppercase">
            Lets talk
          </p>

          <form action="#" method="POST" className="mt-6 content-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="mt-6 content-center"
          >
            <div>
              <label htmlFor="email" className="sr-only">
              <label>Email</label>
              <input type="email" name="email" id="email" placeholder="Enter your email" className=" content-center  p-4 text-[#F2F2F2] placeholder-[#F2F2F2] transition-all duration-200 bg-neutral-800 border border-[#F2F2F2] rounded-md focus:outline-none focus:border-zinc-600 caret-[#F2F2F2]" />
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                className=" content-center  p-4 text-[#F2F2F2] placeholder-[#F2F2F2] transition-all duration-200 bg-neutral-800 border border-[#F2F2F2] rounded-md focus:outline-none focus:border-zinc-600 caret-[#F2F2F2]"
              />
            </div>

            <button
              type="submit"
              value="Send"
              className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold hover:shadow-md hover:   text-[#F2F2F2] transition-all duration-200 bg-neutral-800 rounded-md border-[#F2F2F2] hover:bg-[#F2F2F2] hover:text-neutral-800 hover:border-neutral-800 focus:bg-zinc-400  border-b "
            >
              Submit
            </button>
          </form>
        </div> */}
      </div>

      {/* <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45] z-50">
      <p className="font-poppins font-normal text-center text-[14px] leading-[27px] text-white">
        &copy; Copyright 2024, All Rights Reserved by 21bubbles
      </p>

      <div className="flex flex-row md:mt-0 mt-6 z-10">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
