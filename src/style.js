const styles = {
  boxWidth: "xl:max-w-[1280px] w-full ",

  heading2: " font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full z-[50]",
  paragraph: " font-normal text-dimWhite text-[18px] leading-[30.8px] z-[50]",

  flexCenter: "flex justify-center items-center z-[50]",
  flexStart: "flex justify-center items-start z-[50]",

  paddingX: "sm:px-16 px-6 z-[50]",
  paddingY: "sm:py-16 py-6 z-[50]",
  padding: "sm:px-16 px-6 sm:py-12 py-4 z-[50]",

  marginX: "sm:mx-16 mx-6 z-[50]",
  marginY: "sm:my-16 my-6 z-[50]",
};

export const layout = {
  section: `flex md:flex-row flex-col z-[50] ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse z-[50] ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-1 mr-0 md:mt-0 mt-10 relative z-[50]`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative z-[50]`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col z-[50]`,
};

export default styles;
