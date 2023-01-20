


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from '../screens/HomeScreen';
import { Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Products from "../screens/Products";
import ProductDetails from "../screens/ProductDetailsScreen";
import ProductEdition from "../screens/ProductEdition";



export default function Navigation() {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    )
}

const Stack = createNativeStackNavigator();
function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Root"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="product-detail"
                component={ProductDetails}
                options={{
                    title: 'Product Detail'
                }}
            />

            <Stack.Screen
            name="product-edition"
            component={ProductEdition}
            options={{
                title: "Product Edition"
            }}
            />
        </Stack.Navigator>
    )
}

const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
    return (
        <BottomTab.Navigator initialRouteName="Home">
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <FontAwesome
                            name="home"
                            size={size}
                            color={color}
                        />
                    }
                }}
            />
            <BottomTab.Screen
                name="Planner"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Entypo
                            name="add-to-list"
                            size={size}
                            color={color}
                        />
                    }
                }}
            />
            <BottomTab.Screen
                name="Products"
                component={Products}
            />
        </BottomTab.Navigator>
    )
}