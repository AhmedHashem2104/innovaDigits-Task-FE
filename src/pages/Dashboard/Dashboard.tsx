import Promotions from "../../components/Cards/Promotions";
import Discover from "../../components/Cards/Discover";
import Reports from "../../components/Reports/Reports";
import cardImage2 from "../../assets/cardImage2.svg";
import cardImage3 from "../../assets/cardImage3.svg";
import Recommended from "../../components/Cards/Recommended";
import Car1 from "../../assets/car1.svg";
import { useGetRecommendedQuery } from "../../redux/reducers/carsReducer";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import { useTranslation } from "react-i18next";

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const cards = [
    {
      title: t(`dashboard.promotion.title`),
      amount: 20,
      textOfAmount: t(`dashboard.promotion.textOfAmountOne`),
      image: cardImage2,
      description: t(`dashboard.promotion.descriptionOne`),
      bgColor: "#0F2837",
    },
    {
      title: t(`dashboard.promotion.title`),
      amount: 1500,
      textOfAmount: t(`dashboard.promotion.textOfAmountTwo`),
      image: cardImage3,
      description: t(`dashboard.promotion.descriptionTwo`),
      bgColor: "#6E1946",
    },
  ];

  const { data: cars, error, isLoading } = useGetRecommendedQuery();

  if (isLoading) return <Loader />;

  if (error) return <Error message="Something Went Wrong" />;

  return (
    <div className="mt-5">
      <div className="flex gap-5 flex-wrap">
        <Reports />
      </div>

      <div className="flex mt-10 gap-2 flex-wrap">
        <Discover />
        {cards.map((card, index) => (
          <Promotions
            key={index}
            title={card.title}
            amount={card.amount}
            textOfAmount={card.textOfAmount}
            image={card.image}
            description={card.description}
            bgColor={card.bgColor}
            textColor="white"
          />
        ))}
      </div>

      <div className="flex my-10 gap-10 flex-wrap">
        {cars &&
          cars.map((car, index) => (
            <Recommended
              key={index}
              title={car.title}
              percentageOfRecommended={car.percentageOfRecommended}
              vistis={car.vistis}
              image={Car1}
              speed={car.speed}
              bgColor={car.bgColor}
            />
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
