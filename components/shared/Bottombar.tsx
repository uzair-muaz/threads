"use client";

import React from "react";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

function Bottombar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              href={link.route}
              key={link.label}
              className={`bottombar_link ${isActive && "bg-primary-500"}`}
            >
              <Image
                width={24}
                height={24}
                src={link.imgURL}
                alt={link.label}
              />
              <p className="text-subtle-medium text-light-1 max-sm:hidden">
                {link.label.split(' ')[0]}
                </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Bottombar;
