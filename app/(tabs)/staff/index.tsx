import StaffCard from "@features/staff/components/StaffCard";
import { useGetStaff } from "@features/staff/hooks/useGetStaff";
import MainLayout from "@shared/components/layouts/MainLayout";
import { Colors, FontSizes } from "@shared/constants/themeConstants";
import { Text, View } from "react-native";

export default function Staff() {
  const { data } = useGetStaff();

  return (
    <MainLayout styles={{ padding: 20 }}>
      <View style={{ gap: 5 }}>
        <Text
          style={{
            fontSize: FontSizes.md,
            color: Colors.text.primary,
            fontWeight: "bold",
            letterSpacing: 1,
          }}
        >
          RUANG ADMINISTRASI
        </Text>
        <Text
          style={{
            fontSize: FontSizes["4xl"],
            color: Colors.text.secondary,
            fontWeight: "bold",
          }}
        >
          Daftar Staff
        </Text>
      </View>
      <View style={{ marginTop: 20, gap: 12 }}>
        {data?.data.map((staff) => (
          <StaffCard key={staff.id} staff={staff} />
        ))}
      </View>
    </MainLayout>
  );
}
