import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AboutUs = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {" "}
        {"    "}Hiện nay, trong bối cảnh gia tăng dân số và biến đổi khí hậu
        khiến cho ngành nông nghiệp nói chung và các trang trại đặc biệt là
        trang trại trồng trọt nói riêng đang đứng trước những khó khăn thách
        thức lớn. Sự gia tăng ngày càng cao về yêu cầu sản xuất, yêu cầu về tăng
        cường năng suất sản lượng, đối phó với các điều kiện thời tiết khắc
        nghiệt trong quá trình trồng trọt. Ngoài ra, các trang trại còn thường
        xuyên phải đối mặt với các vấn nạn như cháy hoặc trộm, điều này đặt ra
        áp lực lớn lên những người nông dân và chủ các trang trại. Đứng trước
        những thách thức trên, sự cần thiết phải tối ưu hóa trong quản lý trang
        trại và tăng cường hiệu suất nông nghiệp trở nên quan trọng hơn bao giờ
        hết.
      </Text>
      <Text style={styles.title}>
        {" "}
        {"    "}Dự án Trang Trại Thông Minh tập trung vào việc áp dụng công nghệ
        hiện đại như Internet of Things (IoT) và tự động hóa để cải thiện quy
        trình quản lý việc trồng trọt một cách hiệu quả và mang lại năng suất
        cao. Hệ thống sẽ được triển khai giám sát thông minh để theo dõi các chỉ
        số quan trọng như độ ẩm đất, nhiệt độ nhằm giúp người chủ trang trại có
        thể đưa ra các hành động phù hợp tại thời điểm đó hoặc có thể từ những
        số liệu này để đưa ra các thống kê trong tương lai về các chiến lược
        trồng trọt hiệu quả, đạt năng suất cao. Đồng thời, sử dụng các thiết bị
        tự động hóa để thực hiện các công việc như tưới nước tự động, gieo
        trồng, thu hoạch, quản lý ánh sáng của trang trại như việc bật tắt đèn
        một cách hiệu quả. Không những tối ưu hóa trong việc quản lý sản xuất,
        hệ thống còn cung cấp các tính năng nhằm phòng ngừa các rủi ro có thể
        xảy ra như hệ thống cảnh báo trộm, hệ thống báo cháy để người chủ trang
        trại và các bên liên quan có thể xử lí kịp thời.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
    justifyContent: "",
  },
  title: {
    fontSize: 18,
    textAlign: "justify",
  },
});

export default AboutUs;
