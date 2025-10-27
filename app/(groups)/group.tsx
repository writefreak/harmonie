import NavHeader from "@/components/ui/navHeader";
import { router } from "expo-router";
import { Plus } from "lucide-react-native";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Group() {
  return (
    <View className="flex-1 bg-white">
      <NavHeader>Find Groups</NavHeader>
      <SafeAreaView edges={["top", "left", "right"]}>
        <View className="p-4">
          <View className="gap-1 pb-10">
            <Text className="text-xl font-stetica text-[#aa1f1f]">
              Explore interesting groups here
            </Text>
            <Text className="text-sm font-steticareg text-gray-600">
              Discover groups that match your taste here
            </Text>
          </View>
          <View className="flex-row flex-wrap justify-between gap-4">
            {category.map((c) => (
              <TouchableOpacity
                onPress={() => router.push(c.link as any)}
                key={c.id}
                className="h-40 w-[48%] rounded-xl overflow-hidden"
              >
                <ImageBackground
                  source={c.image}
                  imageStyle={{ borderRadius: 12 }}
                  className="h-full w-full"
                >
                  <View className="absolute inset-0 bg-black/50 items-center justify-center rounded-xl">
                    <Text className="text-white font-stetica text-lg">
                      {c.text}
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </View>
          <View className="pt-24">
            <View className="bg-[#aa1f1f] rounded-2xl p-6 relative overflow-hidden">
              <View className="absolute w-40 h-40 bg-white/10 rounded-full -right-10 -top-10" />
              <View className="absolute w-32 h-32 bg-white/10 rounded-full -bottom-10 -left-10" />

              <View className="items-center">
                <Text className="text-white font-stetica text-lg text-center mb-2">
                  Can’t find your perfect group?
                </Text>
                <Text className="text-gray-200 font-steticareg text-center text-sm mb-5">
                  Be the spark. Start a community that fits your vibe.
                </Text>

                <View className="pt-3">
                  <TouchableOpacity
                    onPress={() => router.push("/(groups)/newGroup")}
                    className="bg-white px-6 py-3 rounded-full flex-row items-center gap-2"
                  >
                    <Plus strokeWidth={1.5} color={"#aa1f1f"} />
                    <Text className="text-[#aa1f1f] font-stetica text-base">
                      Create Your Own Group
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const category = [
  {
    id: 1,
    image: require("../../assets/images/flex.jpg"),
    text: "Entertainment",
    link: "/(groups)/entertainment",
  },
  {
    id: 2,
    image: require("../../assets/images/shopping.jpg"),
    text: "Fashion & Lifestyle",
    link: "/(groups)/fashion",
  },
  {
    id: 3,
    image: require("../../assets/images/travel.jpg"),
    text: "Travelling",
    link: "/(groups)/travelling",
  },
  {
    id: 4,
    image: require("../../assets/images/bills.jpg"),
    text: "Bills & Finance",
    link: "/(groups)/bills",
  },
];
