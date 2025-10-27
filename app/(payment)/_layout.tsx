import { Stack } from "expo-router";

export default function PaymentLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        name="payment"
        options={{
          headerShown: false,
          animation: "slide_from_left",
        }}
      />
    </Stack>
  );
}
