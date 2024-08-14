import React from "react";
import SideNav from "../ui/sideNav/sidenav";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SideNav />
      <div>{children}</div>
    </div>
  );
}
