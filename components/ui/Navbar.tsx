import Link from "next/link";
import { GiMountaintop } from "react-icons/gi";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
const Navbar = () => {
  return (
    <>
      <div className="bg-cyan-400 dark:bg-slate-700 text-black py-2 px-5 flex justify-between">
        <Link href="/">
          <span className="self-center whitespace-nowrap px-2 py-1 bg-gradient-to-r from-red-500 via-white-500 to bg-blue-500 rounded-xl text-white font-bold flex flex-row justify-around p-10">
            <GiMountaintop className="size-10" />
            mariposaweb
          </span>
        </Link>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        </Avatar>
      </div>
    </>
  );
};

export default Navbar;
