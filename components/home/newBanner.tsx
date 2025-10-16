import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function NewsBanner() {
  const news = [
    "🔔 New group payout cycle starts next week!",
    "💰 Vee’s Luxury just hit ₦2 million in contributions!",
    "🚀 Gold Circle payout happening this Friday.",
    "🎉 Dream Builders is now open for new members.",
    "📊 Track your savings growth from the Profile tab.",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % news.length);
    }, 4000); // switches every 4s
    return () => clearInterval(timer);
  }, []);

  return (
    <View className=" mt-3 bg-[#fff5f5] border border-[#ffcccc] rounded-xl p-3 flex-row items-center justify-between">
      <Text className="text-[#aa1f1f] font-steticareg text-sm flex-1">
        {news[index]}
      </Text>
    </View>
  );
}
