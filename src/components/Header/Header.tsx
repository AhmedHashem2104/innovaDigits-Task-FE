import Avatar from "../../assets/avatar.svg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import Input from "../../ui/Input";

const Header: React.FC = () => {
  return (
    <div className="flex gap-3 justify-between items-center bg-white p-5 shadow-sm flex-wrap">
      <Input />
      <div className="flex items-center gap-5">
        <IoMdNotificationsOutline
          className="cursor-pointer hover:opacity-50"
          size={25}
        />

        <Link to="/settings">
          <img src={Avatar} className="w-10 h-10 rounded-full" alt="avatar" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
