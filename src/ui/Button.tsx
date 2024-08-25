import { ButtonProps } from "../interfaces/interfaces";

const Button: React.FC<ButtonProps> = ({
  color,
  text,
  icon,
  bgColor,
  style,
}: ButtonProps) => {
  return (
    <div
      style={{ backgroundColor: bgColor, color, ...style }}
      className="w-fit cursor-pointer p-3 rounded-md hover:opacity-85 flex items-center gap-2"
    >
      {text}
      {icon}
    </div>
  );
};

export default Button;
