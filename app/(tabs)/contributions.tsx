import NavHeader from "@/components/ui/navHeader";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Contribution() {
  return (
    <View className="flex-1 bg-white">
      <NavHeader>
        <Text>Contributions</Text>
      </NavHeader>
      <SafeAreaView></SafeAreaView>
    </View>
  );
}
