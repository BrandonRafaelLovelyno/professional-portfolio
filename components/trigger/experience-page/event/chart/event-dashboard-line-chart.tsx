import { LineChartData } from "@/data/experience/work-exp-data";
import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

interface EventDashboardLineChartProps {
  lineColor: string;
  axisColor: string;
  gridColor: string;
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
  gridColor,
}) => {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <LineChart data={data} width={width} height={height}>
        <YAxis color={axisColor} />
        <XAxis dataKey={"xValue"} color={axisColor} />
        <CartesianGrid strokeDasharray="3 3" color={gridColor} />
        {dataKey.map((key, index) => (
          <Line
            key={index}
            type="monotone"
            dataKey={key}
            stroke={lineColor}
            activeDot={{ r: 8 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default EventDashboardLineChart;
