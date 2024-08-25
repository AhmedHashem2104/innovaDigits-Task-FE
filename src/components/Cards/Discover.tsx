import { useTranslation } from "react-i18next";
import cardImage1 from "../../assets/cardImage1.svg";
import Button from "../../ui/Button";

const Discover: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex md:w-1/2 w-full max-w-1/2 bg-[#FFE0BA] py-3 px-7 justify-between items-center rounded-md">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-medium">{t("dashboard.loan.title")}</h2>
        <p className="text-lg">{t("dashboard.loan.description")}</p>
        <Button
          color="white"
          bgColor="#0F2837"
          text={t(`dashboard.loan.button`)}
        />
      </div>
      <img src={cardImage1} className="max-w-80 min-w-16" alt="image1" />
    </div>
  );
};

export default Discover;
