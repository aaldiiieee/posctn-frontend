import { Colors } from "@shared/constants/themeConstants";
import { Text, View } from "react-native";

export default function CreateStaff() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.background.primary,
      }}
    >
      <Text>Create Staff Screen</Text>
    </View>
  )
}