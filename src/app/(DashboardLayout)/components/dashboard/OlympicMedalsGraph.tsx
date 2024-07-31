import { useTheme } from '@mui/material/styles';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const OlympicMedalsGraph = () => {
  const theme = useTheme();

  const optionslinechart = {
    chart: {
      height: 350,
      type: 'line',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#adb0bb',
      zoom: {
        enabled: false
      },
    },
    xaxis: {
      categories: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    },
    yaxis: {
      title: {
        text: 'Number of Medals'
      }
    },
    colors: [theme.palette.primary.main, theme.palette.secondary.main, '#F7991C', '#1E4DB7', '#E74C3C'],
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      shared: true
    },
  };

  const serieslinechart = [
    {
      name: "USA",
      data: [10, 15, 22, 28, 35, 41, 48]
    },
    {
      name: "China",
      data: [8, 14, 19, 25, 32, 38, 45]
    },
    {
      name: "Japan",
      data: [6, 10, 15, 21, 26, 32, 37]
    },
    {
      name: "Great Britain",
      data: [5, 9, 13, 18, 23, 28, 33]
    },
    {
      name: "ROC",
      data: [4, 8, 12, 17, 22, 27, 31]
    }
  ];

  return (
    <DashboardCard title="Olympic Medals - Top 5 Countries">
      {typeof window !== 'undefined' && (
        <Chart
          options={optionslinechart}
          series={serieslinechart}
          type="line"
          height={350}
        />
      )}
    </DashboardCard>
  );
};

export default OlympicMedalsGraph;
