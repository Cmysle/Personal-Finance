import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// const data = [
//   { name: "01/01/2024", Expense: 2927, Income: 1353 },
//   { name: "01/02/2024", Expense: 2866, Income: 2195 },
//   { name: "01/03/2024", Expense: 2997, Income: 322 },
//   { name: "01/04/2024", Expense: 3852, Income: 1712 },
//   { name: "01/05/2024", Expense: 1626, Income: 429 },
//   { name: "01/06/2024", Expense: 199, Income: 726 },
//   { name: "01/07/2024", Expense: 2798, Income: 4551 },
//   { name: "01/08/2024", Expense: 4177, Income: 136 },
//   { name: "01/09/2024", Expense: 572, Income: 4140 },
//   { name: "01/10/2024", Expense: 1137, Income: 500 },
//   { name: "01/11/2024", Expense: 3756, Income: 733 },
//   { name: "01/12/2024", Expense: 4064, Income: 4203 },
//   { name: "01/13/2024", Expense: 2522, Income: 2210 },
//   { name: "01/14/2024", Expense: 4225, Income: 1551 },
//   { name: "01/15/2024", Expense: 3711, Income: 4943 },
//   { name: "01/16/2024", Expense: 2435, Income: 455 },
//   { name: "01/17/2024", Expense: 1493, Income: 1387 },
//   { name: "01/18/2024", Expense: 2012, Income: 4280 },
//   { name: "01/19/2024", Expense: 1267, Income: 1046 },
//   { name: "01/20/2024", Expense: 2209, Income: 2606 },
//   { name: "01/21/2024", Expense: 526, Income: 2446 },
//   { name: "01/22/2024", Expense: 3189, Income: 1432 },
//   { name: "01/23/2024", Expense: 3440, Income: 839 },
//   { name: "01/24/2024", Expense: 4258, Income: 1587 },
//   { name: "01/25/2024", Expense: 0, Income: 0 },
//   { name: "01/26/2024", Expense: 0, Income: 0 },
//   { name: "01/27/2024", Expense: 0, Income: 0 },
//   { name: "01/28/2024", Expense: 0, Income: 0 },
//   { name: "01/29/2024", Expense: 0, Income: 0 },
//   { name: "01/30/2024", Expense: 0, Income: 0 },
//   { name: "01/31/2024", Expense: 0, Income: 0 },
// ];

export default function BChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid stroke="#002844" strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#002844" />
        <YAxis stroke="#002844" />
        <Tooltip stroke="#002844" />
        <Legend />
        <Bar dataKey="Income" fill="#285773" />
        <Bar dataKey="Expense" fill="#002844" />
      </BarChart>
    </ResponsiveContainer>
  );
}
