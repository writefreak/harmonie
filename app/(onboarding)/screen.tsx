import { Link, router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Screen() {
  return (
    <View className="flex-1 bg-white">
      {/* Image area */}
      <View className="flex-1 justify-center items-center">
        <Image
          source={require("../../assets/images/collaborate.png")}
          className="h-80 w-80"
        />
      </View>

      {/* Text + buttons area */}
      <View className="flex-[0.6] px-4 pb-7 gap-7">
        <View className="gap-4 items-center">
          <Text className="text-[#aa1f1f] text-[37px] font-quera">
            Welcome to Harmonie
          </Text>
          <Text className="text-gray-600 text-lg w-80 text-center">
            Start your journey with safe, seamless and empowering group savings
            online — build trust, grow together and achieve more.
          </Text>
        </View>

        <View className="gap-6 pt-12">
          <View className="flex-row gap-3">
            <TouchableOpacity
              onPress={() => router.push("/(auth)/signup")}
              className="bg-[#aa1f1f] h-12 flex-1 rounded-full w-40 items-center justify-center"
            >
              <Text className="text-white text-xl font-quera">Get started</Text>
            </TouchableOpacity>
          </View>

          {/* Already a member */}
          <View className="flex-row gap-2 justify-center items-center">
            <Text className="text-[#aa1f1f] font-quera">Already a member?</Text>
            <Link href={"/"}>
              <Text className="text-[#aa1f1f] font-quera underline">Login</Text>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
}

const buttons = [
  {
    id: 1,
    slug: "Get started",
  },
  // {
  //   id: 2,
  //   slug: "Next",
  // },
];
