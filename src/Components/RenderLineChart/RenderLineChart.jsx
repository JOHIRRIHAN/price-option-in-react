import { LineChart, Line, XAxis, YAxis } from "recharts";

const RenderLineChart = () => {
    const subjectScores = [
        { studentName: "Alice", mathScore: 85, scienceScore: 78, englishScore: 92 },
        { studentName: "Bob", mathScore: 72, scienceScore: 80, englishScore: 75 },
        { studentName: "Charlie", mathScore: 91, scienceScore: 88, englishScore: 85 },
        { studentName: "David", mathScore: 68, scienceScore: 75, englishScore: 80 },
        { studentName: "Emma", mathScore: 78, scienceScore: 82, englishScore: 88 },
        { studentName: "Frank", mathScore: 88, scienceScore: 90, englishScore: 84 },
        { studentName: "Grace", mathScore: 95, scienceScore: 96, englishScore: 93 },
        { studentName: "Henry", mathScore: 63, scienceScore: 70, englishScore: 72 },
        { studentName: "Ivy", mathScore: 82, scienceScore: 85, englishScore: 87 },
        { studentName: "Jack", mathScore: 90, scienceScore: 88, englishScore: 91 }
      ];
      

  return (
    <div>
      <LineChart width={900} height={400} data={subjectScores}>
        <XAxis dataKey={'name'}></XAxis>
        <YAxis></YAxis>
        <Line  dataKey="mathScore" stroke="red"/>
        <Line  dataKey="scienceScore" stroke="green" />
        <Line  dataKey="englishScore" />
      </LineChart>
    </div>
  );
};

export default RenderLineChart;
