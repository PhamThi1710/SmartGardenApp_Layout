import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList ,TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
const Notification = ({navigation}) => {
    const  [data, setData]=useState([
        {
            id:'001',
            area:'Khu vực X',
            content:'Hệ thống Smart Garden đã kích hoạt máy bơm nước,  cây trồng của bạn đang được tưới nước.',
            date:'13/03/2024',
            time: '10:00',
            icon:'cloud-rain',
            status:'active',

        },
        {
            id:'002',
            area:'Khu vực X',
            content:'Máy quạt đã được kích hoạt. Vườn của bạn đang được làm mát.',
            date:'13/03/2024',
            time: '10:00',
            status:'active',
            icon:'wind',
        },
        {
            id:'003',
            area:'Khu vực X',
            content:'Đèn LED đã được kích hoạt. Vườn của bạn sẽ được  chiếu sáng.',
            date:'13/03/2024',
            time: '10:00',
            status:'active',
            icon:'sun',
        },
        {
            id:'004',
            area:'Khu vực X',
            content:'Nhiệt độ của vườn đã tăng quá ngưỡng được quy định. Hệ thống đã kích hoạt máy quạt để làm mát. Nhiệt độ hiện tại 30°C.',
            date:'13/03/2024',
            time: '10:00',
            status:'active',
            icon:'wind',
        },
        {
            id:'005',
            area:'Khu vực X',
            content:'Lỗi: Máy bơm nước hiện đang gặp sự cố và không thể hoạt động. Vui lòng kiểm tra và sửa chữa máy bơm ngay.',
            date:'13/03/2024',
            time: '10:00',
            status:'active',
            icon:'cloud-rain',
        },{
            id:'006',
            area:'Khu vực X',
            content:'Hệ thống Smart Garden đã kích hoạt máy bơm nước,  cây trồng của bạn đang được tưới nước.',
            date:'13/03/2024',
            time: '10:00',
            icon:'cloud-rain',
            status:'active',

        },
        {
            id:'007',
            area:'Khu vực X',
            content:'Máy quạt đã được kích hoạt. Vườn của bạn đang được làm mát.',
            date:'13/03/2024',
            time: '10:00',
            status:'active',
            icon:'wind',
        },
        {
            id:'008',
            area:'Khu vực X',
            content:'Đèn LED đã được kích hoạt. Vườn của bạn sẽ được  chiếu sáng.',
            date:'13/03/2024',
            time: '10:00',
            status:'passive',
            icon:'sun',
        },
        {
            id:'009',
            area:'Khu vực X',
            content:'Nhiệt độ của vườn đã tăng quá ngưỡng được quy định. Hệ thống đã kích hoạt máy quạt để làm mát. Nhiệt độ hiện tại 30°C.',
            date:'13/03/2024',
            time: '10:00',
            status:'passive',
            icon:'wind',
        },
        {
            id:'010',
            area:'Khu vực X',
            content:'Lỗi: Máy bơm nước hiện đang gặp sự cố và không thể hoạt động. Vui lòng kiểm tra và sửa chữa máy bơm ngay.',
            date:'13/03/2024',
            time: '10:00',
            status:'passive',
            icon:'cloud-rain',
        }
    ])
    const [backgroundColor, setBackgroundColor] = useState('gray');

    const handlePressItem = (itemId) => {
        const newData = data.map(item => {
          if (item.id === itemId) {
            // Nếu id của mục trùng với id được nhấn, thay đổi status sang 'passive'
            return { ...item, status: 'passive' };
          }
          return item;
        });
        setData(newData); // Cập nhật dữ liệu mới
      };
    
    return (
        <View style={styles.container}>
        <FlatList
          style={{ marginBottom: 80 }}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePressItem(item.id)}>
              <View
                style={[
                  styles.container,
                  { borderBottomWidth: 1, borderBottomColor: 'lightgray', backgroundColor: item.status === 'active' ? '#eeeeee' : 'white', padding: 10 }
                ]}
              >
                <View style={styles.HeaderLeftIcon}>
                  <Feather name={item.icon} size={24} color="black" />
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                  <View>
                    <Text style={{ color: 'black', fontSize: 16, fontWeight: '600' }}>{item.area}</Text>
                    <Text style={{ color: 'black', fontSize: 14, paddingRight: 10 }}>{item.content}</Text>
                    <Text style={{ color: 'black', fontSize: 12 }}>{item.time} {item.date}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height:'100%',
        backgroundColor: 'white',
        flexDirection:'row',
        
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    HeaderLeftIcon: {
        justifyContent: 'center',
    },
});

export default Notification;
