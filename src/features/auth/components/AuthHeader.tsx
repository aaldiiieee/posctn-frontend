import { StyleSheet, Text, View } from "react-native";
import { Colors, FontSizes } from "@shared/constants/themeConstants";

export default function AuthHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  headerWrapper: {
    justifyContent: "center",
    maxWidth: 300,
    gap: 10, 
  },
  title: {
    fontSize: FontSizes['4xl'],
    fontWeight: "800",
    color: Colors.light.text.secondary,
  },
  subtitle: {
    fontSize: FontSizes.lg,
    color: '#3F484D',
  },
});
