import { quotes } from "../assets";

const ProjectCard = ({ content, name, desc, img, link }) => (
  <div className="flex justify-between flex-col px-5 py-5 rounded-[20px]  max-w-[555px] md:m-1 sm:m-5 mr-0 my-5 feedback-card text-center">
    <div className="">
      <img src={img} alt={name} className=" rounded-md" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {desc}
        </p>
        <button
          onClick={() => window.open(link)}
          className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite"
        >
          {link}
        </button>
      </div>
    </div>
  </div>
);

export default ProjectCard;
