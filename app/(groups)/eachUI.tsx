import { Image, Text, TouchableOpacity } from "react-native";

interface Group {
  id: number;
  name: string;
  members: number;
  category: string;
  image: string;
  description: string;
  isPrivate: boolean;
}

interface GroupCardProps {
  group: Group;
}

export default function GroupCard({ group }: GroupCardProps) {
  return (
    <TouchableOpacity className="rounded-2xl bg-white shadow-md p-4 mb-4">
      <Image
        source={{ uri: group.image }}
        className="w-full h-40 rounded-2xl mb-3"
        resizeMode="cover"
      />
      <Text className="text-xl font-bold">{group.name}</Text>
      <Text className="text-gray-500">{group.members} members</Text>

      <Text
        className={`mt-1 text-sm ${
          group.isPrivate ? "text-red-500" : "text-green-500"
        }`}
      >
        {group.isPrivate ? "Private Group" : "Public Group"}
      </Text>

      <Text className="text-gray-700 mt-2">{group.description}</Text>
    </TouchableOpacity>
  );
}
