/* eslint-disable react/prop-types */
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#84b3cf", "#5685a1", "#285773", "#002844"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent }) => {
  let radius = outerRadius * 0.7;
  if (percent * 100 < 6) radius = outerRadius * 1.17;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  const labelFont = percent * 100 < 6 ? "#002844" : "white";
  const labelFontWeight = percent * 100 < 6 ? "700" : "600";

  return (
    <text
      x={x}
      y={y}
      fill={labelFont}
      textAnchor={"middle"}
      dominantBaseline="central"
      fontWeight={labelFontWeight}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function PChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="52%"
          isAnimationActive={true}
          animationBegin={0}
          animationDuration={800}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
