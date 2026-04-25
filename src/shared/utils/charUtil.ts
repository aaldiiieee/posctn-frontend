import { AVATAR_PALETTE } from "@shared/constants/variants";

/** Ambil maks 2 inisial dari nama, misal "John Doe" → "JD" */
export function getInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

/** Pilih warna avatar berdasarkan hash nama supaya konsisten per entitas */
export function avatarColorFromName(name: string): string {
  const hash = name.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return AVATAR_PALETTE[hash % AVATAR_PALETTE.length];
}