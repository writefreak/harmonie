import NavHeader from "@/components/ui/navHeader";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TopUp() {
  return (
    <View className="flex-1 bg-white">
      <NavHeader>Top Up your wallet</NavHeader>
      <SafeAreaView edges={["top", "left", "right"]}></SafeAreaView>
    </View>
  );
}
