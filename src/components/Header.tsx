import { AddSheet as AddTask } from "@/components/AddSheet";
import Profile from "@/components/Profile";
import { UserDetailsProps } from "@/types/task";

export default function Header({ username, email }: UserDetailsProps) {
  return (
    <header className="!w-full flex flex-row  md:flex-row items-center justify-between p-2 md:py-8 md:p-4">
      <h3 className="w-full text-white font-semibold text-xl lg:text-4xl ">
        Monitor your Goals
      </h3>
      <div className="w-full flex justify-end flex-row md:justify-end gap-2 md:gap-8 px-2">
      <AddTask />
      <Profile username={username} email={email}/>
      </div>
    </header>
  );
}
