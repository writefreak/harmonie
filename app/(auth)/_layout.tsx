import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "slide_from_left",
      }}
    >
      <Stack.Screen
        name="auth"
        options={{
          headerShown: false,
          animation: "slide_from_left",
        }}
      />
    </Stack>
  );
}
