import { Image, ScrollView, Text, View } from "react-native";

export default function TopContribute() {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 16, paddingRight: 16 }}
      >
        {contributors.map((c) => (
          <View
            key={c.id}
            className="w-40 bg-white border border-gray-100 rounded-2xl p-4 items-center shadow-sm"
          >
            <View className="h-16 w-16 rounded-full overflow-hidden mb-3">
              <Image
                source={c.image}
                className="h-full w-full"
                resizeMode="cover"
              />
            </View>
            <Text className="font-stetica text-gray-800 text-base">
              {c.name}
            </Text>
            <Text className="font-steticareg text-gray-500 text-sm">
              {c.level}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const contributors = [
  {
    id: 1,
    name: "Vee Brown",
    level: "Platinum",
    image: require("../assets/images/volunteer.jpg"),
  },
  {
    id: 2,
    name: "Kelvin Hart",
    level: "Gold",
    image: require("../assets/images/volunteer.jpg"),
  },
  {
    id: 3,
    name: "Renee Obi",
    level: "Silver",
    image: require("../assets/images/volunteer.jpg"),
  },
  {
    id: 4,
    name: "Tayo S.",
    level: "Bronze",
    image: require("../assets/images/volunteer.jpg"),
  },
  {
    id: 5,
    name: "Faith Daniels",
    level: "Bronze",
    image: require("../assets/images/volunteer.jpg"),
  },
];
