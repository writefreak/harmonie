import GroupCard from "@/components/ui/groupCard";
import NavHeader from "@/components/ui/navHeader";
import SearchBar from "@/components/ui/searchBar";
import React, { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const groups = [
  {
    id: 1,
    imageUrl: require("../../assets/images/travel.jpg"),
    groupName: "Vee's Luxury",
    memberNo: 20,
  },
  {
    id: 2,
    imageUrl: require("../../assets/images/travel.jpg"),
    groupName: "Rhythm Nation",
    memberNo: 15,
  },
  {
    id: 3,
    imageUrl: require("../../assets/images/travel.jpg"),
    groupName: "CineTalk",
    memberNo: 32,
  },
  {
    id: 4,
    imageUrl: require("../../assets/images/travel.jpg"),
    groupName: "Groove Society",
    memberNo: 41,
  },
  {
    id: 5,
    imageUrl: require("../../assets/images/travel.jpg"),
    groupName: "FilmLords",
    memberNo: 24,
  },
  {
    id: 6,
    imageUrl: require("../../assets/images/travel.jpg"),
    groupName: "Showtime Crew",
    memberNo: 19,
  },
  {
    id: 7,
    imageUrl: require("../../assets/images/travel.jpg"),
    groupName: "ArtVerse",
    memberNo: 27,
  },
  {
    id: 8,
    imageUrl: require("../../assets/images/travel.jpg"),
    groupName: "Spotlight Squad",
    memberNo: 11,
  },
  {
    id: 9,
    imageUrl: require("../../assets/images/travel.jpg"),
    groupName: "Stage Masters",
    memberNo: 36,
  },
  {
    id: 10,
    imageUrl: require("../../assets/images/travel.jpg"),
    groupName: "Media Hive",
    memberNo: 29,
  },
  {
    id: 11,
    imageUrl: require("../../assets/images/travel.jpg"),
    groupName: "The Beat Lounge",
    memberNo: 25,
  },
  {
    id: 12,
    imageUrl: require("../../assets/images/travel.jpg"),
    groupName: "Film Freaks",
    memberNo: 17,
  },
  {
    id: 13,
    imageUrl: require("../../assets/images/travel.jpg"),
    groupName: "Hype Nation",
    memberNo: 30,
  },
  {
    id: 14,
    imageUrl: require("../../assets/images/travel.jpg"),
    groupName: "The A-List",
    memberNo: 22,
  },
  {
    id: 15,
    imageUrl: require("../../assets/images/travel.jpg"),
    groupName: "Star Chasers",
    memberNo: 34,
  },
  {
    id: 16,
    imageUrl: require("../../assets/images/travel.jpg"),
    groupName: "Screen Squad",
    memberNo: 28,
  },
  {
    id: 17,
    imageUrl: require("../../assets/images/travel.jpg"),
    groupName: "SoundStream",
    memberNo: 16,
  },
  {
    id: 18,
    imageUrl: require("../../assets/images/travel.jpg"),
    groupName: "Club Echo",
    memberNo: 33,
  },
  {
    id: 19,
    imageUrl: require("../../assets/images/travel.jpg"),
    groupName: "The Groove Lab",
    memberNo: 21,
  },
  {
    id: 20,
    imageUrl: require("../../assets/images/travel.jpg"),
    groupName: "Pulse Circle",
    memberNo: 38,
  },
];

export default function Entertainment() {
  const [showAll, setShowAll] = useState(false);
  const visibleGroups = showAll ? groups : groups.slice(0, 5);

  return (
    <View className="flex-1 bg-white">
      <NavHeader>Entertainment Groups</NavHeader>
      <SafeAreaView edges={["top", "left", "right"]} style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="p-4">
            <View className="h-[200px]">
              <ImageBackground
                source={require("../../assets/images/flex.jpg")}
                imageStyle={{ borderRadius: 30 }}
                className="h-full w-full"
              >
                <View className="absolute inset-0 bg-black/50 rounded-[26px] justify-center">
                  <View className="p-4 gap-10">
                    <Text className="text-white font-stetica text-3xl w-56">
                      Entertainment Groups
                    </Text>
                    <Text className="text-white font-steticareg w-48">
                      30+ Total Groups
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </View>

            <View className="pt-10">
              <View className="flex-row justify-between items-center">
                <Text className="text-lg font-stetica">Find Groups Here</Text>

                {groups.length > 5 && (
                  <TouchableOpacity onPress={() => setShowAll(!showAll)}>
                    <Text className="text-[#aa1f1f] font-stetica text-base">
                      {showAll ? "See Less" : "See All"}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>

              <SearchBar
                placeholder="Search for groups..."
                onChangeText={(val) => console.log("Searching:", val)}
                className="mt-4 mb-6"
              />
            </View>

            <View className="gap-4 pb-10">
              {visibleGroups.map((group) => (
                <GroupCard
                  key={group.id}
                  imageUrl={group.imageUrl}
                  groupName={group.groupName}
                  memberNo={group.memberNo}
                  onJoin={() => console.log(`Joined ${group.groupName}`)}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
