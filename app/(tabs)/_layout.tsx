import { Tabs } from "expo-router";
import { Component, House, UserRound } from "lucide-react-native";
import { View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#aa1f1f", // 🔴 highlight color

        tabBarInactiveTintColor: "#aaa",
        tabBarStyle: {
          backgroundColor: "#fff",
          height: 70,
          borderTopWidth: 0,
          elevation: 2,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: 2,
        },
      }}
    >
      <Tabs.Screen
        name="contributions"
        options={{
          title: "Contributions",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#fce8e8" : "transparent",
                borderRadius: 50,
                padding: 10,
              }}
            >
              <Component color={color} size={26} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#fce8e8" : "transparent",
                borderRadius: 50,
                padding: 10,
              }}
            >
              <House color={color} size={26} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#fce8e8" : "transparent",
                borderRadius: 50,
                padding: 10,
              }}
            >
              <UserRound color={color} size={26} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
