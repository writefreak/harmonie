import React from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type GroupCardProps = {
  imageUrl: ImageSourcePropType; // accepts require() or { uri: string }
  groupName: string;
  memberNo: number | string;
  onJoin?: () => void; // optional for flexibility
};

export default function GroupCard({
  imageUrl,
  groupName,
  memberNo,
  onJoin,
}: GroupCardProps) {
  return (
    <View className="border border-gray-100 p-4 rounded-xl">
      <View className="flex-row justify-between items-center">
        <View className="flex-row gap-4 items-center">
          <View className="h-20 w-20">
            <Image
              source={imageUrl}
              className="h-full w-full object-cover rounded-full"
            />
          </View>

          <View className="gap-1">
            <Text className="text-lg font-stetica">{groupName}</Text>
            <Text className="text-sm font-steticareg text-gray-600">
              {memberNo} members
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={onJoin}
          className="py-2 bg-[#aa1f1f] w-32 items-center justify-center rounded-full"
        >
          <Text className="text-white font-stetica">Join</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
