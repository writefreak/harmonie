import Heading from "@/components/home/heading";
import NewsBanner from "@/components/home/newBanner";
import TopContribute from "@/components/topContribute";
import { router } from "expo-router";
import {
  CalendarSearch,
  ChevronRight,
  HandCoins,
  Plus,
} from "lucide-react-native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView className="bg-white flex-1" edges={["top", "left", "right"]}>
      <View className="bg-white pb-1">
        <Heading userName="Heritage" />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <View className="p-4 pt-14">
          <View className="bg-[#aa1f1f] w-full rounded-xl p-5 py-8 gap-4 overflow-hidden">
            <View className="absolute top-0 left-0 h-32 w-32 bg-white/10 rounded-full blur-3xl" />
            <View className="absolute bottom-0 right-0 h-32 w-32 bg-white/10 rounded-full blur-3xl" />

            <Text className="text-white font-steticareg text-lg">
              Your Harmonie Wallet balance
            </Text>
            <View className="justify-end">
              <Text className="text-white text-3xl font-stetica">
                ₦ 40,000.00
              </Text>
            </View>
          </View>
        </View>

        <View className="p-4 flex-row justify-between">
          {icons.map((i) => (
            <TouchableOpacity
              onPress={() => router.push(i.link as any)}
              key={i.id}
              className="border border-gray-300 rounded-xl p-3 w-36 items-center"
            >
              <View className="items-center gap-2">
                {i.icon}
                <Text className="font-steticareg text-gray-500">{i.text}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View className="p-4">
          <NewsBanner />
        </View>
        <View className="p-4">
          <View className="py-6">
            <Text className="font-stetica text-xl">Suggested Groups</Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 16, paddingRight: 16 }}
          >
            {groups.map((g) => (
              <View
                key={g.id}
                className="p-4 border border-gray-100 rounded-xl w-[400px]"
              >
                <View className="pt-5 gap-3">
                  <View className="h-[200px] rounded-xl overflow-hidden">
                    <Image
                      source={g.image}
                      className="h-full w-full rounded-xl"
                      resizeMode="cover"
                    />
                  </View>

                  <View className="pt-5 gap-3">
                    <Text className="font-stetica text-lg">{g.name}</Text>
                    <Text className="font-steticareg text-gray-600 text-sm">
                      {g.description}
                    </Text>
                  </View>

                  <View className="pt-5">
                    <TouchableOpacity className="bg-[#aa1f1f] py-3 rounded-full items-center">
                      <Text className="text-white font-stetica">
                        Join Group
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>

          <View className="p-4">
            <View className="py-6 flex-row justify-between items-center">
              <Text className="font-stetica text-xl">Top Contributors</Text>
              <TouchableOpacity>
                <Text className="font-steticareg text-[#aa1f1f] text-sm">
                  View all
                </Text>
              </TouchableOpacity>
            </View>
            <TopContribute />
          </View>
        </View>
        <View className="p-4">
          <TouchableOpacity
            onPress={() => router.push("/(groups)/group")}
            className="flex-row items-center justify-between  rounded-xl px-5 py-4  bg-[#fff5f5] border border-[#ffcccc]"
          >
            <Text className="text-[#aa1f1f] text-lg font-steticareg">
              Start Contributing
            </Text>
            <ChevronRight color={"#aa1f1f"} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const icons = [
  {
    id: 1,
    icon: <Plus color="gray" />,
    text: "Top-up",
    link: "",
  },
  {
    id: 2,
    icon: <CalendarSearch color="gray" />,
    text: "Recent",
    link: "",
  },

  {
    id: 3,
    icon: <HandCoins color="gray" />,
    text: "Groups",
    link: "/(groups)/group",
  },
];

const groups = [
  {
    id: 1,
    name: "Vee's Luxury",
    description: `Vee’s Luxury is a trusted contribution group where members pool funds for monthly payouts, helping each person reach personal goals like business growth, travel plans, or luxury purchases.`,
    image: require("../../../assets/images/fund.jpg"),
  },
  {
    id: 2,
    name: "Elite Savers",
    description: `Elite Savers is a premium savings circle for professionals who want to build wealth steadily through disciplined monthly contributions and transparent financial tracking.`,
    image: require("../../../assets/images/saving.jpg"),
  },
  {
    id: 3,
    name: "Gold Circle",
    description: `Gold Circle is designed for entrepreneurs aiming to fund business expansions, bulk purchases, or product launches through collective savings and rotating payouts.`,
    image: require("../../../assets/images/volunteer.jpg"),
  },
  {
    id: 4,
    name: "Dream Builders",
    description: `Dream Builders helps members achieve long-term dreams like property ownership, car purchases, or education funding through consistent group contributions.`,
    image: require("../../../assets/images/grow.jpg"),
  },
  {
    id: 5,
    name: "Travel Funders",
    description: `Travel Funders is a savings group for explorers and travel lovers who contribute monthly toward planned trips, vacations, and adventure goals.`,
    image: require("../../../assets/images/donate.jpg"),
  },
  {
    id: 6,
    name: "Luxury Goals",
    description: `Luxury Goals brings together ambitious individuals who want to enjoy the finer things in life, saving collectively toward high-end purchases or lifestyle experiences.`,
    image: require("../../../assets/images/give.jpg"),
  },
];
