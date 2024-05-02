import { ExperienceAndEventContext } from "@/components/provider/experience-and-event-provider";
import { LineChartData } from "@/data/experience/work-exp/work-exp-data";
import React, { use, useContext, useEffect, useState } from "react";

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
  const { isSelectingExperience } = useContext(ExperienceAndEventContext);
  const [isViewChart, setIsViewChart] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isSelectingExperience) return;

    if (isViewChart) {
      setTimeout(() => {
        setIsViewChart(false);
      }, 4000);
    } else {
      setTimeout(() => {
        setIsViewChart(true);
      }, 300);
    }
  }, [isSelectingExperience, isViewChart]);

  return (
    <div
      className="w-full h-full"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
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
            axisLine={true}
          />
          <XAxis
            dataKey={"xValue"}
            tick={{ fontSize: 10, stroke: axisColor }}
          />
          {/* <CartesianGrid strokeDasharray="3 3" color={gridColor} /> */}
          <Tooltip content={<CustomTooltip />} />
          {dataKey.map((key, index) => (
            <Bar
              key={index}
              dataKey={key}
              fill={barColor}
              animationBegin={0.5}
              hide={!isViewChart && !isHovered}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        className={`text-black mt-16 p-2 bg-opacity-100 rounded-lg shadow-md text-xs bg-[${payload[0].color}] font-bold`}
      >
        <p>{`${label}`}</p>
        <p>{`Value: ${payload[0].value}`}</p>
      </div>
    );
  }
};

export default EventDashboardBarChart;
