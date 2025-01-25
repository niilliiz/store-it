"use client";

import { usePathname, useRouter } from "next/navigation";
import { sortTypes } from "@/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Sort() {
  const path = usePathname();
  const router = useRouter();

  function handleSort(value: string) {
    router.push(`${path}?sort=${value}`);
  }
  return (
    <Select onValueChange={handleSort} defaultValue={sortTypes[0].value}>
      <SelectTrigger className="sort-select">
        <SelectValue placeholder={sortTypes[0].value} />
      </SelectTrigger>
      <SelectContent className="sort-select-content">
        {sortTypes.map((sortType) => (
          <SelectItem
            value={sortType.value}
            key={sortType.label}
            className="shad-select-item"
          >
            {sortType.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
