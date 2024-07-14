import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { Text, View, Button, StyleSheet, Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const Chart = ({ id }) => {
  const mode = [
    {
      id: 11,
      unit: "°C",
      title: "Thống kê nhiệt độ trong ngày (°C):",
      minContent: "Nhiệt độ thấp nhất trong ngày đạt ngưỡng:",
      maxContent: "Nhiệt độ cao nhất trong ngày đạt ngưỡng:",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      backgroundColor: "#e26a00",
      stroke:"#ffa726",
      label: ["0:00", "4:00", "8:00", "12:00", "16:00", "20:00", "24:00"],
    },
    {
      id: 12,
      unit: "°C",
      title: "Thống kê nhiệt độ trong tuần (°C):",
      minContent: "Nhiệt độ thấp nhất trong tuần đạt ngưỡng:",
      maxContent: "Nhiệt độ cao nhất trong tuần đạt ngưỡng:",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      backgroundColor: "#e26a00",
      stroke:"#ffa726",
      label: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
    },
    {
      id: 21,
      unit: "lux",
      title: "Thống kê cường độ ánh sáng trong ngày (lux):",
      minContent: "Cường độ ánh sáng thấp nhất trong ngày đạt ngưỡng:",
      maxContent: "Cường độ ánh sáng cao nhất trong ngày đạt ngưỡng:",
      backgroundGradientFrom: "#9C9900",
      backgroundGradientTo: "#DCD800",
      backgroundColor: "#F9F400",
      stroke:"#C7C300",
      label: ["0:00", "4:00", "8:00", "12:00", "16:00", "20:00", "24:00"],
    },
    {
      id: 22,
      unit: "lux",
      title: "Thống kê cường độ ánh sáng trong tuần (lux):",
      minContent: "Cường độ ánh sáng thấp nhất trong tuần đạt ngưỡng:",
      maxContent: "Cường độ ánh sáng cao nhất trong tuần đạt ngưỡng:",
      backgroundGradientFrom: "#9C9900",
      backgroundGradientTo: "#DCD800",
      backgroundColor: "#F9F400",
      stroke:"#C7C300",
      label: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
    },
    {
      id: 31,
      unit: "%",
      title: "Thống kê độ ẩm đất trong ngày (%):",
      minContent: "Độ ẩm đất thấp nhất trong ngày đạt ngưỡng:",
      maxContent: "Độ ẩm đất cao nhất trong ngày đạt ngưỡng:",
      backgroundGradientFrom: "#BBECFF",
      backgroundGradientTo: "#00B2FF",
      backgroundColor: "#97FFFF",
      stroke:"#8DEEEE",
      label: ["0:00", "4:00", "8:00", "12:00", "16:00", "20:00", "24:00"],
    },
    {
      id: 32,
      unit: "%",
      title: "Thống kê độ ẩm đất trong tuần (%):",
      minContent: "Độ ẩm đất thấp nhất trong tuần đạt ngưỡng:",
      maxContent: "Độ ẩm đất cao nhất trong tuần đạt ngưỡng:",
      backgroundGradientFrom: "#BBECFF",
      backgroundGradientTo: "#00B2FF",
      backgroundColor: "#97FFFF",
      stroke:"#8DEEEE",
      label: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
    },
  ];
  const param = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
  ];
  const minValue = Math.min(...param);
  const maxValue = Math.max(...param);
  const selectedMode = mode.find((item) => item.id === id);

  return (
    <View>
      <Text
        style={{ fontSize: 18, padding: 16, paddingLeft: 20, fontWeight: 500 }}
      >
        {selectedMode.title}
      </Text>
      <LineChart
        data={{
          labels: selectedMode.label,
          datasets: [
            {
              data: param,
            },
          ],
        }}
        width={screenWidth * 0.9} // from react-native
        height={300}
        yAxisLabel=""
        yAxisSuffix={selectedMode.unit}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: selectedMode.backgroundColor,
          backgroundGradientFrom: selectedMode.backgroundGradientFrom,
          backgroundGradientTo: selectedMode.backgroundGradientTo,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: selectedMode.stroke,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <Text style={{ fontSize: 16, padding: 8, paddingLeft: 16 }}>
        {selectedMode.minContent} {minValue} ({selectedMode.unit})
      </Text>
      <Text style={{ fontSize: 16, padding: 8, paddingLeft: 16 }}>
        {selectedMode.maxContent} {maxValue} ({selectedMode.unit})
      </Text>
    </View>
  );
};
export default Chart;
