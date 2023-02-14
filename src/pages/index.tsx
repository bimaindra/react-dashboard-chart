import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import BoxInfoPanel from "@/components/BoxInfoPanel";
import ChartStd from "@/components/Chart";

export default function Home() {
  const [datas, setDatas] = useState<any[]>([]);
  const [negativeDatas, setNegativeDatas] = useState<any[]>([]);
  const [positiveDatas, setPositiveDatas] = useState<any[]>([]);
  const [irrelevantDatas, setIrrelevantDatas] = useState<any[]>([]);
  const [neutralDatas, setNeutralDatas] = useState<any[]>([]);
  const [unknownDatas, setUnknownDatas] = useState<any[]>([]);
  const [chartSentimentData, setChartSentimentData] = useState<{
    [key: string]: any;
  }>({
    positive: {
      category: [],
      series: [],
    },
    negative: {
      category: [],
      series: [],
    },
    irrelevant: {
      category: [],
      series: [],
    },
    neutral: {
      category: [],
      series: [],
    },
  });

  const SOURCE_DATA = [
    "Borderlands",
    "CallOfDutyBlackopsColdWar",
    "Xbox(Xseries)",
    "Amazon",
    "Overwatch",
  ];

  //const SENTIMENT_DATA = ["Positive", "Negative", "Irrelevant", "Neutral"];

  const getData = async (url: string) => {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  useEffect(() => {
    getData("https://yousei-kun.github.io/test-json/test.json");
  }, []);

  useEffect(() => {
    handleSentimentData();
  }, [datas]);

  useEffect(() => {
    handleDataChart();
  }, [positiveDatas]);

  const handleSentimentData = () => {
    const positiveArr: any[] = [];
    const negativeArr: any[] = [];
    const irrelevantArr: any[] = [];
    const neutralArr: any[] = [];
    const unknownArr: any[] = [];

    if (datas) {
      datas.filter((data) => {
        if (data.sentiment === "Positive") {
          positiveArr.push(data);
        }

        if (data.sentiment === "Negative") {
          negativeArr.push(data);
        }

        if (data.sentiment === "Irrelevant") {
          irrelevantArr.push(data);
        }

        if (data.sentiment === "Neutral") {
          neutralArr.push(data);
        }
      });
    }

    setPositiveDatas(positiveArr);
    setNegativeDatas(negativeArr);
    setIrrelevantDatas(irrelevantArr);
    setNeutralDatas(neutralArr);
    setUnknownDatas(unknownArr);
  };

  const handleDataChart = () => {
    if (positiveDatas) {
      const borderland = positiveDatas.filter(
        (data) => data.source === SOURCE_DATA[0]
      ).length;
      const cod = positiveDatas.filter(
        (data) => data.source === SOURCE_DATA[1]
      ).length;
      const xbox = positiveDatas.filter(
        (data) => data.source === SOURCE_DATA[2]
      ).length;
      const amazon = positiveDatas.filter(
        (data) => data.source === SOURCE_DATA[3]
      ).length;
      const overwath = positiveDatas.filter(
        (data) => data.source === SOURCE_DATA[4]
      ).length;

      setChartSentimentData((prev) => ({
        ...prev,
        positive: {
          category: ["Positive"],
          series: [
            {
              name: "Borderlands",
              data: [borderland],
            },
            {
              name: "CallOfDutyBlackopsColdWar",
              data: [cod],
            },
            {
              name: "Xbox(Xseries)",
              data: [xbox],
            },
            {
              name: "Amazon",
              data: [amazon],
            },
            {
              name: "Overwatch",
              data: [overwath],
            },
          ],
        },
      }));
    }

    if (negativeDatas) {
      const borderland = negativeDatas.filter(
        (data) => data.source === SOURCE_DATA[0]
      ).length;
      const cod = negativeDatas.filter(
        (data) => data.source === SOURCE_DATA[1]
      ).length;
      const xbox = negativeDatas.filter(
        (data) => data.source === SOURCE_DATA[2]
      ).length;
      const amazon = negativeDatas.filter(
        (data) => data.source === SOURCE_DATA[3]
      ).length;
      const overwath = negativeDatas.filter(
        (data) => data.source === SOURCE_DATA[4]
      ).length;

      setChartSentimentData((prev) => ({
        ...prev,
        negative: {
          category: ["Positive"],
          series: [
            {
              name: "Borderlands",
              data: [borderland],
            },
            {
              name: "CallOfDutyBlackopsColdWar",
              data: [cod],
            },
            {
              name: "Xbox(Xseries)",
              data: [xbox],
            },
            {
              name: "Amazon",
              data: [amazon],
            },
            {
              name: "Overwatch",
              data: [overwath],
            },
          ],
        },
      }));
    }

    if (irrelevantDatas) {
      const borderland = irrelevantDatas.filter(
        (data) => data.source === SOURCE_DATA[0]
      ).length;
      const cod = irrelevantDatas.filter(
        (data) => data.source === SOURCE_DATA[1]
      ).length;
      const xbox = irrelevantDatas.filter(
        (data) => data.source === SOURCE_DATA[2]
      ).length;
      const amazon = irrelevantDatas.filter(
        (data) => data.source === SOURCE_DATA[3]
      ).length;
      const overwath = irrelevantDatas.filter(
        (data) => data.source === SOURCE_DATA[4]
      ).length;

      setChartSentimentData((prev) => ({
        ...prev,
        irrelevant: {
          category: ["Irrelevant"],
          series: [
            {
              name: "Borderlands",
              data: [borderland],
            },
            {
              name: "CallOfDutyBlackopsColdWar",
              data: [cod],
            },
            {
              name: "Xbox(Xseries)",
              data: [xbox],
            },
            {
              name: "Amazon",
              data: [amazon],
            },
            {
              name: "Overwatch",
              data: [overwath],
            },
          ],
        },
      }));
    }

    if (neutralDatas) {
      const borderland = neutralDatas.filter(
        (data) => data.source === SOURCE_DATA[0]
      ).length;
      const cod = neutralDatas.filter(
        (data) => data.source === SOURCE_DATA[1]
      ).length;
      const xbox = neutralDatas.filter(
        (data) => data.source === SOURCE_DATA[2]
      ).length;
      const amazon = neutralDatas.filter(
        (data) => data.source === SOURCE_DATA[3]
      ).length;
      const overwath = neutralDatas.filter(
        (data) => data.source === SOURCE_DATA[4]
      ).length;

      setChartSentimentData((prev) => ({
        ...prev,
        neutral: {
          category: ["Irrelevant"],
          series: [
            {
              name: "Borderlands",
              data: [borderland],
            },
            {
              name: "CallOfDutyBlackopsColdWar",
              data: [cod],
            },
            {
              name: "Xbox(Xseries)",
              data: [xbox],
            },
            {
              name: "Amazon",
              data: [amazon],
            },
            {
              name: "Overwatch",
              data: [overwath],
            },
          ],
        },
      }));
    }
  };

  return (
    <>
      <Layout>
        <div className="container">
          <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <BoxInfoPanel
              title="Total Data"
              count={datas.length}
              color="blue"
            />
            <BoxInfoPanel
              title="Positive Sentiment"
              count={
                datas.filter((data) => data.sentiment === "Positive").length
              }
              color="green"
            />
            <BoxInfoPanel
              title="Negative Sentiment"
              count={
                datas.filter((data) => data.sentiment === "Negative").length
              }
              color="red"
            />
            <BoxInfoPanel
              title="Irrelevant Sentiment"
              count={
                datas.filter((data) => data.sentiment === "Irrelevant").length
              }
              color="yellow"
            />
            <BoxInfoPanel
              title="Neutral Sentiment"
              count={
                datas.filter((data) => data.sentiment === "Neutral").length
              }
            />
            {unknownDatas.length !== 0 && (
              <BoxInfoPanel
                title="Unknown Sentiment"
                count={unknownDatas.length}
              />
            )}
          </div>
          <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <ChartStd
              title="Positive Sentiment Chart"
              category={chartSentimentData.positive.category}
              series={chartSentimentData.positive.series}
              type="bar"
            />
            <ChartStd
              title="Negative Sentiment Chart"
              category={chartSentimentData.negative.category}
              series={chartSentimentData.negative.series}
              type="bar"
            />
            <ChartStd
              title="Irrelevant Sentiment Chart"
              category={chartSentimentData.irrelevant.category}
              series={chartSentimentData.irrelevant.series}
              type="bar"
            />
            <ChartStd
              title="Neutral Sentiment Chart"
              category={chartSentimentData.neutral.category}
              series={chartSentimentData.neutral.series}
              type="bar"
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
