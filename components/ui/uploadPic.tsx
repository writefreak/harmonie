import { Upload } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

export default function UploadPic() {
  return (
    <View>
      <TouchableOpacity className="bg-gray-100 h-40 rounded-xl items-center justify-center">
        <View className="gap-3 items-center">
          <Upload strokeWidth={1.5} />
          <Text className="font-steticareg">Upload Cover image here</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
