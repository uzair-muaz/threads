"use client";

import Link from "next/link";
import React from "react";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
function RightSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <section className="custom-scrollbar rightsidebar">
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-light-1 text-heading4-medium">
          Suggested Communities
        </h3>
      </div>
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-light-1 text-heading4-medium">Suggested Users</h3>
      </div>
    </section>
  );
}

export default RightSidebar;
