"use client";
import React from "react";
import SideNav from "../ui/SideNav/SideNav";
import InputSearch from "../ui/InputSearch/InputSearch";
import { useSearchParams } from "next/navigation";
import InputResult from "../ui/InputResult/InputResult";

export default function Layout({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const params = searchParams.get("search")?.toLowerCase();
  console.log(params);
  return (
    <div>
      <SideNav />
      <InputSearch />
      <div>{children}</div>
    </div>
  );
}
