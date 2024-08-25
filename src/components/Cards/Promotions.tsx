import { CardProps } from "../../interfaces/interfaces";

const Promotions: React.FC<CardProps> = ({
  title,
  image,
  amount,
  textOfAmount,
  description,
  bgColor,
  textColor,
}: CardProps) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="flex w-full max-w-96 py-3 px-5 justify-between items-center rounded-md"
    >
      <div className="flex flex-col gap-3">
        <h2 style={{ color: textColor }} className="text-2xl font-normal w-14">
          {title}
        </h2>
        <h5 className="text-4xl font-normal text-[#FF9619]">{amount}</h5>
        <h5 style={{ color: textColor }} className="text-2xl font-normal">
          {textOfAmount}
        </h5>
        <p className="text-sm text-[#FF9619]">{description}</p>
      </div>
      <img src={image} className="w-full" alt="image1" />
    </div>
  );
};

export default Promotions;
