import { HapticTab } from "@shared/components/HapticTab";
import { IconSymbol } from "@shared/components/ui/IconSymbol";
import { Colors } from "@shared/constants/themeConstants";
import { useAuth } from "@shared/context/AuthContext";
import { useColorScheme } from "@shared/hooks/useColorScheme";
import { Redirect, Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Redirect href="/(auth)/login" />;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
        tabBarButton: HapticTab,
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
    </Tabs>
  );
}
