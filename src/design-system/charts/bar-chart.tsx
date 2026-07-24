"use client";

import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export interface BarChartProps<T extends object> {
  data: T[];
  xKey: keyof T & string;
  yKey: keyof T & string;
  height?: number;
  showGrid?: boolean;
}

export function BarChart<T extends object>({
  data,
  xKey,
  yKey,
  height = 320,
  showGrid = true,
}: BarChartProps<T>) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsBarChart data={data}>
        {showGrid && <CartesianGrid strokeDasharray="3 3" />}

        <XAxis dataKey={String(xKey)} />

        <YAxis />

        <Tooltip />

        <Bar
          dataKey={String(yKey)}
          fill="currentColor"
          radius={[6, 6, 0, 0]}
        />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}
