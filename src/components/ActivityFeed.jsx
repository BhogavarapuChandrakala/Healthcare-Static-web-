
import { activityData } from '../data/appointments';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const ActivityFeed = () => {
  const chartConfig = {
    value: {
      label: "Appointments",
      color: "#2A86FF",
    },
  };

  // Create weekly data with day abbreviations
  const weeklyData = [
    { day: 'Mon', value: 4 },
    { day: 'Tue', value: 6 },
    { day: 'Wed', value: 3 },
    { day: 'Thu', value: 8 },
    { day: 'Fri', value: 5 },
    { day: 'Sat', value: 2 },
    { day: 'Sun', value: 1 }
  ];

  return (
    <div className="activity-feed">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Activity</h3>
        <p className="text-sm text-gray-600">{activityData.weeklyAppointments} appointments this week</p>
      </div>
      
      <ChartContainer config={chartConfig} className="min-h-[120px]">
        <BarChart data={weeklyData}>
          <XAxis 
            dataKey="day" 
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tick={{ fontSize: 12, fill: '#6B7280' }}
          />
          <YAxis hide />
          <ChartTooltip 
            content={<ChartTooltipContent />}
            cursor={{ fill: 'rgba(42, 134, 255, 0.1)' }}
          />
          <Bar 
            dataKey="value" 
            fill="var(--color-value)"
            radius={[2, 2, 0, 0]}
            strokeWidth={0}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default ActivityFeed;
