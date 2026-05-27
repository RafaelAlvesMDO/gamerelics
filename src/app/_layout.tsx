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
      {/* Grupo de autenticação */}
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />

      {/* Grupo das tabs */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* Ecrãs de stack — sem tab bar */}
      <Stack.Screen name="gameSection" options={{ headerShown: false }} />
      <Stack.Screen name="gameForms" options={{ headerShown: false }} />
      <Stack.Screen name="gameDetails" options={{ headerShown: false }} />
    </Stack>
  );
}