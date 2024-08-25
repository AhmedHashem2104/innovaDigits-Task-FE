import { useState } from "react";
import { CarProps } from "../../interfaces/interfaces";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import Arrows from "../../assets/arrows-car.svg";

const Car: React.FC<CarProps> = ({
  title,
  image,
  type,
  drivingType,
  price,
  boughtNumber,
}: CarProps) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="flex flex-col w-full max-w-96 bg-white shadow-md p-5 rounded-lg cursor-pointer hover:opacity-70">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-medium">{title}</h3>
        <div onClick={() => setIsActive((prev) => !prev)}>
          {isActive ? (
            <FaHeart className="cursor-pointer" color="red" size={22} />
          ) : (
            <FaRegHeart className="cursor-pointer" size={22} />
          )}
        </div>
      </div>
      <h5 className="text-[#72767C] font-normal">{type}</h5>
      <img src={image} className="w-full" alt="image1" />
      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <IoPersonOutline size={18} color="#A162F7" />
          <div className="text-[#72767C] font-medium mr-3">{boughtNumber}</div>

          <img src={Arrows} alt="arrows-car" />
          <div className="text-[#72767C] font-normal">{drivingType}</div>
        </div>
        <div className="text-[#72767C] font-semibold">{price}</div>
      </div>
    </div>
  );
};

export default Car;
