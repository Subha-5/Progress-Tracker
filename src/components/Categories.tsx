// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// type CategoriesProps = {
//   defaultSelectedValue: string | undefined;
//   id: string | undefined;
//   name: string | undefined;
//   value: string | undefined;
//   onChange(): any | undefined;
// };

// export function Categories({
//   defaultSelectedValue,
//   id,
//   name,
//   value,
//   onChange,
// }: CategoriesProps) {
//   return (
//     <Select
//       defaultValue={defaultSelectedValue}
//       name={name}
//       value={value}
//       onValueChange={(value) => {onChange(value)}}
//     >
//       <SelectTrigger className="w-full">
//         <SelectValue placeholder="Select your present status" />
//       </SelectTrigger>
//       <SelectContent id={id}>
//         <SelectGroup>
//           <SelectLabel>Your status: </SelectLabel>
//           <SelectItem value="current">Currently doing</SelectItem>
//           <SelectItem value="planning">Plan to do</SelectItem>
//           <SelectItem value="completed">Completed already</SelectItem>
//           <SelectItem value="on-hold">On hold</SelectItem>
//           <SelectItem value="dropped">Dropped</SelectItem>
//         </SelectGroup>
//       </SelectContent>
//     </Select>
//   );
// }
