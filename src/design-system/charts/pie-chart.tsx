"use client";

import {
  Cell,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export interface PieChartProps<T extends object> {
  data: T[];
  nameKey: keyof T & string;
  valueKey: keyof T & string;
  height?: number;
  colors?: string[];
}

const DEFAULT_COLORS = [
  "#7C3AED",
  "#2563EB",
  "#0891B2",
  "#059669",
  "#D97706",
  "#DC2626",
];

export function PieChart<T extends object>({
  data,
  nameKey,
  valueKey,
  height = 320,
  colors = DEFAULT_COLORS,
}: PieChartProps<T>) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsPieChart>
        <Tooltip />

        <Pie
          data={data}
          nameKey={nameKey}
          dataKey={valueKey}
          cx="50%"
          cy="50%"
          outerRadius="80%"
          label
        >
          {data.map((_, index) => (
            <Cell
              key={index}
              fill={colors[index % colors.length]}
            />
          ))}
        </Pie>
      </RechartsPieChart>
    </ResponsiveContainer>
  );
}
