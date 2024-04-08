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
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Profile({ username, email }: UserDetailsProps) {
  const router = useRouter();
  const [profile, setProfile] = useState({ username: "", email: "" });
  const handleLogout = async () => {
    try {
      await axios.post("/api/user/logout");
      router.push("/login");
    } catch (error) {
      console.log("Logout unsuccessful !!!");
    }
  };

  async function getProfile() {
    const response = await axios.get("/api/user/profile");
    const profileData = response.data.data;    
    setProfile({
      username: profileData.username,
      email: profileData.email,
    });
  }

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="invert w-min">
        <Button variant="outline">Profile</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-black text-white p-2 md:p-4 mx-4">
        <DropdownMenuLabel className="text-lg md:text-xl pb-0">
          {profile.username}
        </DropdownMenuLabel>
        <DropdownMenuLabel className="text-muted font-normal pt-0">
          {profile.email}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="border border-white w-full p-2 my-4"
          onClick={handleLogout}
          disabled
        >
          Verify Account
        </DropdownMenuItem>
        <DropdownMenuItem
          className="border border-white w-full p-2 my-4"
          disabled
        >
          Reset Password
        </DropdownMenuItem>
        <DropdownMenuItem
          className="border border-white w-full p-2 my-4"
          onClick={handleLogout}
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
