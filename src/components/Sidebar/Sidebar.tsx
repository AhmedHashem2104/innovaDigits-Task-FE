import { Link, Outlet } from "react-router-dom";
import Logo from "../../assets/innovaLogo.svg";
import { RxDashboard } from "react-icons/rx";
import Header from "../Header/Header";
import { LiaCarSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";
import { useTranslation } from "react-i18next";
import { MdLanguage } from "react-icons/md";

const Sidebar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const routes = [
    {
      path: "/",
      name: t(`sidebar.dashboard`),
      icon: <RxDashboard size={22} />,
    },
    {
      path: "/cars",
      name: t(`sidebar.cars`),
      icon: <LiaCarSolid size={22} />,
    },
  ];

  const configs = [
    {
      path: "/settings",
      name: t(`sidebar.settings`),
      icon: <IoSettingsOutline size={22} />,
    },
    {
      name: t(`language`),
      icon: <MdLanguage size={20} />,
      onClick: () => {
        if (i18n.language === "en") i18n.changeLanguage("ar");
        else i18n.changeLanguage("en");
      },
    },
    {
      name: t(`sidebar.logout`),
      icon: <SlLogout size={20} />,
      onClick: () => {
        console.log(`Logout Successfully`);
      },
    },
  ];

  return (
    <div className="flex" dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      <div className="flex flex-col h-screen sm:min-w-48 bg-white p-2 sm:p-5 shadow-md">
        <Link
          to="/"
          className="flex justify-center sm:justify-start items-center gap-3 mb-10"
        >
          <img src={Logo} alt="logo" className="w-8 h-8" />
          <h3 className="text-xl font-medium hidden sm:block">Motiv.</h3>
        </Link>

        <div className="flex flex-col justify-between h-full">
          <div className="gap-3">
            {routes.map((route, index) => (
              <Link
                to={route.path}
                key={index}
                className={`flex items-center gap-2 hover:bg-slate-200 p-3 rounded-md`}
              >
                {route.icon}
                <h3 className="text-base font-normal hidden sm:block w-full">
                  {route.name}
                </h3>
              </Link>
            ))}
          </div>
          <div className="gap-3">
            {configs.map((route, index) => (
              <Link
                to={route.path || "#"}
                key={index}
                className="flex items-center gap-2 hover:bg-slate-200 p-3 rounded-md"
                onClick={route.onClick}
              >
                {route.icon}
                <h3 className="text-base font-normal hidden sm:block w-full">
                  {route.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full">
        <Header />
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
