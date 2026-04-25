import { Colors } from "@shared/constants/themeConstants";
import { StyleProp, View, ViewStyle } from "react-native";

export default function MainLayout({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles?: StyleProp<ViewStyle>;
}) {
  return (
    <View
      style={[{ flex: 1, backgroundColor: Colors.background.primary }, styles]}
    >
      {children}
    </View>
  );
}
