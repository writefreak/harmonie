import NavHeader from "@/components/ui/navHeader";
import { Link, router } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const inputs = [
  {
    id: 3,
    label: "Email",
    placeholder: "Enter your Email",
  },
  {
    id: 4,
    label: "Password",
    placeholder: "Enter your Password",
  },
];

export default function Login() {
  return (
    <View className="bg-white flex-1">
      <NavHeader> Log into your Account</NavHeader>
      <SafeAreaView edges={["right", "left", "top"]}>
        <View className=" p-4">
          {/* Header */}
          <View className="gap-2 pb-10">
            <Text className="text-[#aa1f1f] text-4xl font-quera">
              Login Here
            </Text>
            <View className="flex-row items-center gap-2">
              <Text className="text-gray-500 font-quera text-xl">
                Don't have an account?
              </Text>
              <Link href={"/(auth)/signup"}>
                <Text className="text-[#aa1f1f] font-quera text-xl">
                  Signup
                </Text>
              </Link>
            </View>
          </View>

          {/* Inputs */}
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
                  Log into my account
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
