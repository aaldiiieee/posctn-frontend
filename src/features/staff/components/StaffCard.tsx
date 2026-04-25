import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardFooter,
} from "@shared/components/ui/Card";
import { Avatar } from "@shared/components/ui/Avatar";
import { Badge } from "@shared/components/ui/Badge";
import { Text, View } from "react-native";
import { StaffResponse } from "../types/staff.types";
import { Colors, FontSizes } from "@shared/constants/themeConstants";
import { convertDate } from "@shared/utils/dateUtil";

export default function StaffCard({ staff }: { staff: StaffResponse }) {
  return (
    <Card>
      <CardHeader style={{ alignItems: "center" }}>
        <Avatar name={staff.fullname} />
        <View>
          <CardTitle>{staff.fullname}</CardTitle>
          <CardDescription>{staff.role}</CardDescription>
        </View>
        <CardAction>
          <Badge
            label={staff.active ? "Aktif" : "Tidak Aktif"}
            variant={staff.active ? "success" : "danger"}
          />
        </CardAction>
      </CardHeader>
      <CardFooter style={{ justifyContent: "space-between" }}>
        <Text style={{ fontSize: FontSizes.sm, color: Colors.text.primary }}>
          Tanggal terdaftar
        </Text>
        <Text style={{ fontSize: FontSizes.sm, color: Colors.text.primary }}>
          {convertDate(staff.createdAt)}
        </Text>
      </CardFooter>
    </Card>
  );
}
