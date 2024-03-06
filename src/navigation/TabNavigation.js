import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import WishlistScreen from "../screens/WishlistScreen";
import MybookScreen from "../screens/MyBooksScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from "react-native/Libraries/NewAppScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (


        //底部TabNav

        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarInactiveTintColor: "#666",
            tabBarActiveTintColor: "#6600EE",
            
            tabBarStyle: {
                height: 56,
                paddingVertical: 8,
                
                
            },
            tabBarIconStyle: {
                width: 24,
                height: 24,
                
                
            },
            tabBarLabelStyle: {
                fontSize: 12,
                fontFamily: "Roboto",
                fontWeight: "500",
                marginBottom:8,
            },

        }}>
            <Tab.Screen name='Home' component={HomeScreen}
                options={{

                    //Home
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 12, fontWeight:'bold',marginBottom:7}}>Home</Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" size={size} color={color} />
                    ),


                }}
            />

            <Tab.Screen name='Wishlist' component={WishlistScreen}
                options={{

                    //wishlist
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 12,marginBottom:7}}>Wishlist</Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="bookmark" size={size} color={color} />
                    ),
                }}

            />
            <Tab.Screen name='My books' component={MybookScreen}

                options={{

                    //mybooks
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 12,marginBottom:7 }}>My books</Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="book-open" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>


    )
}
const styles = StyleSheet.create({

});