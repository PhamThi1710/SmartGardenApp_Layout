import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Home from '../screens/HomeScreen';
import Account from '../screens/AccountScreen';
import Notification from '../screens/NotificationScreen';
import Statistics from '../screens/StatisticsScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    const data = [
        {
            id:'1',
            name:'Tổng quan',
            component: Home,
            icon:'home',
        },
        {
            id:'2',
            name:'Thống kê',
            component: Statistics,
            icon:'bar-chart',
        },
        {
            id:'3',
            name:'Thông báo',
            component: Notification,
            icon:'bell',
        },
        {
            id:'4',
            name:'Tài khoản',
            component: Account,
            icon:'user',
        },
    ]
    return (
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              position: 'absolute',
              backgroundColor: '#30895E',
              height: '9%',
            },
            tabBarActiveTintColor: 'rgba(255, 255, 255, 0.5)', 
            tabBarInactiveTintColor: '#FFFFFF',
            tabBarInactiveOpacity: 1, 
          }}
        >
          {data.map((item) => (
            <Tab.Screen
              key={item.id}
              name={item.name}
              component={item.component}
              options={{
                tabBarIcon: ({ color }) => (
                  <View style={{ opacity: color === '#FFFFFF'? 1 : 0.5 }}>
                    <Feather name={item.icon} size={24} color="white" />
                  </View>
                ),
              }}
            />
          ))}
        </Tab.Navigator>
      );
    };
export default Tabs