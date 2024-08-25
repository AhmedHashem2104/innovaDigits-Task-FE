import report1 from "../../assets/report1.svg";
import report2 from "../../assets/report2.svg";
import report3 from "../../assets/report3.svg";
import report4 from "../../assets/report4.svg";
import reportPercentage1 from "../../assets/reportpercentage2.svg";
import reportPercentage2 from "../../assets/reportpercentage2.svg";
import reportPercentage3 from "../../assets/reportpercentage3.svg";
import reportPercentage4 from "../../assets/reportpercentage4.svg";
const Reports: React.FC = () => {
  const reports = [
    {
      title: "Energy",
      icon: report1,
      graph: reportPercentage1,
    },
    {
      title: "Range",
      icon: report2,
      graph: reportPercentage2,
    },
    {
      title: "Break fluid",
      icon: report3,
      graph: reportPercentage3,
    },
    {
      title: "Tire Wear",
      icon: report4,
      graph: reportPercentage4,
    },
  ];
  return reports.map((report, index) => (
    <div
      className="flex flex-col bg-white py-7 w-full max-w-96 px-14 justify-center items-center gap-5 rounded-2xl hover:bg-purple-500"
      key={index}
    >
      <img src={report.icon} alt={report.title} className="w-10" />
      <div className="font-medium text-xl">{report.title}</div>
      <img src={report.graph} alt={report.title} className="w-36" />
    </div>
  ));
};

export default Reports;
