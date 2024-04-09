import { LineChartData } from "@/data/experience/work-exp-data";
import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

interface EventDashboardLineChartProps {
  lineColor: string;
  axisColor: string;
  dataKey: string[];
  data: LineChartData[];
  width: number;
  height: number;
}

const EventDashboardLineChart: React.FC<EventDashboardLineChartProps> = ({
  data,
  dataKey,
  lineColor,
  width,
  height,
  axisColor,
}) => {
  return (
    <ResponsiveContainer
      width={"100%"}
      height={"100%"}
      className={"-translate-x-[10%]"}
    >
      <LineChart data={data} width={width} height={height}>
        <YAxis
          tick={{
            fontSize: 10,
            fontStyle: "thin",
            stroke: axisColor,
            opacity: 0.8,
          }}
        />
        <XAxis dataKey={"xValue"} tick={{ fontSize: 10, stroke: axisColor }} />
        {/* <CartesianGrid strokeDasharray="3 3" color={gridColor} /> */}
        <Tooltip content={<CustomTooltip />} />
        {dataKey.map((key, index) => (
          <Line
            key={index}
            type="monotone"
            dataKey={key}
            stroke={lineColor}
            dot={true}
            strokeWidth={1}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        className={`bg-black mt-10 p-2 bg-opacity-100 rounded-lg shadow-md text-xs text-[${payload[0].stroke}] font-bold`}
      >
        <p>{`${label}`}</p>
        <p>{`Value: ${payload[0].value}`}</p>
      </div>
    );
  }
};

export default EventDashboardLineChart;
