"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Topbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full h-16 bg-white flex gap-3 p-5">
      {[
        {
          name: "챗봇",
          url: "/",
        },
        { name: "루틴", url: "/routine" },
      ].map((item: { name: string; url: string }) => (
        <Link
          key={item.name}
          className={`${
            pathname === item.url ? "text-black" : "text-gray-500 font-normal"
          } text-2xl font-bold`}
          href={item.url}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Topbar;
