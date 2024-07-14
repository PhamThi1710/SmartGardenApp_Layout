import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import {
  addMonths,
  endOfWeek,
  startOfWeek,
  subMonths,
  getDaysInMonth,
} from "date-fns";

import {
  Text,
  View,
  Button,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";

const HonestDatePicker = ({ onChange }) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [week, setWeek] = useState({
    firstDay: startOfWeek(new Date(), { weekStartsOn: 1 }),
    lastDay: endOfWeek(new Date(), { weekStartsOn: 1 }),
  });

  useEffect(() => {
    onChange && onChange(week);
  }, [week]);

  const isLeapYear = () => {
    let leapYear = new Date(new Date().getFullYear(), 1, 29);
    return leapYear.getDate() == 29;
  };

  const convertDate = (date) => {
    let dt = new Date(date);
    return `${dt.getDate()}.${dt.getMonth() + 1}.${dt.getFullYear()}`;
  };

  const handleClick = (day) => {
    const selectedDate = new Date(date.getFullYear(), date.getMonth(), day);
    setDate(selectedDate);
    setOpen(false); // Đóng DatePicker sau khi chọn ngày
  };

  const months = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "Jun",
    "July",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];
  const days = {
    1: 31,
    2: isLeapYear() ? 29 : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
  const renderDays = () => {
    let month = date.getMonth() + 1;
    let ar = [];
    for (let i = 1; i <= days[month]; i++) {
      let cName = "";
      if (
        new Date(week.firstDay).getTime() <=
          new Date(date.getFullYear(), date.getMonth(), i).getTime() &&
        new Date(date.getFullYear(), date.getMonth(), i).getTime() <=
          new Date(week.lastDay).getTime()
      ) {
        cName = "selectedWeek";
      }

      ar.push(
        <TouchableOpacity
          key={uuidv4()}
          onPress={() => handleClick(i)}
          style={[styles.singleNumber, styles.touchable, styles[cName]]}
        >
          <Text style={cName === "selectedWeek" ? styles.white : styles.black}>
            {i}
          </Text>
        </TouchableOpacity>
      );
    }
    const displayDate = new Date(date).setDate(1);
    let dayInTheWeek = new Date(displayDate).getDay();
    if (dayInTheWeek < 1) {
      dayInTheWeek = 7;
    }
    let prevMonth = [];
    let prevMonthDays = new Date(date).getMonth();
    if (prevMonthDays === 0) {
      prevMonthDays = 12;
    }
    for (let i = dayInTheWeek; i > 1; i--) {
      let previousMonth = new Date(date).setMonth(
        new Date(date).getMonth() - 1
      );
      let currentDate = new Date(previousMonth).setDate(
        days[prevMonthDays] - i + 2
      );
      let cName = "";
      let currentTime = new Date(currentDate).getTime();
      let firstTime = new Date(week.firstDay).getTime();
      let endTime = new Date(week.lastDay).getTime();
      if (currentTime >= firstTime && currentTime <= endTime) {
        cName = "selectedWeek";
      }

      prevMonth.push(
        <TouchableOpacity
          key={uuidv4()}
          id={"prev-" + i}
          style={[styles.singleNumber, styles[cName]]}
        >
          <Text style={{ color: "#eeeeee" }}>{days[prevMonthDays] - i + 2}</Text>
        </TouchableOpacity>
      );
    }

    let nextMonth = [];
    let fullDays = 35;
    if ([...prevMonth, ...ar].length > 35) {
      fullDays = 42;
    }

    for (let i = 1; i <= fullDays - [...prevMonth, ...ar].length; i++) {
      let cName = "";
      const lastDay = week.lastDay.getTime();
      const lastDayOfMonth = new Date(
        new Date(date).setDate(getDaysInMonth(date))
      );

      if (
        lastDayOfMonth.getTime() <= lastDay &&
        week.firstDay.getMonth() == lastDayOfMonth.getMonth()
      ) {
        cName = "selectedWeek";
      }

      nextMonth.push(
        <TouchableOpacity
          key={uuidv4()}
          id={"next-" + i}
          style={[styles.singleNumber, styles[cName]]}
        >
          <Text style={{ color: "#eeeeee" }}>{i}</Text>
        </TouchableOpacity>
      );
    }
    return [...prevMonth, ...ar, ...nextMonth];
  };

  const handleMonthChange = (next) => {
    let newDate = new Date(date);
    if (next) {
      newDate = addMonths(newDate, 1);
    } else {
      newDate = addMonths(newDate, -1);
    }
    setDate(newDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.datePickerDisplay} onTouchStart={() => setOpen(true)}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Feather name="calendar" size={24} color="black" />
          <Text style={{ fontSize: 20, marginLeft: 8 }}>
            {convertDate(date)}
          </Text>
        </View>

        {open && (
          <View style={styles.datePickerOptions}>
            <View style={styles.titleMonth}>
              <TouchableOpacity onPress={() => handleMonthChange(false)}>
                <Text>Trước</Text>
              </TouchableOpacity>
              <Text>{`${months[date.getMonth()]} ${date.getFullYear()}.`}</Text>
              <TouchableOpacity onPress={() => handleMonthChange(true)}>
                <Text>Sau</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.numbersContainer}>
              <View style={styles.singleNumber}>
                <Text>Mon</Text>
              </View>
              <View style={styles.singleNumber}>
                <Text>Tue</Text>
              </View>
              <View style={styles.singleNumber}>
                <Text>Wed</Text>
              </View>
              <View style={styles.singleNumber}>
                <Text>Thu</Text>
              </View>
              <View style={styles.singleNumber}>
                <Text>Fri</Text>
              </View>
              <View style={styles.singleNumber}>
                <Text>Sat</Text>
              </View>
              <View style={styles.singleNumber}>
                <Text>Sun</Text>
              </View>
            </View>
            <View style={styles.numbersContainer}>{renderDays()}</View>
          </View>
        )}
      </View>
    </View>
  );
};

export default HonestDatePicker;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 45,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  datePickerDisplay: {
    flexDirection: "column",
    color: "#454545",
    position: "relative",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#c3c0cc",
    transitionDuration: "0.5s",
    padding: "0 1rem",
    fontSize: 16, // Corresponds to 1rem in CSS
    backgroundColor: "white",
  },
  datePickerOptions: {
    position: "absolute",
    top: 50,
    width: "100%",
    height: 440,
    padding: 8,
    width: "100%",
    borderRadius: 5,
    borderColor: "#c3c0cc",
    overflow: "hidden",
    backgroundColor: "white",
    zIndex: 99,
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "lightgray",
    backgroundColor:'#eeeeee'
  },
  titleMonth: {
    padding: 12,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    fontSize: 17,
  },
  numbersContainer: {
    borderTopWidth: 1,
    borderTopColor: "gainsboro",
    width: "100%",
    padding: 8,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  singleNumber: {
    width: "14.2857142857%", // 100% / 7 columns
    aspectRatio: 1,
    fontSize: 12, // Corresponds to 0.8rem in CSS
    backgroundColor: "transparent",
    color: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedDay: {
    color: "white",
    backgroundColor: "#ff9900",
  },
});
