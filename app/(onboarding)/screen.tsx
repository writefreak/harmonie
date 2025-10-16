import { Link, router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Screen() {
  return (
    <View className="flex-1 bg-[#aa1f1f]">
      <View className="items-center justify-center h-full">
        <View className="h-[400px] w-[400px] rounded-xl  items-center justify-center mb-[400px]">
          <Image
            source={require("../../assets/images/Harmonie-white.png")}
            className="h-full w-full"
            resizeMode="contain"
          />
        </View>
      </View>
      {/* White overlay section */}
      <View className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[40px] px-6 pt-16 h-[50%] pb-8 items-center">
        <View className="w-full items-center justify-center h-full gap-20">
          <View className="items-center gap-3">
            <Text className="text-[#aa1f1f] text-[30px] font-quera text-center">
              Welcome to Harmonie
            </Text>
            <Text className="text-gray-600 font-steticareg  text-center w-80">
              Start your journey with safe, seamless and empowering group
              savings online — build trust, grow together and achieve more.
            </Text>
          </View>

          <View className="gap-6 pt-10 w-full">
            <TouchableOpacity
              onPress={() => router.push("/(auth)/signup")}
              className="bg-[#aa1f1f] h-12 rounded-full items-center justify-center"
            >
              <Text className="text-white text-xl font-quera">Get started</Text>
            </TouchableOpacity>

            <View className="flex-row gap-2 justify-center items-center">
              <Text className="text-[#aa1f1f] font-steticareg">
                Already a member?
              </Text>
              <Link href={"/(auth)/login"}>
                <Text className="text-[#aa1f1f] font-steticareg underline">
                  Login
                </Text>
              </Link>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
