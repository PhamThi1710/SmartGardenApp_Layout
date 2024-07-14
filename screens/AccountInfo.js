import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Switch,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function AccountInfo({ navigation }) {
  const [form, setForm] = useState({
    darkMode: false,
    emailNotifications: true,
    pushNotifications: false,
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f6f6f6" }}>
      <View style={styles.container}>
        <View style={styles.profile}>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.profileAvatarWrapper}>
              <Image
                alt=""
                source={{
                  uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
                }}
                style={styles.profileAvatar}
              />

              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
              >
                <View style={styles.profileAction}>
                  <Feather color="#fff" name="edit-3" size={15} />
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <View>
            <Text style={styles.profileName}>ABC</Text>

            <Text style={styles.profileAddress}>
              Tòa H6, Đại học Bách Khoa TPHCM
            </Text>
          </View>
        </View>

        <ScrollView>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Thông tin cá nhân</Text>

            <View style={styles.row}>
              <Text style={styles.rowLabel}>Tên người dùng</Text>
              <View style={styles.rowSpacer} />

              <Text style={styles.rowLabel}>ABC</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>Tên tài khoản</Text>

              <View style={styles.rowSpacer} />

              <Text style={styles.rowLabel}>ABC21</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>Email</Text>

              <View style={styles.rowSpacer} />

              <Text style={styles.rowLabel}>abc21@hcmut.edu.vn</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>Số điện thoại</Text>

              <View style={styles.rowSpacer} />

              <Text style={styles.rowLabel}>0123456789</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>Địa chỉ</Text>

              <View style={styles.rowSpacer} />

              <Text style={styles.rowLabel}>
                Tòa H6, Đại học Bách Khoa TPHCM
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  /** Profile */
  profile: {
    padding: 24,
    backgroundColor: "#f6f6f6",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  profileAvatarWrapper: {
    position: "relative",
  },
  profileAvatar: {
    width: 72,
    height: 72,
    borderRadius: 9999,
  },
  profileAction: {
    position: "absolute",
    right: -4,
    bottom: -10,
    alignItems: "center",
    justifyContent: "center",
    width: 28,
    height: 28,
    borderRadius: 9999,
    backgroundColor: "#007bff",
  },
  profileName: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: "600",
    color: "#414d63",
    textAlign: "center",
  },
  profileAddress: {
    marginTop: 5,
    fontSize: 16,
    color: "#989898",
    textAlign: "center",
  },
  /** Section */
  section: {
    paddingHorizontal: 24,
  },
  sectionTitle: {
    paddingVertical: 12,
    fontSize: 12,
    fontWeight: "600",
    color: "#9e9e9e",
    textTransform: "uppercase",
    letterSpacing: 1.1,
  },
  /** Row */
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 50,
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 9999,
    marginRight: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: "400",
    color: "#0c0c0c",
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});
