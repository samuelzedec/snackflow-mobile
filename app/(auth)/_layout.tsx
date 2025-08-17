import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        title: "",
        headerStyle: {
          backgroundColor: "#FB6A00",
        },
        headerBackTitle: "Home",
        headerBackTitleStyle: {
          fontFamily: "Helvetica-Bold",
          fontSize: 16,
        },
        headerShadowVisible: false,
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="register" />
      <Stack.Screen name="login" />
    </Stack>
  );
}
