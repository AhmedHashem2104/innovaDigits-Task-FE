import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setSearchText } from "../redux/reducers/searchSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Input: React.FC = () => {
  const { t } = useTranslation();
  const [query, setQuery] = useState<string>("");
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (location.pathname !== "/cars") navigate("/cars");
    setQuery(event.target.value);
    dispatch(setSearchText(event.target.value));
  };
  return (
    <div className="flex bg-input p-3 rounded-md items-center gap-2 w-96">
      <IoSearchOutline size={25} color="#7C7C8D" />
      <input
        type="search"
        onChange={handleChange}
        value={query}
        className="outline-none bg-input w-full placeholder:text-input placeholder:font-medium font-medium"
        placeholder={t(`inputPlaceholder`)}
      />
    </div>
  );
};

export default Input;
