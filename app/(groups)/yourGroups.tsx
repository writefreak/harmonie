import NavHeader from "@/components/ui/navHeader";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function YourGroups() {
  return (
    <View className="flex-1 bg-white">
      <NavHeader>Your Groups</NavHeader>
      <SafeAreaView edges={["top", "left", "right"]}></SafeAreaView>
    </View>
  );
}
