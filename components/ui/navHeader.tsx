import { useNavigation } from "@react-navigation/native";
import { ChevronLeft } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

interface Props {
  title?: string;
  showBack?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export default function NavHeader({
  title = "",
  showBack = true,
  children,
  className,
}: Props) {
  const navigation = useNavigation();

  return (
    <View className="flex-row bg-white px-4 pb-6 pt-14  fixed">
      {showBack && navigation.canGoBack() && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className={`${className}p-1 bg-white h-12 w-12 flex-col items-center justify-center rounded-full`}
        >
          <ChevronLeft size={24} color="#aa1f1f" />
        </TouchableOpacity>
      )}

      <View className="absolute  left-0 right-0 top-16 items-center justify-center flex-1">
        <Text className="text-[#aa1f1f] font-quera text-lg">{children}</Text>
      </View>
    </View>
  );
}
