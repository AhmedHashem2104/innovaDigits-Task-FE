import Car1 from "../../assets/car1.svg";
import { TiArrowSortedDown } from "react-icons/ti";
import { RxDashboard } from "react-icons/rx";
import { useGetCarsQuery } from "../../redux/reducers/carsReducer";
import Button from "../../ui/Button";
import { VscSettings } from "react-icons/vsc";
import Car from "../../components/Cards/Car";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useTranslation } from "react-i18next";

const Cars: React.FC = () => {
  const { t } = useTranslation();
  const { data: cars = [], error, isLoading } = useGetCarsQuery();
  const searchText = useSelector((state: RootState) => state.search.text);
  const filteredCars = cars.filter((car) =>
    car.title.toLowerCase().includes(searchText.toLowerCase())
  );

  if (isLoading) return <Loader />;

  if (error) return <Error message={t(`errorPage`)} />;

  return (
    <div className="mt-5">
      <h2 className="text-3xl font-semibold">{t(`cars.title`)}</h2>
      <div className="flex mt-10 justify-between items-center">
        <div className="flex gap-5 items-center">
          <Button
            text={t(`cars.new`)}
            bgColor="white"
            color="#5F6165"
            style={{
              paddingLeft: 25,
              paddingRight: 25,
              paddingTop: 7,
              paddingBottom: 7,
              borderRadius: 50,
              color: `#5F6165`,
              fontSize: 16,
              fontWeight: 500,
            }}
            icon={<TiArrowSortedDown size={20} color="#5F6165" />}
          />

          <Button
            text={t(`cars.carType`)}
            bgColor="white"
            color="#5F6165"
            style={{
              paddingLeft: 25,
              paddingRight: 25,
              paddingTop: 7,
              paddingBottom: 7,
              borderRadius: 50,
              color: `#5F6165`,
              fontSize: 16,
              fontWeight: 500,
            }}
            icon={<TiArrowSortedDown size={20} color="#5F6165" />}
          />
        </div>
        <div className="flex gap-3 items-center sm:pr-3">
          <div className="flex w-10 h-10 rounded-full bg-white justify-center items-center cursor-pointer hover:bg-[#A162F7]">
            <RxDashboard size={20} />
          </div>

          <div className="flex w-10 h-10 rounded-full bg-white justify-center items-center cursor-pointer hover:bg-[#A162F7]">
            <VscSettings size={25} />
          </div>
        </div>
      </div>
      <div className="flex my-10 gap-10 flex-wrap">
        {filteredCars.length > 0 ? (
          filteredCars.map((car, index) => (
            <Car
              key={index}
              title={car.title}
              boughtNumber={car.boughtNumber}
              drivingType={car.drivingType}
              image={Car1}
              price={car.price}
              type={car.type}
            />
          ))
        ) : (
          <Error message={t(`empty`)} />
        )}
      </div>
    </div>
  );
};

export default Cars;

// [
//   {
//     drivingType: `Manual`,
//     image: Car1,
//     title: `Mini Cooper 01`,
//     boughtNumber: 4,
//     price: `$400/d`,
//     type: "Coupe",
//   },
//   {
//     drivingType: `Automatic`,
//     image: Car1,
//     title: `Mini Cooper 02`,
//     boughtNumber: 4,
//     price: `$400/d`,
//     type: "Coupe",
//   },
//   {
//     drivingType: `Automatic`,
//     image: Car1,
//     title: `Mini Cooper 03`,
//     boughtNumber: 4,
//     price: `$400/d`,
//     type: "Coupe",
//   },
//   {
//     drivingType: `Automatic`,
//     image: Car1,
//     title: `Mini Cooper 04`,
//     boughtNumber: 4,
//     price: `$400/d`,
//     type: "Coupe",
//   },
//   {
//     drivingType: `Manual`,
//     image: Car1,
//     title: `Mini Cooper 05`,
//     boughtNumber: 4,
//     price: `$400/d`,
//     type: "Coupe",
//   },
//   {
//     drivingType: `Manual`,
//     image: Car1,
//     title: `Mini Cooper 06`,
//     boughtNumber: 4,
//     price: `$400/d`,
//     type: "Coupe",
//   },
//   {
//     drivingType: `Manual`,
//     image: Car1,
//     title: `Mini Cooper 07`,
//     boughtNumber: 4,
//     price: `$400/d`,
//     type: "Coupe",
//   },
//   {
//     drivingType: `Manual`,
//     image: Car1,
//     title: `Mini Cooper 08`,
//     boughtNumber: 4,
//     price: `$400/d`,
//     type: "Coupe",
//   },
//   {
//     drivingType: `Manual`,
//     image: Car1,
//     title: `Mini Cooper 09`,
//     boughtNumber: 4,
//     price: `$400/d`,
//     type: "Coupe",
//   },
//   {
//     drivingType: `Manual`,
//     image: Car1,
//     title: `Mini Cooper 10`,
//     boughtNumber: 4,
//     price: `$400/d`,
//     type: "Coupe",
//   },
// ];
