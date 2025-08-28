import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-5xl text-dark-200">Hello, Expo Router!</Text>
      <Link href="/onboarding" className="mt-5 text-primary-500">
        Go to Onboarding
      </Link>
      <Link href="/movie/avengers" className="mt-5 text-primary-500">
        Avengers Movie Details
      </Link>
    </View>

  );
}
