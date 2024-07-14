import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';
import { Color, Border, FontSize, Padding } from "./GlobalStyles";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
function MainListPlants({ navigation }) {

    return (
        <ScrollView >
            <View style={styles.plantImgwrapper}>
                <Image
                    style={styles.plantImg}
                    contentFit="cover"
                    source={require("../assets/plant.png")}
                />
                <Text style={[styles.namePlant, styles.namePlantTypo]}>Cây tiêu</Text>

                <View style={[styles.waterParent, styles.parentSpaceBlock1]}>
                    <Ionicons name="water-outline" size={40}></Ionicons>
                    <View style={styles.infor}>
                        <Text style={styles.frequency}>Tần suất tưới nước:</Text>
                        <Text style={[styles.freDetail, styles.freDetailTypo]}>1 lần / 1 tuần</Text>
                    </View>
                </View>
                <View style={[styles.sunFillParent, styles.parentSpaceBlock]}>
                    <Octicons name="sun" size={40}></Octicons>
                    <View style={[styles.sunParent, styles.parentSpaceBlock1]}>
                        <Text style={[styles.sun, styles.nhitTypo]}>Ánh sáng:</Text>
                        <Text style={[styles.medium, styles.nhitTypo]}>Medium</Text>
                    </View>
                </View>
                <View style={[styles.temperatureParent, styles.parentSpaceBlock]}>
                    <FontAwesome6 name="temperature-high" size={40}></FontAwesome6>
                    <View style={[styles.nhitParent, styles.parentSpaceBlock]}>
                        <Text style={[styles.nhit, styles.nhitTypo]}>Nhiệt độ:</Text>
                        <Text style={styles.text}>{`25 - 27 `}</Text>
                        <Entypo style={styles.frameItem} name="vinyl" size={5}></Entypo>
                        <Text style={[styles.c]}>C</Text>

                    </View>
                </View>

                <View style={[styles.humidityParent, styles.parentSpaceBlock]}>
                    <MaterialCommunityIcons name="water-outline" size={40}></MaterialCommunityIcons>
                    <View style={[styles.sunParent, styles.parentSpaceBlock1]}>
                        <Text style={[styles.sun, styles.nhitTypo]}>Độ ẩm:</Text>
                        <Text style={[styles.medium, styles.nhitTypo]}>60-70 %</Text>
                    </View>
                </View>
                <View style={[styles.xa]}>
                    <Pressable onPress={() => alert("successful!")}>
                        <Text style={styles.xaTypo}>Delete</Text>
                    </Pressable>
                </View>
            </View>

            {/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


            <View style={[styles.plantImgwrapper, {backgroundColor: Color.colorLightcyan}]}>
                <Image
                    style={styles.plantImg}
                    contentFit="cover"
                    source={require("../assets/plant.png")}
                />
                <Text style={[styles.namePlant, styles.namePlantTypo]}>Cây cà phê</Text>

                <View style={[styles.waterParent, styles.parentSpaceBlock1]}>
                    <Ionicons name="water-outline" size={40}></Ionicons>
                    <View style={styles.infor}>
                        <Text style={styles.frequency}>Tần suất tưới nước:</Text>
                        <Text style={[styles.freDetail, styles.freDetailTypo]}>5 - 6 lần / 1 năm</Text>
                    </View>
                </View>
                <View style={[styles.sunFillParent, styles.parentSpaceBlock]}>
                    <Octicons name="sun" size={40}></Octicons>
                    <View style={[styles.sunParent, styles.parentSpaceBlock1]}>
                        <Text style={[styles.sun, styles.nhitTypo]}>Ánh sáng:</Text>
                        <Text style={[styles.medium, styles.nhitTypo]}>Medium</Text>
                    </View>
                </View>
                <View style={[styles.temperatureParent, styles.parentSpaceBlock]}>
                    <FontAwesome6 name="temperature-high" size={40}></FontAwesome6>
                    <View style={[styles.nhitParent, styles.parentSpaceBlock]}>
                        <Text style={[styles.nhit, styles.nhitTypo]}>Nhiệt độ:</Text>
                        <Text style={styles.text}>{`15 - 24 `}</Text>
                        <Entypo style={styles.frameItem} name="vinyl" size={5}></Entypo>
                        <Text style={[styles.c]}>C</Text>

                    </View>
                </View>
                <View style={[styles.humidityParent, styles.parentSpaceBlock]}>
                    <MaterialCommunityIcons name="water-outline" size={40}></MaterialCommunityIcons>
                    <View style={[styles.sunParent, styles.parentSpaceBlock1]}>
                        <Text style={[styles.sun, styles.nhitTypo]}>Độ ẩm:</Text>
                        <Text style={[styles.medium, styles.nhitTypo]}>60-70 %</Text>
                    </View>
                </View>
                <View style={[styles.xa]}>
                    <Pressable onPress={() => alert("successful!")}>
                        <Text style={styles.xaTypo}>Delete</Text>
                    </Pressable>
                </View>
            </View>



            {/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


            <View style={[styles.plantImgwrapper, {backgroundColor: Color.colorGainsboro_200}]}>
                <Image
                    style={styles.plantImg}
                    contentFit="cover"
                    source={require("../assets/plant.png")}
                />
                <Text style={[styles.namePlant, styles.namePlantTypo]}>Cây rau cải</Text>

                <View style={[styles.waterParent, styles.parentSpaceBlock1]}>
                    <Ionicons name="water-outline" size={40}></Ionicons>
                    <View style={styles.infor}>
                        <Text style={styles.frequency}>Tần suất tưới nước:</Text>
                        <Text style={[styles.freDetail, styles.freDetailTypo]}>2 lần / 1 ngày</Text>
                    </View>
                </View>
                <View style={[styles.sunFillParent, styles.parentSpaceBlock]}>
                    <Octicons name="sun" size={40}></Octicons>
                    <View style={[styles.sunParent, styles.parentSpaceBlock1]}>
                        <Text style={[styles.sun, styles.nhitTypo]}>Ánh sáng:</Text>
                        <Text style={[styles.medium, styles.nhitTypo]}>Medium</Text>
                    </View>
                </View>
                <View style={[styles.temperatureParent, styles.parentSpaceBlock]}>
                    <FontAwesome6 name="temperature-high" size={40}></FontAwesome6>
                    <View style={[styles.nhitParent, styles.parentSpaceBlock]}>
                        <Text style={[styles.nhit, styles.nhitTypo]}>Nhiệt độ:</Text>
                        <Text style={styles.text}>{`18 - 22 `}</Text>
                        <Entypo style={styles.frameItem} name="vinyl" size={5}></Entypo>
                        <Text style={[styles.c]}>C</Text>

                    </View>
                </View>
                <View style={[styles.humidityParent, styles.parentSpaceBlock]}>
                    <MaterialCommunityIcons name="water-outline" size={40}></MaterialCommunityIcons>
                    <View style={[styles.sunParent, styles.parentSpaceBlock1]}>
                        <Text style={[styles.sun, styles.nhitTypo]}>Độ ẩm:</Text>
                        <Text style={[styles.medium, styles.nhitTypo]}>60-70 %</Text>
                    </View>
                </View>
                <View style={[styles.xa]}>
                    <Pressable onPress={() => alert("successful!")}>
                        <Text style={styles.xaTypo}>Delete</Text>
                    </Pressable>
                </View>
            </View>

            {/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <View style={[styles.plantImgwrapper, {backgroundColor: Color.colorSeagreen_300}]}>
                <Image
                    style={styles.plantImg}
                    contentFit="cover"
                    source={require("../assets/plant.png")}
                />
                <Text style={[styles.namePlant, styles.namePlantTypo]}>Cây rau lang</Text>

                <View style={[styles.waterParent, styles.parentSpaceBlock1]}>
                    <Ionicons name="water-outline" size={40}></Ionicons>
                    <View style={styles.infor}>
                        <Text style={styles.frequency}>Tần suất tưới nước:</Text>
                        <Text style={[styles.freDetail, styles.freDetailTypo]}>2 lần / 1 ngày</Text>
                    </View>
                </View>
                <View style={[styles.sunFillParent, styles.parentSpaceBlock]}>
                    <Octicons name="sun" size={40}></Octicons>
                    <View style={[styles.sunParent, styles.parentSpaceBlock1]}>
                        <Text style={[styles.sun, styles.nhitTypo]}>Ánh sáng:</Text>
                        <Text style={[styles.medium, styles.nhitTypo]}>Medium</Text>
                    </View>
                </View>
                <View style={[styles.temperatureParent, styles.parentSpaceBlock]}>
                    <FontAwesome6 name="temperature-high" size={40}></FontAwesome6>
                    <View style={[styles.nhitParent, styles.parentSpaceBlock]}>
                        <Text style={[styles.nhit, styles.nhitTypo]}>Nhiệt độ:</Text>
                        <Text style={styles.text}>{`20 - 30 `}</Text>
                        <Entypo style={styles.frameItem} name="vinyl" size={5}></Entypo>
                        <Text style={[styles.c]}>C</Text>

                    </View>
                </View>
                <View style={[styles.humidityParent, styles.parentSpaceBlock]}>
                    <MaterialCommunityIcons name="water-outline" size={40}></MaterialCommunityIcons>
                    <View style={[styles.sunParent, styles.parentSpaceBlock1]}>
                        <Text style={[styles.sun, styles.nhitTypo]}>Độ ẩm:</Text>
                        <Text style={[styles.medium, styles.nhitTypo]}>60-70 %</Text>
                    </View>
                </View>
                <View style={[styles.xa]}>
                    <Pressable onPress={() => alert("successful!")}>
                        <Text style={styles.xaTypo}>Delete</Text>
                    </Pressable>
                </View>
            </View>


            {/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        </ScrollView>
    )
};

const styles = StyleSheet.create({
    parentSpaceBlock: {
        paddingVertical: Padding.p_9xs,
        flexDirection: "row",
        overflow: "hidden",
    },
    xaTypo: {
        height: 18,
        fontSize: 10,
        fontWeight: "300",
        width: 34,
        textAlign: "left",
        letterSpacing: 0.1,
        position: "absolute",
    },
    xa: {
        top: 4,
        left: 320,
    },
    text1: {
        height: 15,
        marginTop: 3
    },
    mTypo: {
        width: 100,

        fontSize: FontSize.size_xs,
        fontWeight: "300",
        color: Color.colorBlack,
        textAlign: "left",
        letterSpacing: 0.1,
    },
    m: {
        height: 14,
    },
    mParent: {
        paddingHorizontal: Padding.p_12xs,
        marginLeft: 10,
        paddingVertical: 0,
        overflow: "hidden",
    },
    parentPosition: {
        left: 40,
        alignItems: "center",
        position: "absolute",
    },
    humidityParent: {
        top: 290,
        left: 18,
        position: "absolute",
        flexDirection: "row",
        overflow: "hidden",
    },
    frameItem: {
        marginLeft: -7,
        width: 10,
        height: 10,
    },
    textTypo: {
        
        fontWeight: "800",
        textAlign: "left",
    },
    c: {
        width: 10,
        marginLeft: -4,

        height: 26,
        fontSize: FontSize.size_xs,
        fontWeight: "300",
        color: Color.colorBlack,
        textAlign: "left",
        letterSpacing: 0.1,
    },
    ellipseParent: {
        width: 95,
        padding: Padding.p_12xs,
        marginLeft: -5,
        height: 97,
        flexDirection: "row",
        overflow: "hidden",
    },
    text: {
        width: 50,
        height: 20,
        fontSize: FontSize.size_xs,
        
        fontWeight: "300",
        color: Color.colorBlack,
        textAlign: "left",
        letterSpacing: 0.1,
    },
    nhit: {
        width: 65,
        height: 17,
    },
    nhitParent: {
        height: 50,
        flexWrap: "wrap",
        paddingHorizontal: 0,
        width: 100,
        marginLeft: 13,
    },
    parentSpaceBlock1: {
        paddingVertical: Padding.p_8xs,
        overflow: "hidden",
    },

    temperatureParent: {
        top: 213,
        paddingHorizontal: Padding.p_8xs,
        left: 18,
        alignItems: "center",
        position: "absolute",
    },
    medium: {
        width: 50,
        height: 20,
    },
    nhitTypo: {
        fontSize: FontSize.size_xs,
        
        fontWeight: "300",
        color: Color.colorBlack,
        textAlign: "left",
        letterSpacing: 0.1,
    },
    sun: {
        width: 73,
        height: 17,
    },
    parentSpaceBlock1: {
        paddingVertical: Padding.p_8xs,
        overflow: "hidden",
    },
    sunParent: {
        paddingHorizontal: Padding.p_6xs,
        marginLeft: 10,
        alignItems: "flex-end",
    },
    parentFlexBox: {
        alignItems: "center",
        justifyContent: "center",
    },
    sunFillParent: {
        top: 142,
        left: 18,
        position: "absolute",
        flexDirection: "row",
        overflow: "hidden",
    },
    freDetailTypo: {
        marginTop: 4,
        height: 20,
        fontSize: FontSize.size_xs,
        
        fontWeight: "300",
        color: Color.colorBlack,
        textAlign: "left",
        letterSpacing: 0.1,
    },
    plantImg: {
        top: -22,
        left: 145,
        width: 246,
        height: 360,
        position: "absolute",
    },
    namePlant: {
        width: 200,
    },
    namePlantTypo: {
        height: 32,
        fontWeight: "800",
        letterSpacing: 0.2,
        top: 16,
        left: 18,
        color: Color.colorBlack,
        fontSize: FontSize.size_5xl,
        textAlign: "left",
        position: "absolute",
    },
    waterParent: {
        top: 67,
        left: 14,
        paddingHorizontal: Padding.p_9xs,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
    },
    parentSpaceBlock1: {
        paddingVertical: Padding.p_8xs,
        overflow: "hidden",
    },
    infor: {
        marginLeft: 13,
        overflow: "hidden",
    },
    frequency: {
        width: 112,
        height: 16,
        fontSize: FontSize.size_xs,
        
        fontWeight: "300",
        color: Color.colorBlack,
        textAlign: "left",
        letterSpacing: 0.1,
    },
    freDetail: {
        width: 200,
    },
    plantImgwrapper: {
        left: 10,
        top: 20,
        backgroundColor: Color.colorHoneydew,
        height: 360,
        width: 359,
        borderRadius: Border.br_3xs,
        overflow: "hidden",
    },
});

export default MainListPlants;
