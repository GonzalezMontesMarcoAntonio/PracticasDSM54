import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image } from 'react-native';
import ImagePath from '../constans/ImagePath';
import HomeScreen from '../screens/HomeScreen';
import settingscreen from '../screens/SettingScreen';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
            tabBarShowLabel: false,
        }}
        >
            <Tab.Screen name = 'HomeScreen' component = {HomeScreen }
            options={{
                tabBarIcon: ({focused}) => {
                    return (
                        <Image
                        style={{
                            tintColor: focused ? 'blue': 'gray'
                        }}
                        source={ImagePath.icHomeScreen}/>
                    )
                }
            }}/>
            <Tab.Screen name = 'SettingScreen' component = { settingscreen}
            options={{
                tabBarIcon: ({focused}) => {
                    return(
                        <Image
                        style={{
                            tintColor: focused ? 'blue': 'gray'
                        }}
                        source={ImagePath.icSetting}/>
                    )
                }
            }}
            />
        </Tab.Navigator>
    );
}