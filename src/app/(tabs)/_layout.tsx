import { colorsPalette } from "@/src/themes/colorsPalette";
import { Tabs } from "expo-router";
import { CircleUser, Gamepad2 } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colorsPalette.background }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colorsPalette.primary,
          tabBarStyle: {
            backgroundColor: colorsPalette.background,
            borderTopWidth: 0,
            height: 55,
            paddingBottom: 5,
          },
          tabBarLabelStyle: {
            fontSize: 11,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Início",
            tabBarIcon: ({ color, size }) => (
              <Gamepad2 color={color} size={size} />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Perfil",
            tabBarIcon: ({ color, size }) => (
              <CircleUser color={color} size={size} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}