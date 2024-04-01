import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type CategoriesProps = {
  defaultSelectedValue: string | undefined;
};

export function Categories({defaultSelectedValue}: CategoriesProps) {
  return (
    <Select defaultValue={defaultSelectedValue}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select your present status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Your status: </SelectLabel>
          <SelectItem value="current">Currently doing</SelectItem>
          <SelectItem value="planning">Plan to do</SelectItem>
          <SelectItem value="completed">Completed already</SelectItem>
          <SelectItem value="on-hold">On hold</SelectItem>
          <SelectItem value="dropped">Dropped</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
