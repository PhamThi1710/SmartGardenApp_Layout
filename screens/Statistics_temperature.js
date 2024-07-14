import React, { useState } from "react";
import HonestWeekPicker from "../components/HonestWeekPicker";
// import DateTimePicker from '@react-native-community/datetimepicker';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";
import HonestDatePicker from "../components/datePicker";
import Chart from "../components/chart";

const ModeSelector = ({ mode, onSelectMode }) => {
  return (
    <View style={styles.modeSelector}>
      <TouchableOpacity
        style={[
          styles.modeButton,
          mode === "Ngày" && styles.activeMode,
          mode === "Ngày" && styles.selectedStyle,
        ]}
        onPress={() => onSelectMode("Ngày")}
      >
        <Text
          style={[styles.modeText, mode === "Ngày" && styles.selectedTextStyle]}
        >
          Ngày
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.modeButton,
          mode === "Tuần" && styles.activeMode,
          mode === "Tuần" && styles.selectedStyle,
        ]}
        onPress={() => onSelectMode("Tuần")}
      >
        <Text
          style={[styles.modeText, mode === "Tuần" && styles.selectedTextStyle]}
        >
          Tuần
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Temperature = () => {
  const [week, setWeek] = useState({ firstDay: "02-02-2022" });

  const convertDate = (date) => {
    let dt = new Date(date);
    return `${dt.getDate()}.${dt.getMonth() + 1}.${dt.getFullYear()}`;
  };

  const onChange = (week) => {
    setWeek(week);
  };

  const [mode, setMode] = useState("Ngày");

  const handleChangeMode = (selectedMode) => {
    setMode(selectedMode);
  };
  return (
    <View style={styles.container}>
      <ModeSelector mode={mode} onSelectMode={handleChangeMode} />
      <View style={[styles.pickerContainer, { width: "90%" }]}>
        {mode === "Ngày" ? (
          <HonestDatePicker onChange={(selectedDate) => {}} />
        ) : (
          <HonestWeekPicker onChange={(selectedWeek) => {}} />
        )}
      </View>
      <View style={styles.chartContainer}>
        <Chart id={mode === "Ngày" ? 11 : 12} />
      </View>
    </View>
  );
};
export default Temperature;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  modeSelector: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
    width: "90%",
    backgroundColor: "#FFFFFF",
    height: 45,
    borderRadius: 10,
  },
  modeButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modeText: {
    // styles cho văn bản trong tab chọn
    fontSize: 16,
  },
  activeMode: {
    // styles cho tab chọn được chọn
    backgroundColor: "#9C9C9C", // Đổi màu nền của tab khi được chọn
    height: "100%",
    borderRadius: 10,
  },
  selectedStyle: {
    // styles cho tab được chọn
    borderWidth: 2, // Đổi độ dày viền của tab khi được chọn
    borderColor: "#B5B5B5", // Đổi màu viền của tab khi được chọn
  },
  selectedTextStyle: {
    // styles cho văn bản trong tab được chọn
    color: "white", // Đổi màu văn bản của tab khi được chọn
  },
  pickerContainer: {
    marginTop: 10,
  },
  chartContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 10,
    zIndex: -1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
