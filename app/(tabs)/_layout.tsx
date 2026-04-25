import { HapticTab } from "@shared/components/HapticTab";
import { IconSymbol } from "@shared/components/ui/IconSymbol";
import { Colors } from "@shared/constants/themeConstants";
import { useAuthContext } from "@shared/context/AuthContext";
import { Redirect, Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) return <Redirect href="/(auth)/login" />;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.tabIcon.active,
        headerShown: true,
        tabBarButton: HapticTab,
        headerStyle: {
          backgroundColor: Colors.header.primary,
        },
        tabBarStyle: {
          backgroundColor: Colors.header.primary,
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="staff"
        options={{
          title: "Daftar Staff",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person.2.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
