import { BellDot } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
interface Props {
  userName: string;
}

export default function Heading({ userName }: Props) {
  return (
    <SafeAreaView edges={["top", "left", "right"]} className="p-4 md:p-0 bg-[]">
      <View className="flex flex-row w-full justify-between items-center">
        <View className="flex flex-row gap-4 items-center">
          <View className="h-12 md:h-10 md:w-10 w-12 rounded-full bg-[#aa1f1f] flex items-center justify-center">
            <Text className="text-white text-2xl md:text-2xl">
              {userName.charAt(0)}
            </Text>
          </View>
          <View>
            <Text className="text-2xl md:text-xl font-semibold font-quera">
              {userName ? `Hello, ${userName}👋` : "Hello, Welcome 👋"}
            </Text>
            <Text className="md:text-sm text-neutral-500 font-steticareg">
              Track your contributions here
            </Text>
          </View>
        </View>
        <View className="flex-row gap-2 items-center">
          <View className="">
            <TouchableOpacity className="h-12 w-12 rounded-xl md:h-10 md:w-10 bg-white shadow-2xl md:shadow-sm flex items-center justify-center">
              <BellDot color={"#aa1f1f"} height={18} width={18} />
            </TouchableOpacity>
          </View>
          {/* <View className="">
            
            <Menu />
          </View> */}
        </View>
      </View>
    </SafeAreaView>
  );
}
