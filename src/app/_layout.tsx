import { colorsPalette } from "@/src/themes/colorsPalette";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colorsPalette.background,
        },
        headerTintColor: colorsPalette.primary,
        contentStyle: {
          backgroundColor: colorsPalette.background,
        },
      }}
    >
      {/* Auth Screens */}
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />

      {/* Tabs Screens */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* Screen on Stack */}
      <Stack.Screen name="gameSection" options={{ headerShown: false }} />
      <Stack.Screen name="gameForms" options={{ headerShown: false }} />
      <Stack.Screen name="gameDetails" options={{ headerShown: false }} />
    </Stack>
  );
}