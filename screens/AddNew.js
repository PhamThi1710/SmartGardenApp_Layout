import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput, Button } from 'react-native';
import { Color, Border, FontSize, FontFamily } from "./GlobalStyles";
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'expo-image-picker';
const data = [
    { label: 'High', value: '1' },
    { label: 'Medium', value: '2' },
    { label: 'Low', value: '3' },
];

function AddNew({ navigation }) {
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
    const [image, setImage] = useState(null);
    useEffect(() => {
        (async () => {
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasGalleryPermission(galleryStatus.status === 'granted');

        })();
    }, []);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            console.log(result.assets[0].uri);
            setImage(result.assets[0].uri);

        }
    }
    if (hasGalleryPermission === false) {
        return <Text>No access to Internal Storage</Text>
    }
    const [inputdefault, setText] = useState('');
    const [value, setValue] = useState(null);
    const renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
                {item.value === value && (
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
        <View style={styles.addnew}>
            <Pressable
                style={[styles.signUpButton, styles.signUpButton_Pos]}
                onPress={() => alert('Save successfully')}
            >
                <Text style={styles.signUpButton_Text}>Save</Text>
            </Pressable>
            <Text style={styles.title_Addnew}>Thêm cây trồng mới</Text>

            <View style={[styles.tnCyTrngParent, styles.wrapperParentFlexBox]}>
                <Text style={styles.tnCyTrngContainer}
                >
                    <Text style={styles.nhitThch}
                    >{`Tên cây trồng: `}</Text>
                    <Text style={styles.text1}
                    >
                        {`*`}</Text>
                </Text>
                <TextInput
                    style={[styles.frameItem, styles.frameBorder, { paddingLeft: 4, }]}
                    placeholder="Nhập tên cây trồng"
                    onChangeText={newText => setText(newText)}
                    defaultValue={inputdefault}
                />
            </View>
            <View style={[styles.tnCyTrngParent, styles.wrapperParentFlexBox, { top: 130 }]}>
                <Text style={styles.tnCyTrngContainer}
                >
                    <Text style={styles.nhitThch}
                    >{`Tần suất tưới nước `}</Text>
                    <Text style={styles.text1}
                    >
                        {`*`}</Text>
                </Text>
                <TextInput
                    style={[styles.frameItem, styles.frameBorder, { width: 105, fontSize: 12, paddingLeft: 4, }]}
                    placeholder="Nhập số lần tưới"
                    onChangeText={newText => setText(newText)}
                    defaultValue={inputdefault}
                />
                <MaterialCommunityIcons name="slash-forward" size={40}></MaterialCommunityIcons>
                <TextInput
                    style={[styles.frameItem, styles.frameBorder, { width: 105, fontSize: 12, paddingLeft: 4, }]}
                    placeholder="Nhập khoảng thời gian cho số lần tưới"
                    onChangeText={newText => setText(newText)}
                    defaultValue={inputdefault}
                />
            </View>
            <View style={[styles.tnCyTrngParent, styles.wrapperParentFlexBox, { top: 200 }]}>
                <Text style={styles.tnCyTrngContainer}
                >
                    <Text style={styles.nhitThch}
                    >{`Tần suất tưới nước `}</Text>
                    <Text style={styles.text1}
                    >
                        {`*`}</Text>
                </Text>
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
                    placeholder="Chọn mức ánh sáng"
                    searchPlaceholder="Search..."
                    value={value}
                    onChange={item => {
                        setValue(item.value);
                    }}
                    renderItem={renderItem}
                />

            </View>
            <View style={[styles.tnCyTrngParent, styles.wrapperParentFlexBox, { top: 280 }]}>
                <Text style={styles.tnCyTrngContainer}
                >
                    <Text style={styles.nhitThch}
                    >{`Nhiệt độ thích hợp: `}</Text>
                    <Text style={styles.text1}
                    >
                        {`*`}</Text>
                </Text>
                <TextInput
                    style={[styles.frameItem, styles.frameBorder, { paddingLeft: 4, }]}
                    placeholder="Nhập nhiệt độ thích hợp cho cây"
                    onChangeText={newText => setText(newText)}
                    defaultValue={inputdefault}
                />
            </View>
            <View style={[styles.tnCyTrngParent, styles.wrapperParentFlexBox, { top: 360 }]}>
                <Text style={styles.tnCyTrngContainer}
                >
                    <Text style={styles.nhitThch}
                    >{`Độ ẩm thích hợp: `}</Text>
                    <Text style={styles.text1}
                    >
                        {`*`}</Text>
                </Text>
                <TextInput
                    style={[styles.frameItem, styles.frameBorder, { paddingLeft: 4, }]}
                    placeholder="Nhập độ ẩm thích hợp cho cây"
                    onChangeText={newText => setText(newText)}
                    defaultValue={inputdefault}
                />
            </View>
            <View style={[styles.tnCyTrngParent, styles.wrapperParentFlexBox, { top: 430 }]}>
                <Text style={styles.tnCyTrngContainer}
                >
                    <Text style={styles.nhitThch}
                    >{`Ghi chú: `}</Text>
                </Text>
                <TextInput
                    style={[styles.frameItem, styles.frameBorder, { paddingLeft: 4, height: 100, }]}
                    placeholder=""
                    onChangeText={newText => setText(newText)}
                    defaultValue={inputdefault}
                />
            </View>
            <View style={[styles.tnCyTrngParent, styles.wrapperParentFlexBox, { top: 540 }]}>
                <Text style={styles.tnCyTrngContainer}
                >
                    <Text style={styles.nhitThch}
                    >{`Chèn ảnh: `}</Text>
                </Text>
                <Button title='Choose Image' onPress={() => pickImage()} style={{ marginTop: 500, borderRadius: Border.br_3xs, }} />
                {image && alert('Upload Image Successful!')}
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    signUpButton: {
        width: "25.96%",
        top: "85.96%",
        right: "0.71%",
        bottom: "19.22%",
        backgroundColor: Color.colorSeagreen_100,
        borderRadius: Border.br_3xs,
        left: "13.33%",
        height: "10.82%",
        position: "absolute",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center"
    },
    signUpButton_Pos: {
        left: "70.33%",
        height: "5.82%",
    },
    signUpButton_Text: {
        color: Color.colorWhite,
        fontSize: FontSize.size_xl,

        left: "5",
        right: "5",
        fontWeight: "700",
        position: "absolute",
    },
    dropdown: {
        right: 15,
        margin: 16,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 12,
        paddingLeft: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        flexBasis: "65%",
        elevation: 2,
    },
    icon: {
        marginRight: 5,
    },

    placeholderStyle: {
        fontSize: 14,
    },
    selectedTextStyle: {
        fontSize: 14,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 25,
        fontSize: 14,
    },
    wrapperParentFlexBox: {
        alignItems: "left",
        justifyContent: "left",
    },

    frameBorder: {
        height: 42,
        borderWidth: 1,
        borderRadius: Border.br_3xs,
        borderColor: Color.colorBlack,
        borderStyle: "solid",
        backgroundColor: Color.colorWhite,
    },
    nhitThch: {
        color: Color.colorBlack,
    },
    title_Addnew: {
        alignSelf: "center",
        top: 6,
        fontSize: FontSize.size_5xl,
        fontWeight: "bold",
        
        textAlign: "center",
        color: Color.colorBlack,
        position: "absolute",
    },
    text1: {
        color: "#ff0909",
    },
    tnCyTrngContainer: {
        width: 110,
        height: 40,
        textAlign: "left",
        fontWeight: "300",
        fontSize: 15,
        flexDirection: "row",
        top: 8
    },
    frameItem: {
        width: 250,
    },
    tnCyTrngParent: {
        top: 80,
        justifyContent: "center",
        flexDirection: "row",
        left: 15,
        alignItems: "left",
        position: "absolute",
    },

    icon: {
        height: "100%",
        overflow: "hidden",
        width: "100%",
    },
    addnew: {
        flex: 1,
        height: 932,
        overflow: "hidden",
        width: "100%",
    },
});

export default AddNew;
