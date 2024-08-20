import React from "react";
import SideNav from "../ui/SideNav/SideNav";
import InputSearch from "../ui/InputSearch/InputSearch";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SideNav />
      <InputSearch />
      <div>{children}</div>
    </div>
  );
}
