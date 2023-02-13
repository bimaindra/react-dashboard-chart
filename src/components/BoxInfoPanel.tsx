type BoxInfoPanelProps = {
  title: string;
  count: number;
  color?: string;
};

const BoxInfoPanel = ({
  title = "Default",
  count = 123,
  color,
}: BoxInfoPanelProps) => {
  const formatCount = new Intl.NumberFormat();
  return (
    <div
      className={`box-border-${color} rounded-md border border-r-[16px] border-slate-200 p-4 shadow-lg transition-shadow hover:border-r-slate-400 hover:shadow-md`}
    >
      <h2 className="mb-4 text-2xl font-bold md:text-3xl xl:text-4xl">
        {formatCount.format(count)}
      </h2>
      <p className="font-medium">{title}</p>
    </div>
  );
};

export default BoxInfoPanel;
