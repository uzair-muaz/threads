import Image from "next/image";
import Link from "next/link";
import React from "react";

function Topbar() {
  const isSignedIn = true;
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/logo.svg" alt="logo" width={28} height={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Threads</p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          {isSignedIn ? (
            <div className="flex cursor-pointer gap-3">
              <Image src="/logout.svg" alt="user" width={24} height={24} />
              <div className="bg-[#121417] border rounded-full p-1">
              <Image src="/user.svg" alt="user" width={24} height={24} className="rounded-full"/>
              </div>

            </div>
          ) : (
            <div className="flex cursor-pointer">
              <button className="">Sign In</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
