import BottomSheet from "@/components/ui/bottomSheet";
import NavHeader from "@/components/ui/navHeader";
import { router } from "expo-router";
import {
  ChevronRight,
  CircleUserRound,
  CreditCard,
  LogOut,
  MessageCircleQuestionMark,
  Settings,
  Settings2,
} from "lucide-react-native";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  const [showLogoutSheet, setShowLogoutSheet] = useState(false);

  return (
    <View className="bg-white flex-1">
      <NavHeader>Profile Settings</NavHeader>
      <SafeAreaView edges={["top", "left", "right"]}>
        <View className="p-4">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-4">
              <View className="h-14 w-14 rounded-full bg-[#aa1f1f] flex items-center justify-center">
                <Text className="text-white text-2xl font-stetica">H</Text>
              </View>
              <View className="gap-1">
                <Text className="font-stetica text-xl">Endwell Heritage</Text>
                <Text className="font-steticareg text-gray-600">
                  endy123@gmail.com
                </Text>
              </View>
            </View>

            {/* Logout icon triggers bottom sheet */}
            <TouchableOpacity onPress={() => setShowLogoutSheet(true)}>
              <LogOut color={"gray"} />
            </TouchableOpacity>
          </View>

          {/* Profile links */}
          <View className="pt-10 gap-6">
            {links.map((l) => (
              <TouchableOpacity
                key={l.id}
                onPress={() => router.push(l.link as any)}
                className="flex-row justify-between border border-gray-100 p-5 rounded-full items-center"
              >
                <View className="flex-row gap-4 items-center">
                  {l.icon}
                  <Text className="font-steticareg text-lg">{l.title}</Text>
                </View>
                <ChevronRight strokeWidth={1.5} color={"gray"} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </SafeAreaView>

      {/* Bottom Sheet for Logout */}
      <BottomSheet
        isVisible={showLogoutSheet}
        onClose={() => setShowLogoutSheet(false)}
      >
        <LogoutPrompt onClose={() => setShowLogoutSheet(false)} />
      </BottomSheet>
    </View>
  );
}

function LogoutPrompt({ onClose }: { onClose: () => void }) {
  const handleLogout = () => {
    // Clear session logic here, e.g. AsyncStorage.clear()
    onClose();
    router.replace("/(auth)/login");
  };

  return (
    <View className="items-center gap-6">
      <Text className="text-xl font-stetica text-[#aa1f1f] text-center">
        Are you sure you want to logout?
      </Text>

      <View className="flex-row justify-between w-full mt-3">
        <TouchableOpacity
          onPress={onClose}
          className="flex-1 bg-gray-100 py-3 rounded-full mr-2"
        >
          <Text className="text-gray-600 text-center font-steticareg">
            Cancel
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleLogout}
          className="flex-1 bg-[#aa1f1f] py-3 rounded-full ml-2"
        >
          <Text className="text-white text-center font-stetica">Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const links = [
  {
    id: 1,
    link: "",
    title: "User Profile",
    icon: (
      <CircleUserRound
        color={"gray"}
        strokeWidth={1.5}
        height={25}
        width={25}
      />
    ),
  },
  {
    id: 2,
    link: "",
    title: "Privacy Settings",
    icon: <Settings color={"gray"} strokeWidth={1.5} height={25} width={25} />,
  },
  {
    id: 3,
    link: "",
    title: "Payment",
    icon: (
      <CreditCard color={"gray"} strokeWidth={1.5} height={25} width={25} />
    ),
  },
  {
    id: 4,
    link: "/theme",
    title: "Theme and Appearance",
    icon: <Settings2 color={"gray"} strokeWidth={1.5} height={25} width={25} />,
  },
  {
    id: 5,
    link: "",
    title: "Help & Support",
    icon: (
      <MessageCircleQuestionMark
        color={"gray"}
        strokeWidth={1.5}
        height={25}
        width={25}
      />
    ),
  },
];
