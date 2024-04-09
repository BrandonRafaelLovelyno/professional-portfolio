import { LineChartData } from "@/data/experience/work-exp-data";
import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface EventDashboardBarChartProps {
  barColor: string;
  axisColor: string;
  dataKey: string[];
  data: LineChartData[];
  width: number;
  height: number;
}

const EventDashboardBarChart: React.FC<EventDashboardBarChartProps> = ({
  axisColor,
  data,
  dataKey,
  height,
  barColor,
  width,
}) => {
  return (
    <ResponsiveContainer
      width={"100%"}
      height={"100%"}
      className={"-translate-x-[10%]"}
    >
      <BarChart data={data} width={width} height={height}>
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
          <Bar key={index} dataKey={key} fill={barColor} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        className={`bg-black mt-16 p-2 bg-opacity-100 rounded-lg shadow-md text-xs text-[${payload[0].stroke}] font-bold`}
      >
        <p>{`${label}`}</p>
        <p>{`Value: ${payload[0].value}`}</p>
      </div>
    );
  }
};

export default EventDashboardBarChart;
