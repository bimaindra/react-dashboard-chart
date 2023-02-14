import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type ChartStdProps = {
  title: string;
  category: any[];
  series: any[];
  type?: "bar" | "line";
};

const ChartStd = ({ title, category, series, type = "bar" }: ChartStdProps) => {
  const chart = {
    options: {
      chart: {
        id: title,
      },
      xaxis: {
        categories: category,
      },
    },
    series: series,
    title: {
      text: title,
    },
    noData: {
      text: "Loading...",
    },
  };

  return (
    <div className="py-4 md:py-6">
      <h2 className="mb-4 text-2xl font-bold xl:text-4xl">{title}</h2>
      <Chart
        options={chart.options}
        series={chart.series}
        type={type}
        width={`100%`}
        height={`auto`}
      />
    </div>
  );
};

export default ChartStd;
