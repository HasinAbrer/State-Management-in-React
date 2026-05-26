import { Line, LineChart as LChart, XAxis, YAxis } from 'recharts';

const LineChart = () => {
  const studentData = [
    { id: 1, name: "Alice", marks: 78 },
    { id: 2, name: "Bob", marks: 85 },
    { id: 3, name: "Charlie", marks: 92 },
    { id: 4, name: "David", marks: 65 },
    { id: 5, name: "Eva", marks: 88 },
    { id: 6, name: "Frank", marks: 74 },
    { id: 7, name: "Grace", marks: 95 },
    { id: 8, name: "Henry", marks: 81 },
    { id: 9, name: "Ivy", marks: 89 },
    { id: 10, name: "Jack", marks: 90 },
  ];

  return (
<div className="flex justify-center">
<LChart width={800} height={500} data={studentData}>
    <XAxis dataKey={'name'}></XAxis>
    <YAxis></YAxis>
        <Line dataKey={'marks'} stroke='red'></Line>
      </LChart>
  </div>)
};

export default LineChart;
