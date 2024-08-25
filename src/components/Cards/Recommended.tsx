import { FaArrowsSpin } from "react-icons/fa6";
import Arrows from "../../assets/arrows.svg";
import { IoFlashOutline } from "react-icons/io5";
import { RecommendedProps } from "../../interfaces/interfaces";

const Recommended: React.FC<RecommendedProps> = ({
  bgColor,
  image,
  percentageOfRecommended,
  speed,
  title,
  vistis,
}: RecommendedProps) => {
  return (
    <div
      className="p-5 w-full max-w-96 flex flex-col gap-3 rounded-lg cursor-pointer hover:opacity-50"
      style={{
        backgroundColor: bgColor,
      }}
    >
      <div className="flex gap-2 items-center">
        <FaArrowsSpin size={18} color="#72767C" />
        <div className="text-[#242731] font-semibold">
          {percentageOfRecommended}
        </div>
      </div>
      <img src={image} alt="car" />

      <h3 className="font-medium text-[#1F2128]">{title}</h3>

      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <img src={Arrows} alt="arrows" />
          <div className="text-[#72767C] font-medium">{vistis}</div>

          <IoFlashOutline size={18} color="#72767C" />
        </div>
        <div className="text-[#72767C] font-semibold">{speed}</div>
      </div>
    </div>
  );
};

export default Recommended;
