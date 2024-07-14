import React, { useState } from "react";
import { Text, View, Button, StyleSheet, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";

const Plant = ({ navigation }) => {
  const data = [
    {
      label: "Cây tiêu",
      value: "5",
      sowDate: "13/03/2024",
      growthPeriod: "28 ngày",
      growthStage: "cây non",
      temperature: "16-23 (°C)",
      lightIntensity: "8000-12000 (lux)",
      soilMoisture: "60-70 (%)",
    },
    {
      label: "Cà phê",
      value: "2",
      sowDate: "15/04/2024",
      growthPeriod: "40 ngày",
      growthStage: "cây trưởng thành",
      temperature: "18-25 (°C)",
      lightIntensity: "10000-15000 (lux)",
      soilMoisture: "70-80 (%)",
    },
    {
      label: "Rau cải",
      value: "3",
      sowDate: "20/04/2024",
      growthPeriod: "25 ngày",
      growthStage: "cây non",
      temperature: "15-20 (°C)",
      lightIntensity: "7000-10000 (lux)",
      soilMoisture: "50-60 (%)",
    },
    {
      label: "Rau lang",
      value: "4",
      sowDate: "10/04/2024",
      growthPeriod: "30 ngày",
      growthStage: "cây non",
      temperature: "20-25 (°C)",
      lightIntensity: "8000-12000 (lux)",
      soilMoisture: "60-70 (%)",
    },
  ];

  const [selectedItem, setSelectedItem] = useState(data[0]);

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === selectedItem.value && (
          <AntDesign
            style={styles.icon}
            color="black"
            name="select1"
            size={20}
          />
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Chọn cây"
          searchPlaceholder="Tìm kiếm..."
          value={selectedItem}
          onChange={(item) => {
            setSelectedItem(item);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color="black"
              name="menuunfold"
              size={20}
            />
          )}
          renderItem={renderItem}
        />

        <View style={styles.body}>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Image
              alt=""
              source={{
                uri: "https://bizweb.dktcdn.net/100/392/499/products/screen-shot-2022-07-26-at-9-39-05-pm.png?v=1658847149243",
              }}
              style={styles.profileAvatar}
            />
          </View>

          <View style={styles.bodyContent}>
            <Text style={styles.title}>Thông tin cây trồng:</Text>
            <Text style={styles.textContent}>
              Cây trồng: {selectedItem.label}
            </Text>
            <Text style={styles.textContent}>
              Ngày gieo hạt: {selectedItem.sowDate}
            </Text>
            <Text style={styles.textContent}>
              Thời gian sinh trưởng: {selectedItem.growthPeriod}
            </Text>
            <Text style={styles.textContent}>
              Giai đoạn sinh trưởng: {selectedItem.growthStage}
            </Text>
          </View>
        </View>

        <View style={styles.end}>
          <Text style={styles.title}>Thông số thích hợp:</Text>
          <View style={{ flexDirection: "row" }}>
            <Feather name="thermometer" size={20} color="black" />
            <Text
              style={StyleSheet.flatten([
                styles.textContent,
                styles.endContent,
              ])}
            >
              Nhiệt độ: {selectedItem.temperature}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Feather name="sun" size={20} color="black" />
            <Text
              style={StyleSheet.flatten([
                styles.textContent,
                styles.endContent,
              ])}
            >
              Cường độ ánh sáng: {selectedItem.lightIntensity}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Feather name="droplet" size={20} color="black" />
            <Text
              style={StyleSheet.flatten([
                styles.textContent,
                styles.endContent,
              ])}
            >
              Độ ẩm đất: {selectedItem.soilMoisture}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Plant;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f6f6f6",
    shadowColor: "red",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  content: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "column",
    width: "100%",
    marginTop: 60,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: "white",
  },
  chooseHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1.5,
    borderBottomColor: "lightgray",
    height: 40,
  },
  body: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 300,
    borderBottomWidth: 1.5,
    borderBottomColor: "lightgray",

    borderTopWidth: 1.5,
    borderTopColor: "lightgray",
  },
  bodyContent: {
    paddingTop: 30,
    flexDirection: "column",

    height: "100%",
    width: "60%",
    paddingLeft: 20,
    justifyContent: "center",
  },
  end: {
    paddingTop: 20,
    flexDirection: "row",

    height: 200,
    flexDirection: "column",
  },
  textContent: {
    fontSize: 17,
    marginBottom: 10,
  },
  endContent: {
    paddingLeft: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  profileAvatarWrapper: {
    position: "relative",
  },
  profileAvatar: {
    width: 150,
    height: 200,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
});
