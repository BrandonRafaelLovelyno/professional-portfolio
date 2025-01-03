"use client";

import { ExperienceContext } from "@/components/provider/experience-provider";
import { LineChartData } from "@/data/work-data";
import React, { useContext, useEffect, useState } from "react";
import {
  ResponsiveContainer,
  LineChart as Chart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

interface LineChartProps {
  lineColor: string;
  axisColor: string;
  dataKey: string[];
  data: LineChartData[];
  width: number;
  height: number;
}

const LineChart: React.FC<LineChartProps> = ({
  data,
  dataKey,
  lineColor,
  width,
  height,
  axisColor,
}) => {
  const { isSelectingExperience } = useContext(ExperienceContext);
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ResponsiveContainer
        width={"100%"}
        height={"100%"}
        className={"-translate-x-[10%]"}
      >
        <Chart data={data} width={width} height={height}>
          <YAxis
            axisLine={true}
            tick={{
              fontSize: 10,
              fontStyle: "thin",
              stroke: axisColor,
              opacity: 0.8,
            }}
          />
          <XAxis
            dataKey={"xValue"}
            tick={{ fontSize: 10, stroke: axisColor }}
          />
          {/* <CartesianGrid strokeDasharray="3 3" color={gridColor} /> */}
          <Tooltip content={<CustomTooltip />} />
          {dataKey.map((key, index) => (
            <Line
              animationBegin={0.5 * index}
              key={index}
              type="monotone"
              dataKey={key}
              stroke={lineColor}
              dot={true}
              strokeWidth={1}
              hide={!isHovered && !isViewChart}
            />
          ))}
        </Chart>
      </ResponsiveContainer>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    console.log(payload);
    return (
      <div
        className={`text-black mt-10 p-2 bg-opacity-100 rounded-lg shadow-md text-xs bg-[${payload[0].color}] font-bold`}
      >
        <p>{`${label}`}</p>
        <p>{`Value: ${payload[0].value}`}</p>
      </div>
    );
  }
};

export default LineChart;
