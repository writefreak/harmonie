import { Stack } from "expo-router";

export default function GroupLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "slide_from_left",
      }}
    >
      <Stack.Screen
        name="groups"
        options={{
          headerShown: false,
          animation: "slide_from_left",
        }}
      />
    </Stack>
  );
}
