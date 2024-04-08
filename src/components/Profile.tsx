import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { UserDetailsProps } from "@/types/task";

export default function Profile({ username, email }: UserDetailsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="invert w-min">
        <Button variant="outline">Profile</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-black text-white p-2 md:p-4 mx-4">
        <DropdownMenuLabel className="text-lg md:text-xl pb-0">{username}</DropdownMenuLabel>
        <DropdownMenuLabel className="text-muted font-normal pt-0">{email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="border border-white w-full p-2 my-4">Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
