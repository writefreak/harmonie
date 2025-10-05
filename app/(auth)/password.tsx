import NavHeader from "@/components/ui/navHeader";
import { router } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const inputs = [
  {
    id: 3,
    label: "New password",
    placeholder: "Enter your password",
  },
  {
    id: 4,
    label: "Confirm password",
    placeholder: "Confirm your Password",
  },
];

export default function Password() {
  return (
    <View className="bg-white flex-1">
      <NavHeader> Create New Password</NavHeader>
      <SafeAreaView edges={["right", "left", "top"]}>
        <View className=" p-4">
          {/* Header */}
          <View className="gap-2 pb-10">
            <Text className="text-[#aa1f1f] text-4xl font-quera">
              Create Password
            </Text>
            <View className="flex-row items-center gap-2 pt-2">
              <Text className="text-gray-500 font-quera text-lg w-96">
                Enter a strong, six digit password to secure your Harmonie
                account.
              </Text>
            </View>
          </View>
          <View className="gap-4">
            {inputs.map((i) => (
              <View key={i.id} className="gap-2 pt-2">
                <Text className="text-gray-500 font-quera text-base">
                  {i.label}
                </Text>
                <TextInput
                  className="py-4 bg-gray-100 px-4 rounded-full text-sm"
                  placeholder={i.placeholder}
                  placeholderTextColor="#9ca3af"
                  keyboardType={
                    i.label === "Email" ? "email-address" : "default"
                  }
                />
              </View>
            ))}
            <View className="pt-10">
              <TouchableOpacity
                onPress={() => router.push("/(auth)/otpScreen")}
                className="bg-[#aa1f1f] h-12  rounded-full w-full items-center justify-center"
              >
                <Text className="text-xl text-white font-quera">
                  Create Password
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
