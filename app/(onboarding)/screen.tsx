import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Screen() {
  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      className="flex-1 bg-white justify-center"
    >
      <View className=" items-center justify-center">
        <View className="h-56 w-56">
          <Image
            source={require("../../assets/images/Harmonie.png")}
            className="h-full w-full"
          />
        </View>
      </View>
      <View className="pt-36 items-center just">
        <TouchableOpacity className="bg-[#aa1f1f] h-10 justify-center items-center w-48 rounded-full">
          <Text className="text-white text-lg">Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
